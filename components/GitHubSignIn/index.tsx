
import { signIn } from "@/lib/auth";

import { PiGithubLogoFill } from "react-icons/pi";
import PrimaryButton from "../PrimaryButton";
const GithubSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github")
      }}
      className="w-full"
    >
      <PrimaryButton type="submit">
        <PiGithubLogoFill className="text-white size-[1.5rem]" />
        GitHub
      </PrimaryButton>
    </form>

  );
};

export { GithubSignIn };
