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
    inWatched: boolean
    addActions?: {
        movie: SelectedMovie
        addToListHandler: (movie: SelectedMovie) => void
    }
    removeAndUpdateActions?: {
        imdbID: string
        updateHandler: (id: string, newRating: number) => void
        removeHandler: (id: string) => void
    }
}

export function CardRating({ inWatched, addActions, removeAndUpdateActions }: CardRatingProps) {
    const [currRating, setCurrRating] = useState(5)

    return (<div className="w-full bg-gray-800 p-4 lg:px-8 lg:py-6 rounded-lg space-y-6">
        <StarRating 
            maxRating={10}
            defaultRating={5}
            setExternalRating={setCurrRating}
        />

        {inWatched && addActions &&  (
            <Button width="full" colorSchema="colored" onClick={() => addActions.addToListHandler({...addActions.movie, userRating: currRating})}>
                + Add to List
            </Button>
        )}

        {!inWatched && removeAndUpdateActions && (
            <>
                <Button 
                    width="full"
                    colorSchema="colored" 
                    onClick={() => removeAndUpdateActions.updateHandler(removeAndUpdateActions.imdbID, currRating)}
                >
                    Update Rating
                </Button>
                <Button 
                    width="full"
                    colorSchema="dark" 
                    onClick={() => removeAndUpdateActions.removeHandler(removeAndUpdateActions.imdbID)}
                >
                    - Remove from List
                </Button>
            </>
        )}
    </div>)
}