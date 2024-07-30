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
  }

interface MovieCardProps {
    movie: SelectedMovie
    handleCloseCard: (movie: null) => void
    addToListHandler: (movie: SelectedMovie) => void
}

export function MovieCard({ movie, handleCloseCard, addToListHandler }: MovieCardProps) {
    return (
        <>
            <CardHeader 
                movie={movie}
                handleCloseCard={handleCloseCard}
            />

            <CardDescription>
                <CardRating 
                    movie={movie}
                    addToListHandler={addToListHandler}
                />

                <p className="w-full">
                    {movie.Plot}
                </p>
            </CardDescription>
        </>
    )
}