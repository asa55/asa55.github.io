import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,
});