import { cn } from "@/utils/MergeTailwindcss"


function SecondaryButton({ children, className = "", onClick }) {


    return (
        <button
            onClick={onClick}
            className={cn(
                "font-semibold",
                "text-white",
                `bg-[var(--green)]`,
                "px-[10px]",
                "py-[10px]",
                "text-[12px]",
                "w-full",
                "rounded-[7px]",
                className
            )}
        >
            {children}
        </button>
    )
}

export default SecondaryButton
