import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/stores/store-provider";

import { Montserrat } from "next/font/google";

import Modal from "@/components/Modal";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Leitner Flascards",
  description: "The Leitner System is a spaced repetition technique using flashcards, developed by Sebastian Leitner in the 1970s. It optimizes review frequency based on how well you remember each card. You divide flashcards into multiple groups, usually five boxes. All new cards start in Box 1. If you remember a card, it moves to the next box; if you forget, it returns to Box 1. Each box has a different review interval: Box 1 is reviewed daily, Box 2 every two days, Box 3 every four days, Box 4 every eight days, and Box 5 every sixteen or more days. This method reinforces difficult material more frequently while reducing review time for familiar content.",
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

          {children}

          <Toaster richColors position="bottom-right" />
          <Modal />
        </StoreProvider>

      </body>
    </html>
  );
}
