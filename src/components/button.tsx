import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<'button'> {
    children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button {...props} className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full top-4 right-4 text-md font-bold">
            {children}
        </button>
    )
}