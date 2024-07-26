import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
    base: 'flex items-center justify-center text-md font-bold rounded-full',

    variants: {
        btnType: {
            roundedSm: 'w-6 h-6',
            roundedLg: 'w-8 h-8 text-xl',
            normal: 'px-2 py-3'
        },

        colorSchema: {
            dark: 'bg-gray-800',
            light: 'bg-white text-violet-600 shadow-black shadow-lg',
            colored: 'bg-violet-600',
        },

        width: {
            full: 'w-full',
            none: ''
        },

        position: {
            absoluteLeft: 'absolute top-4 left-4',
            absoluteRight: 'absolute top-4 right-4',
            relative: ''
        }
    },

    defaultVariants: {
        btnType: 'normal',
        colorSchema: 'dark',
        position: 'relative',
        width: 'none'
    }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode
}

export function Button({ children, btnType, colorSchema, position, width,  ...props }: ButtonProps) {
    return (
        <button {...props} className={buttonVariants({btnType, colorSchema, position, width})}>
            {children}
        </button>
    )
}