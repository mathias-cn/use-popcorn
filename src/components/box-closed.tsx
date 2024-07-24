interface BoxClosedProps {
  type: string
  openHandler: (b: boolean) => void
  query?: string
  watchedData?: {
      length: number
      avgImdbRating: number
      avgUserRating: number
      avgRuntime: number
  }
}

export function BoxClosed({ type, openHandler, query, watchedData }: BoxClosedProps) {
  if(type === "movie") return (
    <div className="relative bg-gray-700 rounded-lg w-full divide-y-[1px] divide-gray-600 overflow-y-auto sm:w-[calc(50%-6px)] sm:h-[96px]">
      <button onClick={() => openHandler(true)} className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full top-4 right-4 text-md font-bold">
        <span>➕</span>
      </button>
      <div className="p-4 space-y-3 bg-gray-600 rounded-lg">
        <h3 className="font-semibold text-xl">SEARCH THE MOVIE YOU WANT</h3>
            {!query ? (
              <p>Type something in the search bar</p>
            ) : (
              <p>Search: {query}</p>
            )}
      </div>
    </div>
  )

  return (
      <div className="relative bg-gray-700 rounded-lg w-full divide-y-[1px] divide-gray-600 overflow-y-auto sm:w-[calc(50%-6px)] sm:h-[96px]">
          <button onClick={() => openHandler(true)} className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full top-4 right-4 text-md font-bold">
            <span>➕</span>
          </button>
          <div className="p-4 space-y-3 bg-gray-600 rounded-lg">
            <h2 className="font-semibold text-xl">MOVIES YOU WATCHED</h2>
            {watchedData && watchedData.length > 0 ? (
              <div className="flex justify-between items-center">
                <p>🎞️{watchedData.length} movies</p>
                <p>⭐{watchedData.avgImdbRating}</p>
                <p>🌟{watchedData.avgUserRating}</p>
                <p>⏰{watchedData.avgRuntime} min</p>
              </div>
            ) : (
              <p>You haven't watched any movies</p>
            )}
          </div>
      </div>
  )
}