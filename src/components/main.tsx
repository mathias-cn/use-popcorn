import { ReactNode } from 'react';

interface MainProps {
    children: ReactNode
}

export function Main({ children }: MainProps) {
    return (
        <div className="flex flex-wrap items-start justify-center gap-3 w-full max-w-screen-xl self-center max-h-[calc(100%-80px)]">
            {children}
        </div>
    )
}