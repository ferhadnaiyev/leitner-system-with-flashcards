import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/stores/store-provider";



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
          {children}
        </StoreProvider>

      </body>
    </html>
  );
}
