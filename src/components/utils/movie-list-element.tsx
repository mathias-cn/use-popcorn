import { MovieAttr } from "./movie-attr"

interface MovieListElementProps {
    title: string
    poster: string
    otherData: (string | number)[]
    clickHandler: () => void
}

export function MovieListElement({ title, poster, otherData, clickHandler }: MovieListElementProps) {
    return (
        <button onClick={clickHandler} className="w-full flex gap-3 p-4 hover:bg-gray-600 transition-all cursor-pointer text-left">
            <img className="max-w-16 rounded-md" src={poster} alt={`${title} Poster`} />
            <div>
                <h3 className="font-semibold text-xl">{title}</h3>
                <div className="flex gap-4 items-center">
                    {otherData.map((data, index) => (
                        <MovieAttr key={index}>{data}</MovieAttr>
                    ))}
                </div>
            </div>
        </button>
    )
}