import { useState } from "react"
import { NavBar } from "./components/navbar";
import { Box } from "./components/box";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt1375661236",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
  {
    imdbID: "group-aria-selected:",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
  {
    imdbID: "234",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  // {
  //   imdbID: "tt1375666",
  //   Title: "Inception",
  //   Year: "2010",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  //   runtime: 148,
  //   imdbRating: 8.8,
  //   userRating: 10,
  // },
  // {
  //   imdbID: "tt0088763",
  //   Title: "Back to the Future",
  //   Year: "1985",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  //   runtime: 116,
  //   imdbRating: 8.5,
  //   userRating: 9,
  // },
];

const average = (arr: number[]) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export function App() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState(tempMovieData)
  const [watched, setWatched] = useState(tempWatchedData)
  const [movieBoxOpen, setMovieBoxOpen] = useState(true)
  const [watchedBoxOpen, setWatchedBoxOpen] = useState(true)

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <NavBar 
        moviesLength={movies.length} 
        query={query}
        setQuery={setQuery}
      />

      <div className="flex flex-wrap gap-3">
        <Box 
          open={movieBoxOpen}
          type={"movie"}  
          openOrCloseHandler={setMovieBoxOpen}
          query={query}
          movies={movies}
        />

        <Box 
          open={watchedBoxOpen}
          type={"watched"}  
          openOrCloseHandler={setWatchedBoxOpen}
          watched={tempWatchedData}
          watchedData={{
            length: watched.length,
            avgImdbRating: avgImdbRating,
            avgRuntime: avgRuntime,
            avgUserRating: avgUserRating
          }}
        />
      </div>
    </>
  )
}