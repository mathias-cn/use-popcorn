import { useState } from "react";
import { Button } from "../../utils/button";
import { StarRating } from "../../utils/star-rating";

interface SelectedMovie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    Genre: string;
    Runtime: string;
    imdbRating: number;
    userRating: number;
    Plot: string
  }

interface CardRatingProps {
    movie: SelectedMovie
    addToListHandler: (movie: SelectedMovie) => void
}

export function CardRating({ movie, addToListHandler }: CardRatingProps) {
    const [currRating, setCurrRating] = useState(5)

    return (
        <div className="w-full bg-gray-800 p-4 lg:px-8 lg:py-6 rounded-lg space-y-6">
            <StarRating 
                maxRating={10}
                defaultRating={5}
                setExternalRating={setCurrRating}
            />

            <Button width="full" colorSchema="colored" onClick={() => addToListHandler({...movie, userRating: currRating})}>
                + Add to List
            </Button>
        </div>
    )
}