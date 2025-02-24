"use client";

export default function PrimaryButton({ children, type = "button" }) {
    return (
        <button type={type} className="bg-[var(--dark-blue)] py-[0.5rem] px-[1.875rem] sm:py-[0.875rem] sm:px-[2.8125rem] rounded-[0.35rem] sm:rounded-[0.75rem] 2xl:text-[1rem] flex gap-[0.625rem] font-bold justify-center items-center text-white w-full 2xl:py-[1rem]">
            {children}
        </button>

    )
}
