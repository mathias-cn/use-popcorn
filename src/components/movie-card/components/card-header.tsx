import { Button } from "../../utils/button";
import { MovieAttr } from "../../utils/movie-attr";

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

interface CardHeaderProps {
    movie: SelectedMovie
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
                <h2 className="font-bold text-xl md:text-2xl">{movie.Title}</h2>
                <MovieAttr>{movie.Year} - {movie.Runtime}</MovieAttr>
                <MovieAttr>{movie.Genre}</MovieAttr>
                <MovieAttr>🌟 {movie.imdbRating} IMDb rating</MovieAttr>
            </div>
        </div>
    )
}