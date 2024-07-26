import { ReactNode } from "react"

interface CardDescriptionProps {
    children: ReactNode
}

export function CardDescription({ children }: CardDescriptionProps) {
    return (
        <div className="w-full p-4 md:p-8 lg:p-12 space-y-4">
            {children}
        </div>
    )
}