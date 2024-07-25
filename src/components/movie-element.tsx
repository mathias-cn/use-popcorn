interface MovieElementProps {
    title: string
    poster: string
    otherData: (string | number)[]
}

export function MovieElement({ title, poster, otherData }: MovieElementProps) {
    return (
        <div className="flex gap-3 p-4">
            <img className="max-w-16 rounded-md" src={poster} alt={`${title} Poster`} />
            <div>
                <h3 className="font-semibold text-xl">{title}</h3>
                <div className="flex gap-4 items-center">
                    {otherData.map((data, index) => (
                        <p key={index}>{data}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}