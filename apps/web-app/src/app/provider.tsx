'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from 'apps/web-app/src/app/get-query-client';
export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
