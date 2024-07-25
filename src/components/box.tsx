import { BoxTitle } from "./box-title"
import { Button } from "./button"
import { MovieElement } from "./movie-element"

interface BoxProps {
    open: boolean
    type: string
    openOrCloseHandler: (b: boolean) => void
    query?: string
    movies?: {
        imdbID: string;
        Title: string;
        Year: string;
        Poster: string;
    }[]
    watched?: {
        imdbID: string;
        Title: string;
        Year: string;
        Poster: string;
        runtime: number;
        imdbRating: number;
        userRating: number;
    }[]
    watchedData?: {
        length: number
        avgImdbRating: number
        avgUserRating: number
        avgRuntime: number
    }
  }

export function Box({ open, type, openOrCloseHandler, query, movies, watched, watchedData }: BoxProps) {
    if(type === "movie") {
        return (
            <div 
                className={`relative bg-gray-700 rounded-lg w-full divide-y-[1px] divide-gray-600 overflow-y-auto sm:w-[calc(50%-6px)] 
                sm:h-[${open ? "80vh" : "96px"}]`}
            >
                <Button onClick={() => openOrCloseHandler(!open)}>
                    {open ? <span>➖</span> : <span>➕</span>}
                </Button>
        
                <BoxTitle 
                    title="SEARCH THE MOVIE YOU WANT"
                    otherData={[
                        `${!query ? "Type something in the search bar" : `Search: ${query}`}`]
                    }
                />

                {open && movies && movies.map(m => (
                    <MovieElement 
                        title={m.Title}
                        poster={m.Poster}
                        otherData={[
                        `📆 ${m.Year}`,
                        ]}
                    />
                ))}
            </div>
        )
    }
    
    const watchedTitleDataArray = watchedData && watchedData.length > 0 ? [
        `🎞️${watchedData.length} movies`,
        `⭐${watchedData.avgImdbRating}`,
        `🌟${watchedData.avgUserRating}`,
        `⏰${watchedData.avgRuntime} min`,
    ] : ["You haven't watched any movies"]

    return (
        <div 
            className={`relative bg-gray-700 rounded-lg w-full divide-y-[1px] divide-gray-600 overflow-y-auto sm:w-[calc(50%-6px)] 
            sm:h-[${open ? "80vh" : "96px"}]`}
        >
            <Button onClick={() => openOrCloseHandler(!open)}>
                {open ? <span>➖</span> : <span>➕</span>}
            </Button>

            <BoxTitle 
                title="MOVIES YOU WATCHED"
                otherData={watchedTitleDataArray}
            />

            {open && watched && watched.map(m => (
              <MovieElement 
                title={m.Title}
                poster={m.Poster}
                otherData={[
                  `⭐ ${m.userRating}`,
                  `🌟 ${m.imdbRating}`,
                  `⏰ ${m.runtime}`
                ]}
              />
            ))}
        </div>
    )
}