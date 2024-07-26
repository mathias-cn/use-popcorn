import { ReactNode } from "react"

interface MovieAttrProps {
    children: ReactNode
}

export function MovieAttr({ children }: MovieAttrProps) {
    return (
        <p> {children} </p>
    )
}