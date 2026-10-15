// ZannixLabs Vite + TanStack Start configuration
// Includes TanStack devtools, tanstackStart, viteReact, tailwindcss, tsConfigPaths,
// nitro (with Cloudflare default target), VITE_* env injection, and @ path alias.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    // Pre-bundle heavy client deps at startup so Vite never re-optimizes mid-session
    // (mid-session re-optimization loads two React copies and blanks the preview).
    optimizeDeps: {
      include: [
        "three", "@react-three/fiber", "@react-three/drei", "framer-motion", "canvas-confetti",
        "recharts", "sonner", "lucide-react", "katex",
      ],
    },
  },
});
