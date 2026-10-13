import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav, Hero, Research, Engine, Observatory, Roadmap, About, Footer } from "@/components/zaanix/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zaanix Labs — Autonomous Empirical Research" },
      { name: "description", content: "Independent research institute running high-velocity empirical studies with the Zaanix Data & Research AI Agent." },
      { property: "og:title", content: "Zaanix Labs — Autonomous Empirical Research" },
      { property: "og:description", content: "Independent, agent-driven empirical science across industries. Founded by Ajmal Baba." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background bg-mesh text-foreground">
      <Nav />
      <main>
        <Hero />
        <Research />
        <Engine />
        <Observatory />
        <Roadmap />
        <About />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
