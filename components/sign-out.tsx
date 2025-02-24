"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

import { IoExitOutline } from "react-icons/io5";

const SignOut = () => {
  const handleSignOut = async () => {
    await signOut()

  };

  return (
    <div className="flex justify-center">
      <Button variant="destructive" onClick={handleSignOut} >
        <IoExitOutline className="text-red-700 text-[40px] size-[40px] " />
      </Button>
    </div>
  );
};

export { SignOut };
