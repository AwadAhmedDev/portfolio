// Tests de bout en bout (architecture.md §7) : lancés seulement sur GitHub Actions (R7),
// sur le site exporté (out/) servi comme sur Hostinger par scripts/serve-out.mjs.
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  forbidOnly: true,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: { baseURL: "http://localhost:3101", locale: "fr-FR" },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
  webServer: {
    command: "node scripts/serve-out.mjs 3101",
    url: "http://localhost:3101",
    reuseExistingServer: !process.env.CI,
  },
});
