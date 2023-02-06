/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SENTIMENT_API_HOST: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}