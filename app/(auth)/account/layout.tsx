import FormNav from "@/components/FormNav";
import type { Metadata } from "next";


import "@/styles/helvetica_font.css"




export const metadata: Metadata = {
    title: "Leitner Flascards Account",
    description: "The Leitner System is a spaced repetition technique using flashcards, developed by Sebastian Leitner in the 1970s. It optimizes review frequency based on how well you remember each card. You divide flashcards into multiple groups, usually five boxes. All new cards start in Box 1. If you remember a card, it moves to the next box; if you forget, it returns to Box 1. Each box has a different review interval: Box 1 is reviewed daily, Box 2 every two days, Box 3 every four days, Box 4 every eight days, and Box 5 every sixteen or more days. This method reinforces difficult material more frequently while reducing review time for familiar content.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <main className="container w-full mx-auto sm:px-[4.5rem] flex justify-center items-center h-dvh">
            <div className="bg-[var(--blue)] gap-[1rem] sm:gap-[2.75rem]  py-[1rem] sm:py-[3rem] px-[2rem] sm:px-[2.5rem] justify-center flex flex-col min-h-[486px]">
                <div className="flex flex-col justify-between items-center gap-[1.125rem]">
                    <h2 className="h2-fluid font-semibold flex justify-center items-center">The Leitner System</h2>
                    <FormNav />
                </div>
                <div className="font-helvetica">
                    {children}
                </div>
            </div>
        </main>




    );
}
