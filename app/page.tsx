import BoxWrapper from "@/components/BoxWrapper";
import CardCarousel from "@/components/CardCarousel";

export default async function Home() {
  return (
    <div className="flex flex-col gap-[80px] px-[72px] my-[86px]">
      <header className="flex flex-col gap-[60px] ">
        <h1 className="font-bold leading-[48.76px] text-[40px] flex justify-center h-[49px]">
          The Leitner System
        </h1>
        <fieldset className="border-2 border-[var(--yellow)] rounded-[12px]  p-4 mb-5 bg-gray-100">
          <legend className="bg-[var(--yellow)] py-[10px] px-[20px] rounded-[12px] text-[22px] font-semibold leading-[26.82px]">
            What is Leitner System?
          </legend>
          <p className="flex justify-center items-center line-clamp-5 text-[18px] leading-[21.94px] font-medium sm:py-[20px] sm:px-[50px]">
            The Leitner System is a spaced repetition technique using
            flashcards, developed by Sebastian Leitner in the 1970s. It
            optimizes review frequency based on how well you remember each card.
            You divide flashcards into multiple groups, usually five boxes. All
            new cards start in Box 1. If you remember a card, it moves to the
            next box; if you forget, it returns to Box 1. Each box has a
            different review interval: Box 1 is reviewed daily, Box 2 every two
            days, Box 3 every four days, Box 4 every eight days, and Box 5 every
            sixteen or more days. This method reinforces difficult material more
            frequently while reducing review time for familiar content.
          </p>
        </fieldset>
      </header>

      <main className="flex flex-col gap-[80px]">
        <CardCarousel />
        <BoxWrapper />
      </main>
    </div>
  );
}
