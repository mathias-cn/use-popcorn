interface NavBarProps {
    moviesLength: number
    query: string
    setQuery: (e: string) => void
}

export function NavBar({ moviesLength, query, setQuery }: NavBarProps) {
    return (
        <nav className="bg-violet-700 flex items-center justify-center rounded-lg p-3">
            <div className="flex flex-wrap items-center justify-between gap-3 w-full max-w-screen-xl sm:flex-nowrap sm:flex-row">
                <h1 className="text-2xl font-bold order-0">🍿usePopcorn</h1>
                <input className="w-full order-3 rounded-lg px-3 py-2 bg-violet-500 placeholder-slate-300 sm:order-[0] max-w-[640px] sm:max-w-[260px] md:max-w-[350px] lg:max-w-[460px]" type="text" placeholder="Search movies..." value={query} onChange={(e) => setQuery(e.target.value)}  />
                <p className="self-end order-2 sm:self-center">
                    {moviesLength > 0 ? (
                        <>Found <span className="font-bold"> {moviesLength}</span> results</>
                    ) : (
                        <>Search something</>
                    )}
                </p>
            </div>
        </nav>
    )
}