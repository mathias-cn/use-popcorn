import { useEffect, useState } from "react"
import { NavBar } from "./components/navbar";
import { Box } from "./components/box";
import { Main } from "./components/main";
import { MovieListElement } from "./components/utils/movie-list-element";
import { MovieCard } from "./components/movie-card";
import { api, API_KEY } from "./lib/axios";
import { Loader } from "./components/utils/loader";
import { ErrorMessage } from "./components/utils/error-message";

interface MoviesArray {
  Title: string
  Year: string
  Type: string
  Poster: string
  imdbID: string
}

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

const average = (arr: number[]) =>
  arr.reduce((acc, cur, _i, arr) => acc + cur / arr.length, 0);

export function App() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState<MoviesArray[]>([])
  const [watched, setWatched] = useState<SelectedMovie[]>([])
  
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isLoading2, setIsLoading2] = useState(false)
  const [error2, setError2] = useState("")

  const [selectedMovie, setSelectedMovie] = useState<null | SelectedMovie>(null)
  const [selectedMovieId, setSelectedMovieId] = useState<null | string>(null)

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => Number(movie.Runtime.replace(" min", ""))));

  const watchedTitleDataArray = watched.length > 0 ? [
    `🎞️ ${watched.length} movies`,
    `⭐ ${avgImdbRating}`,
    `🌟 ${avgUserRating}`,
    `⏰ ${avgRuntime} min`,
  ] : ["You haven't watched any movies"]

  const selectedMovieDataArray = selectedMovie ? [
    `⭐ ${selectedMovie.userRating || 0}`,
    `🌟 ${selectedMovie.imdbRating}`,
    `⏰ ${selectedMovie.Runtime}`,
  ] : ["No info to display"]

  useEffect(() => {
    async function fetchMovies() {
      try {
        setError("")
        setIsLoading(true)  
        const res = await api.get(`?apikey=${API_KEY}&s=${query}`)
        
        if(res.status < 200 || res.status >= 300) throw new Error("Something went wrong while searching the movie.")
  
        const data = res.data

        if(data.Response === "False")  throw new Error("Movie not found!")

        setMovies(data.Search)
        setIsLoading(false)
      } catch (err) {
        err instanceof Error 
        ? setError(err.message)
        : setError("An unknown error ocurred")
      } finally {
        setIsLoading(false)
      }
    }

    if(query.length < 3) {
      setMovies([])
      return 
    }

    fetchMovies()
  }, [query])

  useEffect(() => {
    async function fetchMovie() {
      const selectedMovieInArray = watched.filter(m => m.imdbID === selectedMovieId)
      if(selectedMovieInArray.length > 0) {
        setSelectedMovie(selectedMovieInArray[0])
        return
      }

      try {
        setError2("")
        setIsLoading2(true)  
        const res = await api.get(`?apikey=${API_KEY}&i=${selectedMovieId}`)
        
        if(res.status < 200 || res.status >= 300) throw new Error("Something went wrong while searching the movie.")
  
        const data = res.data

        if(data.Response === "False")  throw new Error("Movie not found!")
          
          setSelectedMovie(data)
          setIsLoading2(false)
        } catch (err) {
          err instanceof Error 
          ? setError2(err.message)
          : setError2("An unknown error ocurred")
        } finally {
        setIsLoading2(false)
      }
    }

    if(!selectedMovieId) return

    fetchMovie()
  }, [selectedMovieId, watched])

  function handleDisselectMovie() {
    setSelectedMovie(null)
    setSelectedMovieId(null)
  }

  function handleAddToList(movie: SelectedMovie) {
    setWatched(watched => [movie, ...watched])
    setSelectedMovie(null)
    setSelectedMovieId(null)
  }

  function handleRemoveFromList(id: string) {
    setWatched(watched => watched.filter(w => w.imdbID !== id))
    setSelectedMovie(null)
    setSelectedMovieId(null)
  }

  function handleUpdateList(id: string, newRating: number) {
    setSelectedMovie(null)
    setSelectedMovieId(null)

    const movieToUpdate = watched.filter(w => w.imdbID === id)[0]

    if(newRating === movieToUpdate.userRating) return 

    setWatched(watched => watched.map(w =>
      w.imdbID === id
      ? {...w, userRating: newRating}
      : w
    ))
  }

  return (
    <>
      <NavBar 
        moviesLength={movies?.length || 0} 
        query={query}
        setQuery={setQuery}
      />

      <Main>
        <Box 
          boxTitleData={{
            title: "SEARCH THE MOVIE YOU WANT",
            otherData: [`${!query ? "Type something in the search bar" : `Search: ${query}`}`]
          }}
        >
          {isLoading && <Loader />}
          
          {!isLoading && !error && movies && movies.map((m, i) => (
            <MovieListElement 
              key={i}  
              title={m.Title}
              poster={m.Poster}
              otherData={[
                `📆 ${m.Year}`,
              ]}
              clickHandler={() => setSelectedMovieId(m.imdbID)}
            />
          ))}
          
          {error && <ErrorMessage error={error} />}
        </Box>

        {selectedMovieId && !selectedMovie && <Box boxTitleData={{
            title: "LOADING THE MOVIE",
            otherData: []
          }}>
            {isLoading2 && <Loader />}

            {error2 && <ErrorMessage error={error2} />}
          </Box>
        }

        {selectedMovie && <Box boxTitleData={{
            title: selectedMovie.Title,
            otherData: selectedMovieDataArray
          }} titleDisplayedOnCloseOnly={true}>
            {watched.map(w => w.imdbID).includes(String(selectedMovieId)) ? (
              <MovieCard
                movie={selectedMovie}
                handleCloseCard={handleDisselectMovie}
                inWatched={false}
                removeHandler={handleRemoveFromList}
                updateHandler={handleUpdateList}
                />
              ) : (
                <MovieCard
                movie={selectedMovie}
                handleCloseCard={handleDisselectMovie}
                inWatched={true}
                addToListHandler={handleAddToList}
              />
            )}
          </Box>
        }

        {!selectedMovie && !selectedMovieId && <Box boxTitleData={{
            title: "MOVIES YOU WATCHED",
            otherData: watchedTitleDataArray
          }}>
            {watched.map((m, i) => (
                <MovieListElement 
                  key={i}
                  title={m.Title}
                  poster={m.Poster}
                  otherData={[
                    `⭐ ${m.userRating}`,
                    `🌟 ${m.imdbRating}`,
                    `⏰ ${m.Runtime}`
                  ]}
                  clickHandler={() => setSelectedMovieId(m.imdbID)}
                />
              ))
            }
          </Box>
        }
      </Main>
    </>
  )
}