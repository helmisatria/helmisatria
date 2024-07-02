/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly DEV: boolean;
  readonly SENTIMENT_API_HOST: string;
  // more env variables...
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
  readonly CONTENTFUL_PREVIEW_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
