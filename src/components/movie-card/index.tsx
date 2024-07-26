import { CardDescription } from "./components/card-description";
import { CardHeader } from "./components/card-header";
import { CardRating } from "./components/card-rating";

interface MovieCardProps {
    movie: {
        imdbID: string;
        Title: string;
        Year: string;
        Poster: string;
        runtime: number;
        imdbRating: number;
        userRating: number;
    }
    handleCloseCard: (movie: null) => void
}

export function MovieCard({ movie, handleCloseCard }: MovieCardProps) {
    return (
        <>
            <CardHeader 
                movie={movie}
                handleCloseCard={handleCloseCard}
            />

            <CardDescription>
                <CardRating />
            </CardDescription>
        </>
    )
}