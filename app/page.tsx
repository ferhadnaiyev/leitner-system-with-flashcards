import AccordionItem from "@/components/AccordionItem";
import Header from "@/components/Header";

import { auth } from "@/lib/auth";
import CardMapper from "@/features/Cards/components/CardMapper";
import BoxMapper from "@/features/Boxes/components/BoxMapper";
import AddNewCardModal from "@/features/Cards/components/AddNewCardModal";
import PracticeModal from "@/features/PracticeModal/components/PracticeModal";
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await auth()
  if (!session) {
    redirect("/account/sign-in")
  }
  return (
    <div>

      <Header session={session} />
      <div className="text-[var(--dark)] flex flex-col sm:gap-[80px] my-[35px] lg:my-[50px] 2xl:my-[86px] container w-full mx-auto   px-[1rem] xs:px-[3rem] lg:px-[4.5rem]">


        {/* What is Leitner System? */}
        <AccordionItem />


        <main className="flex flex-col gap-[80px]">
          <CardMapper />
          <BoxMapper />
          <AddNewCardModal />
          <PracticeModal />
        </main>
      </div>
    </div>
  );
}
