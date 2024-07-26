import { MovieAttr } from "../../utils/movie-attr"

interface BoxTitleProps {
    title: string
    otherData: (string | number)[]
}

export function BoxTitle({ title, otherData }: BoxTitleProps) {
    return (
        <div className="p-4 space-y-3 bg-gray-600 rounded-lg">
            <h2 className="font-semibold text-xl">{title}</h2>
            <div className="flex justify-between items-center">
                {otherData.map((data, index) => (
                    <MovieAttr key={index}>{data}</MovieAttr>
                ))}
            </div>
        </div>
    )
}