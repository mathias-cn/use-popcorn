import { ReactNode } from 'react';

interface MainProps {
    children: ReactNode
}

export function Main({ children }: MainProps) {
    return (
        <div className="flex flex-wrap gap-3">
            {children}
        </div>
    )
}