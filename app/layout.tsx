import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/stores/store-provider";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Leitner Flascards",
  description: "Learning neyise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat"
      >

        <StoreProvider>
          {/* <Header /> */}
          {children}
        </StoreProvider>

      </body>
    </html>
  );
}
