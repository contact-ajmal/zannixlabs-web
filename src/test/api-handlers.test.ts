import { describe, it, expect } from "vitest";
import { handleApiRequest } from "../server/api";

describe("Cloudflare Backend API Handlers", () => {
  it("responds to /api/health with operational status", async () => {
    const req = new Request("http://localhost:8080/api/health", { method: "GET" });
    const res = await handleApiRequest(req, {});
    expect(res).not.toBeNull();
    expect(res?.status).toBe(200);
    const body = await res?.json();
    expect(body.status).toBe("operational");
    expect(body.institute).toBe("ZannixLabs Frontier AI Research");
    expect(body.d1Connected).toBe(false);
  });

  it("handles valid email subscription on /api/subscribe", async () => {
    const req = new Request("http://localhost:8080/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "researcher@oxford.ac.uk", source: "test" }),
    });
    const res = await handleApiRequest(req, {});
    expect(res?.status).toBe(200);
    const body = await res?.json();
    expect(body.success).toBe(true);
  });

  it("rejects invalid email subscription on /api/subscribe", async () => {
    const req = new Request("http://localhost:8080/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "invalid-email" }),
    });
    const res = await handleApiRequest(req, {});
    expect(res?.status).toBe(400);
    const body = await res?.json();
    expect(body.error).toBeDefined();
  });

  it("logs paper download telemetry on /api/download", async () => {
    const req = new Request("http://localhost:8080/api/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paperId: "openrouter-llm-economics", downloadType: "pdf" }),
    });
    const res = await handleApiRequest(req, {});
    expect(res?.status).toBe(200);
    const body = await res?.json();
    expect(body.success).toBe(true);
    expect(body.paperId).toBe("openrouter-llm-economics");
  });

  it("accepts academic inquiries on /api/inquiry", async () => {
    const req = new Request("http://localhost:8080/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Prof. Alan Turing",
        email: "turing@cam.ac.uk",
        organization: "Cambridge",
        message: "Proposing replication trial for LMSYS leaderboard confounder findings.",
      }),
    });
    const res = await handleApiRequest(req, {});
    expect(res?.status).toBe(200);
    const body = await res?.json();
    expect(body.success).toBe(true);
  });

  it("rejects short messages on /api/inquiry", async () => {
    const req = new Request("http://localhost:8080/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "test@example.com",
        message: "Hi",
      }),
    });
    const res = await handleApiRequest(req, {});
    expect(res?.status).toBe(400);
  });

  it("returns research statistics on /api/stats", async () => {
    const req = new Request("http://localhost:8080/api/stats", { method: "GET" });
    const res = await handleApiRequest(req, {});
    expect(res?.status).toBe(200);
    const body = await res?.json();
    expect(body.subscribers).toBeGreaterThan(0);
    expect(body.totalDownloads).toBeGreaterThan(0);
  });
});
