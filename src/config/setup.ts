import { APIRequestContext, APIResponse, request } from 'playwright/test';
import { configServerRest } from './config-definitions';

declare global {
    var testName: string;
    var requestServerRest: APIRequestContext;
    var response: Promise<APIResponse>;
}


export async function setupServerRest() {
  globalThis.requestServerRest = await request.newContext({
    baseURL: configServerRest.BASE_API_URL,
    extraHTTPHeaders: {
      Accept: 'application/json',
    },
    // httpCredentials: {
    //   username: process.env.USERNAME || 'random',
    //   password: process.env.PASSWORD || 'random',
    // },
    timeout: configServerRest.TIMEOUT,
  });
}


