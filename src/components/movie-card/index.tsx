import { CardDescription } from "./components/card-description";
import { CardHeader } from "./components/card-header";
import { CardRating } from "./components/card-rating";

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
    Director: string
    Actors: string
  }

interface MovieCardProps {
    movie: SelectedMovie
    handleCloseCard: (movie: null) => void
    addToListHandler?: (movie: SelectedMovie) => void
    updateHandler?: (id: string, newRating: number) => void
    removeHandler?: (id: string) => void
    inWatched: boolean
}

export function MovieCard({ movie, handleCloseCard, addToListHandler, inWatched, updateHandler, removeHandler }: MovieCardProps) {
    return (
        <>
            <CardHeader 
                movie={movie}
                handleCloseCard={handleCloseCard}
            />

            <CardDescription>
                {inWatched && addToListHandler && (
                    <CardRating 
                        inWatched={true}    
                        addActions={{
                                movie: movie,
                                addToListHandler: addToListHandler
                            }}
                    />
                )}
                {!inWatched && updateHandler && removeHandler && (
                    <CardRating 
                        inWatched={false}    
                        removeAndUpdateActions={{
                                imdbID: movie.imdbID,
                                updateHandler: updateHandler,
                                removeHandler: removeHandler
                            }}
                    />
                )}

                <p className="w-full">{movie.Plot}</p>
                <p className="w-full"><span className="font-semibold">Director:</span> {movie.Director}</p>
                <p className="w-full"><span className="font-semibold">Actors:</span> {movie.Actors}</p>
            </CardDescription>
        </>
    )
}