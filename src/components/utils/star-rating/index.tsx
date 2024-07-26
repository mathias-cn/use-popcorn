import { useState } from "react"
import { Star } from "./components/full-star"

interface StarRatingProps {
    maxRating?: number
    defaultRating?: number
}

export function StarRating({ maxRating = 5, defaultRating = 3 }: StarRatingProps) {
    const [rating, setRating] = useState(defaultRating)
    const [hoveredRating, setHoveredRating] = useState(0)

    return (
        <div className="flex items-center justify-between gap-5 text-xl text-yellow-400">
            <div className="flex items-center justify-between flex-1">
                {Array.from({ length: maxRating }, (_, i) => (
                    <Star 
                        selected={hoveredRating > rating ? hoveredRating >= i + 1 : rating >= i + 1}
                        onClick={() => setRating(i+1)} 
                        onMouseEnter={() => setHoveredRating(i+1)}
                        onMouseLeave={() => setHoveredRating(0)}
                        key={i} 
                    />
                ))}
            </div>
            <p className="font-semibold w-4">{hoveredRating > rating ? hoveredRating : rating}</p>
        </div>
    )
}