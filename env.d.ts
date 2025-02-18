/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_SENTRY_DSN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
