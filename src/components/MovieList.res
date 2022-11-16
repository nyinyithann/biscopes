let {string, array} = module(React)

module Poster = {
  @react.component
  let make = (~movie: MovieModel.movie) => {
    let isMobile = MediaQuery.useMediaQuery("(max-width: 600px)")
    let (_, setQueryParam) = UrlQueryParam.useQueryParams()

    let imgLink = switch movie.poster_path {
    | Some(p) => Links.getPosterImage_W370_H556_bestv2Link(p)
    | None => ""
    }

    let id = Js.Int.toString(movie.id)

    let onClick = e => {
      open ReactEvent.Mouse
      preventDefault(e)
      switch movie.media_type {
      | Some(mt) => setQueryParam(UrlQueryParam.Movie({id, media_type: mt}))
      | _ => setQueryParam(UrlQueryParam.Movie({id, media_type: "movie"}))
      }
    }

    <div
      className="cursor-pointer transform duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01] hover:rounded group"
      role="button"
      onClick>
      <LazyImageLite
        alt="poster image"
        placeholderPath={Links.placeholderImage}
        src={imgLink}
        className="w-[16rem] h-full border-[2px] border-slate-200 rounded-md group-hover:border-0 group-hover rounded-b-none"
        lazyHeight={isMobile ? 286. : 366.}
        lazyOffset={50.}
      />
      <p
        className="text-base break-words transform duration-300 pt-[0.3rem] flex text-left text-900 truncate overflow-hidden p-1">
        {Util.getOrEmptyString(movie.title)->string}
      </p>
      <div className="pb-2">
        <Rating ratingValue={movie.vote_average} />
      </div>
      {switch movie.release_date {
      | Some(rd) =>
        let releaseYear = Js.String2.substring(rd, ~from=0, ~to_=4)

        if Js.String2.length(releaseYear) == 4 {
          <div
            className="absolute top-[2%] right-[3%] text-[0.8rem] bg-700/60 text-slate-50 px-[12px] py-[1px] rounded-sm">
            {releaseYear->React.string}
          </div>
        } else {
          React.null
        }

      | None => React.null
      }}
    </div>
  }
}

@react.component
let make = () => {
  let (queryParam, setQueryParam) = UrlQueryParam.useQueryParams()

  let {movies, loading, error, loadMovies, clearError} = MoviesProvider.useMoviesContext()
  let movieList = Js.Option.getWithDefault([], movies.results)
  let currentPage = Js.Option.getWithDefault(0, movies.page)
  let totalPages = Js.Option.getWithDefault(0, movies.total_pages)

  let viewingTitleRef = React.useRef("")
  let isGenreRef = ref(false)

  React.useMemo1(() => {
    switch queryParam {
    | Category({display}) => {
        if Js.String2.toLowerCase(display) == "upcoming" {
          let msg = switch movies.dates {
          | Some(ds) =>
            switch (ds.maximum, ds.minimum) {
            | (Some(mx), Some(mi)) => `${display} (${mi} ~ ${mx})`
            | _ => display
            }
          | None => display
          }
          viewingTitleRef.current = msg
        } else {
          viewingTitleRef.current = display
        }
        DomBinding.setTitle(DomBinding.htmlDoc, display ++ " Movies")
        isGenreRef.contents = false
      }

    | Genre({display}) => {
        viewingTitleRef.current = display
        DomBinding.setTitle(DomBinding.htmlDoc, display ++ " Movies")
        isGenreRef.contents = true
      }

    | Search({query}) => {
        viewingTitleRef.current = `Search: '${query}'`
        DomBinding.setTitle(DomBinding.htmlDoc, viewingTitleRef.current)
        isGenreRef.contents = false
      }

    | _ => isGenreRef.contents = false
    }
  }, [movies])

  React.useEffect0(() => {
    let controller = Fetch.AbortController.make()
    switch queryParam {
    | Category({name, display, page}) =>
      loadMovies(
        ~apiParams=Category({name, display, page}),
        ~signal=Fetch.AbortController.signal(controller),
      )
    | Genre({id, name, display, page, sort_by}) =>
      loadMovies(
        ~apiParams=Genre({id, name, display, page, sort_by}),
        ~signal=Fetch.AbortController.signal(controller),
      )
    | Search({query, page}) =>
      loadMovies(~apiParams=Search({query, page}), ~signal=Fetch.AbortController.signal(controller))
    | _ => ()
    }

    Some(() => Fetch.AbortController.abort(controller, "Cancel the request"))
  })

  let loadPage = n => {
    switch queryParam {
    | Category({name, display, page}) => setQueryParam(Category({name, display, page: page + n}))
    | Genre({id, name, display, page, sort_by}) =>
      setQueryParam(Genre({id, name, display, page: page + n, sort_by}))
    | Search({query, page}) => setQueryParam(Search({query, page: page + n}))
    | _ => ()
    }
  }

  let onClose = arg => {
    if arg {
      clearError()
    }
  }

  /* let handleClick = mediaType => { */
  /* switch mediaType { */
  /* | Some(mt) => setQueryParam(UrlQueryParam.Movie({id, media_type: mt})) */
  /* | _ => setQueryParam(UrlQueryParam.Movie({id, media_type: "movie"})) */
  /* } */
  /* } */
  /*  */
  /* let handleClick = React.useM((e) => { */
  /* open ReactEvent.Mouse */
  /* preventDefault(e) */
  /* }) */

  <div className="flex flex-col bg-white">
    <div
      className="flex items-center p-1 pl-4 sticky top-[3.4rem] z-50 shadlow-md flex-shrink-0 bg-white border-t-[2px] border-slate-200">
      <div>
        <GenreList />
      </div>
      <div className={`${isGenreRef.contents ? "flex" : "hidden"} justify-start ml-auto pr-4`}>
        <FilterBox />
      </div>
    </div>
    <div className="flex flex-col items-center justify-center bg-white p-2">
      <ul
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-y-4 gap-2 justify-center items-center w-full relative">
        {movieList
        ->Belt.Array.map(m =>
          <li key={m.id->Util.itos ++ Js.Int.toString(currentPage)}>
            <Poster movie={m} />
          </li>
        )
        ->array}
      </ul>
    </div>
    <div className="flex gap-2 px-4 pt-[2rem]">
      {currentPage > 1
        ? <button
            type_="button"
            className="flex gap-2 px-4 py-2 border-[1px] border-300 bg-300 text-900 rounded hover:bg-400 hover:text-50 group"
            onClick={_ => loadPage(-1)}>
            <Heroicons.Solid.ArrowLeftIcon
              className="h-6 w-6 fill-klor-900 group-hover:fill-klor-50"
            />
            <span> {`Page ${Js.Int.toString(currentPage - 1)} `->string} </span>
          </button>
        : React.null}
      {currentPage < totalPages
        ? <button
            type_="button"
            className="flex gap-2 px-4 py-2 border-[1px] border-300 bg-300 text-900 rounded hover:bg-400 hover:text-50 group ml-auto"
            onClick={_ => loadPage(1)}>
            <span> {`Page ${Js.Int.toString(currentPage + 1)} `->string} </span>
            <Heroicons.Solid.ArrowRightIcon
              className="h-6 w-6 fill-klor-900 group-hover:fill-klor-50"
            />
          </button>
        : React.null}
    </div>
    <ErrorDialog isOpen={Js.String2.length(error) > 0} errorMessage={error} onClose />
    {loading ? <LoadingDialog isOpen={loading} onClose /> : React.null}
  </div>
}
