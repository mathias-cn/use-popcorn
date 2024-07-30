interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
    return (
        <p className="uppercase text-center text-xl  font-semibold p-3">
            <span>🚨</span> {error}
        </p>
    )
}