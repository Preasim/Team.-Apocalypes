import "./layout.css";
import "../public/assets/globalThem.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RecoilRootProvider from "./recoilRootProvider";
import Header from "@/component/Header/Header";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TeTo",
  description: "캘린더 ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
