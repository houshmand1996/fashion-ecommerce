/// <reference types="vite/client" />
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_SERVER: string;
    }
  }
}

interface ImportMetaEnv {
  readonly VITE_THEME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
export {};
