declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test' | 'idgf';
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_SERVER: string;
    }
  }
}

export {};
