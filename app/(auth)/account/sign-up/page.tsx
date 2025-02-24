import { Input } from "@/components/ui/input";
import { signUp } from "@/lib/actions";
import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import PrimaryButton from "@/components/PrimaryButton";
import InputLabel from "@/components/InputLabel";
import { FaCheck } from "react-icons/fa";


const Page = async () => {

    const session = await auth();
    if (session) { redirect("/") };



    return (


        <div className="2xl:space-y-[1.125rem]">

            {/* Email/Password Sign Up */}
            <form
                className="gap-[3.75rem] flex flex-col"
                action={async (formData: FormData) => {
                    "use server";
                    const res = await signUp(formData);
                    if (res.success) {
                        redirect("/account/sign-in")
                    }
                }}
            >
                <div className="flex flex-col gap-[0.75rem]">

                    <div className="flex flex-col gap-[1rem] sm:gap-[1.75rem]">
                        <div className="flex flex-col 2xl:gap-[0.375rem]">
                            <InputLabel htmlFor="username">
                                Username
                            </InputLabel>

                            <Input
                                name="username"
                                placeholder="Your Username"
                                type="text"
                                required
                                autoComplete="name"
                            />
                        </div>
                        <div className="flex flex-col 2xl:gap-[0.375rem]">
                            <InputLabel htmlFor="email">
                                Email
                            </InputLabel>

                            <Input
                                name="email"
                                placeholder="Email"
                                type="email"
                                required
                                autoComplete="email"
                            />
                        </div>
                        <div className="flex flex-col 2xl:gap-[0.375rem]">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                name="password"
                                placeholder="Password"
                                type="password"
                                required
                                autoComplete="new-password"
                            />
                        </div>
                    </div>
                    <label className="flex justify-start items-center gap-[0.25rem]">
                        <input type="checkbox" className="bg-white size-[0.375rem] border-none rounded-none cursor-pointer appearance-none peer hidden" />
                        <div className="size-[0.875rem] flex items-center justify-center border-2 border-gray-400 peer-checked:border-[var(--dark-blue)] peer-checked:bg-[var(--dark-blue)] rounded-none">
                            <FaCheck className="text-[var(--blue)]" />
                        </div>
                        <div className="text-[#55524F] text-[0.66rem] sm:text-[0.875rem] text-normal">We haven&apos;t any terms yet</div>
                    </label>
                </div>

                <PrimaryButton type="submit">
                    Register
                </PrimaryButton>
            </form>
            <div className="flex items-center justify-center gap-[0.3125rem]">
                <span className="text-[#55524F] text-[0.875rem] text-normal">
                    Already have an account?
                </span>
                <Link href="/account/sign-in" className="text-[var(--dark-blue)] underline font-semibold">Sign in </Link>

            </div>
        </div>


    );
};

export default Page;
