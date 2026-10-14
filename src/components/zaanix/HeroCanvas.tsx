import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Points, PointMaterial, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Constellation() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const n = 2000;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 2.6 + Math.random() * 1.6;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      arr[i * 3 + 2] = r * Math.cos(p);
    }
    return arr;
  }, []);
  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.06;
    const k = 1 - Math.exp(-2 * dt);
    ref.current.rotation.x += (state.pointer.y * 0.4 - ref.current.rotation.x) * k;
    ref.current.rotation.z += (state.pointer.x * 0.2 - ref.current.rotation.z) * k;
  });
  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial transparent color="#00F2FE" size={0.022} sizeAttenuation depthWrite={false} opacity={0.8} />
    </Points>
  );
}

const vert = /* glsl */ `
  uniform float uTime;
  varying float vGlow;
  void main() {
    vec3 p = position;
    float wave = sin(p.y * 3.0 + uTime * 1.5) * 0.04;
    p += normal * wave;
    vGlow = 0.5 + 0.5 * sin(uTime * 2.0 + p.y * 2.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }`;
const frag = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColor;
  varying float vGlow;
  void main() {
    float pulse = 0.55 + 0.45 * sin(uTime * 2.2);
    gl_FragColor = vec4(uColor * (0.6 + vGlow * 0.9) * (0.7 + pulse * 0.6), 0.55 + pulse * 0.4);
  }`;

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uColor: { value: new THREE.Color("#00F2FE") } }), []);
  const speed = useRef(0.25);
  useFrame((state, delta) => {
    if (!ref.current) return;
    const dt = Math.min(delta, 0.05);
    uniforms.uTime.value += dt;
    const target = 0.25 + Math.hypot(state.pointer.x, state.pointer.y) * 0.35;
    speed.current += (target - speed.current) * (1 - Math.exp(-3 * dt));
    ref.current.rotation.y += dt * speed.current;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.5, 5]} />
        <shaderMaterial vertexShader={vert} fragmentShader={frag} uniforms={uniforms} wireframe transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh scale={1.05}>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshBasicMaterial color="#7B2CBF" wireframe transparent opacity={0.35} />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6.5], fov: 55 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
      <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      <Core />
      <Constellation />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
}
