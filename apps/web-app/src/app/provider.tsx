'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
// import React from 'react';
// const ShoppingCartProvider = React.createContext<{
//   cart: modules.IShoppingCart[] | null;
//   setCart: React.Dispatch<React.SetStateAction<modules.IShoppingCart[] | null>>;
// } | null>(null);
// export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = React.useState<modules.IShoppingCart[] | null>(null);
//   return (
//     <ShoppingCartProvider.Provider value={{ cart, setCart }}>
//       {children}
//     </ShoppingCartProvider.Provider>
//   );
// };
// export const useShoppingCart = () => {
//   const context = React.useContext(ShoppingCartProvider);
//   if (context === null) {
//     throw new Error(
//       'useShoppingCart must be used within a ShoppingCartProvider'
//     );
//   }
//   return context;
// };
export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
