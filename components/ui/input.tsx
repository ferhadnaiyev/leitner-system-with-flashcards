import * as React from "react";


const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ type, ...props }, ref) => {
    return (
      <input
        type={type}
        className="rounded-[0.35rem] sm:rounded-[0.75rem] py-[0.6rem] sm:py-[1.125rem] px-[0.625rem] sm:px-[1rem] bg-white placeholder:text-[var(--dark-blue)] text-[0.75rem] sm:text-[0.875rem] leading-[1.09375rem]"
        ref={ref}
        {...props}
      />

    );
  }
);
Input.displayName = "Input";

export { Input };
