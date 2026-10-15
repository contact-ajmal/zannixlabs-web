# ZannixLabs Engineering & Architecture Guidelines

> Applied AI Research Lab & Platform — https://www.zannixlabs.com

## Repository Overview
This repository contains the web application and interactive research platform for ZannixLabs.
- **Framework**: TanStack Start (React 19 + Vite + Nitro SSR for Cloudflare Pages / Workers)
- **Styling**: Tailwind CSS v4, Lucide React, Google Research design system tokens
- **Data Visualizations**: Recharts, KaTeX mathematical typesetting, Canvas Confetti
- **Research Engine**: Zannix Data Agent coordinating analytical lakehouses, DuckDB telemetry, and camera-ready preprint publishing

## Development Workflow
- `npm run dev`: Launch local Vite dev server on port 8081
- `npm test`: Run Vitest unit and integration test suites
- `npm run build`: Compile client and Nitro server production bundles
