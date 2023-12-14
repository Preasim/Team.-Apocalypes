import "./layout.css";
import "../public/assets/globalThem.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RecoilRootProvider from "./recoilRootProvider";
import NonLoginHeader from "../component/NonLoginHeader/Header";
import LoginHeader from "@/component/LoginHeader/Header";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { getCookie, setCookie } from "cookies-next";
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
      <body className={inter.className} id="show-scene-0">
        {getCookie("loginCookie") !== null ? (
          <LoginHeader />
        ) : (
          <NonLoginHeader />
        )}
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
