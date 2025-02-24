import { GithubSignIn } from "@/components/GitHubSignIn";
import { Input } from "@/components/ui/input";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { executeAction } from "@/lib/executeAction";
import { signIn } from "@/lib/auth";
import { GoogleSignIn } from "@/components/GoogleSignIn";
import PrimaryButton from "@/components/PrimaryButton";
import InputLabel from "@/components/InputLabel";

const SignInPage = async () => {

    const session = await auth()
    if (session) redirect("/")
    return (

        <div className="w-full mx-auto space-y-[1.5rem]">

            {/* Email/Password Sign In */}
            <form
                className="flex flex-col gap-[1rem] sm:gap-[3.75rem]"
                action={async (formData: FormData) => {
                    "use server";
                    await executeAction({
                        actionFn: async () => {
                            await signIn("credentials", formData)
                        }
                    })
                }}
            >
                <div className="flex flex-col gap-[1rem] sm:gap-[1.75rem]">
                    <div className="flex flex-col gap-[0.375rem]">
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input
                            name="email"
                            placeholder="Your email"
                            type="email"
                            required
                            autoComplete="email"
                        />
                    </div>
                    <div className="flex flex-col gap-[0.375rem]">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            name="password"
                            placeholder="Password"
                            type="password"
                            required
                            autoComplete="current-password"
                        />
                        <div className="flex items-end justify-end">
                            <Link href="" className="text-[var(--dark-blue)] text-[0.6rem] sm:text-[0.875rem] font-normal">Forgot password?</Link>
                        </div>
                    </div>
                </div>

                <PrimaryButton type="submit">
                    Sign in
                </PrimaryButton>
            </form>
            <div className="flex justify-center items-center gap-[1rem]">
                <div className="bg-[#55524F] h-[0.0625rem] w-full"></div>
                <div className="text-[var(--dark-blue)] min-w-max">
                    Or with
                </div>

                <div className="bg-[#55524F] h-[0.0625rem] w-full"></div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-[0.75rem] sm:gap-[1rem] w-full">
                <GithubSignIn />
                <GoogleSignIn />
            </div>
        </div>




    );
};

export default SignInPage;
