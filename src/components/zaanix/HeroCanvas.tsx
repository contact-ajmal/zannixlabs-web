import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Constellation() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const n = 2400;
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

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    const dt = Math.min(delta, 0.05);
    const speed = 0.15 + Math.hypot(state.pointer.x, state.pointer.y) * 0.4;
    ref.current.rotation.y += dt * speed;
    ref.current.rotation.x += dt * speed * 0.4;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.5, 6]} />
        <MeshDistortMaterial color="#00F2FE" wireframe roughness={0.1} distort={0.35} speed={1.6} />
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
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={30} color="#7B2CBF" />
      <Core />
      <Constellation />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
}
