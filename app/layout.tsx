import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/stores/store-provider";
import Header from "@/components/Header";



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
    <html lang="en">
      <body
      >

        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>

      </body>
    </html>
  );
}
