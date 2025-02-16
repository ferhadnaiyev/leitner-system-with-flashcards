import AccordionItem from "@/components/AccordionItem";
import BoxWrapper from "@/components/BoxWrapper";
import CardCarousel from "@/components/CardCarousel";

export default async function Home() {
  return (
    <div className="flex flex-col sm:gap-[80px] my-[86px] container w-full mx-auto  px-[3rem] lg:px-[4.5rem]">


      {/* What is Leitner System? */}
      <AccordionItem />


      <main className="flex flex-col gap-[80px]">
        <CardCarousel />
        <BoxWrapper />
      </main>
    </div>
  );
}
