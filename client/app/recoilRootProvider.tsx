"use client";

import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
export default function RecoilRootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>{children}</RecoilRoot>
    </QueryClientProvider>
  );
}
