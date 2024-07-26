import { Button } from "../../utils/button";
import { MovieAttr } from "../../utils/movie-attr";

interface CardHeaderProps {
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

export function CardHeader({ movie, handleCloseCard }: CardHeaderProps) {
    return (
        <div className="flex">
            <Button onClick={() => handleCloseCard(null)} btnType="roundedLg" colorSchema="light" position="absoluteLeft">
                🔙
            </Button>

            <img src={movie.Poster} alt={movie.Title} className="max-w-[100px] md:max-w-[160px]" />
            <div className="flex-1 p-4 md:p-8 bg-gray-600 flex flex-col justify-around">
                <h2 className="font-bold text-2xl md:text-3xl">{movie.Title}</h2>
                <MovieAttr>{movie.Year} - {movie.runtime} min</MovieAttr>
                <MovieAttr>Categories...</MovieAttr>
                <MovieAttr>🌟 {movie.imdbRating} IMDb rating</MovieAttr>
            </div>
        </div>
    )
}