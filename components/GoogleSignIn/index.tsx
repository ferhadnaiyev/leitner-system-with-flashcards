import { FaGoogle } from "react-icons/fa";
import { signIn } from "@/lib/auth";

import PrimaryButton from "../PrimaryButton";

const GoogleSignIn = () => {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("github")
            }}
            className="w-full"
        >
            <PrimaryButton>
                <FaGoogle className="text-white size-[1.5rem]" />
                Google
            </PrimaryButton>
        </form>

    );
};

export { GoogleSignIn };
