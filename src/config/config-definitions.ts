import dotenv from 'dotenv';

dotenv.config({
  path: `./envs/.env.${process.env.environment || 'dev'}`,
});

export const configServerRest = {
  IMG_THRESHOLD: { threshold: 0.4 },
  BASE_API_URL: process.env.BASE_API_URL_SERVEREST,
  TIMEOUT: 10000,
  KEY:  process.env.API_KEY_AGENTES
};

