import { defineConfig } from '@playwright/test';

require('dotenv').config();

export default defineConfig({

  testDir: './src/specs',
  testMatch: /.*\.spec\.ts/,


  //globalSetup: 'src/config/setup.config.ts',

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,

  expect: {

    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },


  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 2,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  reporter: [
    ['dot'],
    ['line'],
    ['html', { open: 'never' }],
    ['allure-playwright'],
    ['junit', { outputFile: './junit-results/results.xml' }],
    ['list'],
        ['playwright-qase-reporter',
            {
                apiToken: '9ae2359bdecaf2a4fcad5e0ccf3af61ee1a9313771ae97c774cf5d71d96faa74',
                projectCode: 'MS',
                runComplete: true,
                basePath: 'https://api.qase.io/v1',
                logging: true,
                uploadAttachments: true,
                sendScreenshot: true,
                rootSuiteTitle: 'Webdriverio Automation Test',
            }],
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    screenshot: 'on',
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    
    /* Base URL to use in actions like `await page.goto('/')`. */

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
   // {
    //  name: 'setup',
    //  testDir: 'src/tests/global.setup.ts',

   // },


    {
      name: 'ms-agentes',

      /* Project-specific settings. */
      use: {
        baseURL: 'ms-agents'

      },
    },


  

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
});
