let {string, array} = module(React)

type state =
  | Loading
  | Error(string)
  | Success(array<GenreModel.genre>)

let cache = ref(Js.Dict.empty())

let staticItemLookup = [
  {
    "id": -1,
    "displayName": "Popular",
    "icon": <Heroicons.Solid.HeartIcon className="w-3 h-3" />,
  },
  {
    "id": -2,
    "displayName": "Top Rated",
    "icon": <Heroicons.Solid.TrendingUpIcon className="w-3 h-3" />,
  },
  {
    "id": -3,
    "displayName": "Upcoming",
    "icon": <Heroicons.Solid.TruckIcon className="w-3 h-3" />,
  },
]

let staticItems = [
  {
    GenreModel.id: -1,
    name: "popular",
  },
  {
    GenreModel.id: -2,
    name: "top_rated",
  },
  {
    GenreModel.id: -3,
    name: "upcoming",
  },
]

let getDisplayName = (genre: GenreModel.genre) => {
  if genre.id > 0 {
    genre.name
  } else {
    switch staticItemLookup->Belt.Array.getBy(x => x["id"] == genre.id) {
    | Some(g) => g["displayName"]
    | None => ""
    }
  }
}

let getIcon = (genre: GenreModel.genre) => {
  let filmIcon = <Heroicons.Solid.FilmIcon className="w-3 h-3" />

  if genre.id > 0 {
    filmIcon
  } else {
    switch staticItemLookup->Belt.Array.getBy(x => x["id"] == genre.id) {
    | Some(g) => g["icon"]
    | None => filmIcon
    }
  }
}

module GenreLink = {
  @react.component
  let make = (~genre: GenreModel.genre, ~active: bool, ~selected: bool, ~onClick) => {
    let handleClick = e => {
      ReactEvent.Mouse.preventDefault(e)
      onClick(genre)
    }
    let name = getDisplayName(genre)
    let icon = getIcon(genre)
    <button type_="button" className="flex items-center gap-4 w-full" onClick={handleClick}>
      <div
        className={`${active || selected
            ? "bg-300"
            : ""} flex items-center w-full px-2 gap-4 p-[1px]`}>
        icon
        {name->React.string}
        {selected
          ? <Heroicons.Solid.CheckIcon className="h-6 w-6 fill-klor-500 ml-auto" />
          : <span className="block h-6 w-6" />}
      </div>
    </button>
  }
}

let selectedRef = ref(staticItems[0])

@react.component
let make = () => {
  open HeadlessUI
  let (state, setState) = React.useState(_ => Loading)
  let (queryParam, setQueryParam) = UrlQueryParam.useQueryParams()

  React.useMemo1(() => {
    switch queryParam {
    | Category({name}) =>
      switch state {
      | Success(genres) =>
        switch genres->Belt.Array.getBy(g => g.name == name) {
        | Some(s) => selectedRef.contents = s
        | _ => ()
        }
      | _ => ()
      }
    | Genre({id}) =>
      switch state {
      | Success(genres) =>
        switch genres->Belt.Array.getBy(g => g.id == id) {
        | Some(s) => selectedRef.contents = s
        | _ => ()
        }
      | _ => ()
      }
    | _ => ()
    }
  }, [queryParam])

  React.useEffect0(() => {
    let callback = result => {
      switch result {
      | Ok(json) =>
        switch GenreModel.GenreDecoder.decode(. ~json) {
        | Ok(genreList) =>
          let genres = Belt.Array.concat(staticItems, genreList.genres)
          Js.Dict.set(cache.contents, "genres", genres)
          setState(_ => Success(genres))
        | Error(msg) => setState(_ => Error(msg))
        }
      | Error(json) =>
        switch GenreModel.GenreErrorDecoder.decode(. ~json) {
        | Ok(e) => setState(_ => Error(e.status_message))

        | _ => setState(_ => Error("Unexpected error occured while reteriving genre data."))
        }
      }
    }

    let controller = Fetch.AbortController.make()
    switch Js.Dict.get(cache.contents, "genres") {
    | Some(genres) => setState(_ => Success(genres))
    | None =>
      MovieAPI.getGenres(~callback, ~signal=Fetch.AbortController.signal(controller), ())->ignore
    }

    Some(() => Fetch.AbortController.abort(controller, "Cancel the request"))
  })

  let onClick = React.useCallback0((genre: GenreModel.genre) => {
    if genre.id < 0 {
      setQueryParam(Category({name: genre.name, display: genre.name, page: 1}))
    }
    if genre.id > 0 {
      let sort_by = switch queryParam {
      | Genre({sort_by}) => sort_by
      | _ => MovieModel.popularity.id
      }
      setQueryParam(Genre({id: genre.id, name: genre.name, display: genre.name, page: 1, sort_by}))
    }
  })

  <div
    className="flex w-[10rem] items-center justify-center text-[0.9rem] text-700 py-1 px-2 outline-none ring-0 rounded-md hover:bg-300">
    {switch state {
    | Loading =>
      <Loading
        className="w-[4rem] h-[3rem] stroke-[0.2rem] p-3 stroke-klor-200 text-700 dark:fill-slate-600 dark:stroke-slate-400 dark:text-900 m-auto"
      />
    | Error(errorMessage) =>
      <div className="flex flex-wrap w-full h-auto">
        <ErrorDisplay errorMessage />
      </div>
    | Success(genres) =>
      <Listbox value={selectedRef.contents}>
        <div className="w-full relative flex">
          <Listbox.Button
            className="flex w-full h-full items-center justify-center cursor-pointer ring-0 outline-none">
            <div className="flex w-full items-center gap-4">
              {getIcon(selectedRef.contents)}
              <span className="block truncate">
                {getDisplayName(selectedRef.contents)->string}
              </span>
            </div>
            <div className="ml-auto">
              <Heroicons.Solid.ChevronDownIcon className="w-4 h-4" />
            </div>
          </Listbox.Button>
          <Listbox.Options
            className="absolute top-[2rem] -left-2 w-[12rem] rounded bg-200 py-2 outline-none ring-0">
            {genres
            ->Belt.Array.map(genre =>
              <Listbox.Option key={genre.id->string_of_int} value={genre} className="flex w-full">
                {({active, selected}) => {
                  <GenreLink genre onClick active selected />
                }}
              </Listbox.Option>
            )
            ->array}
          </Listbox.Options>
        </div>
      </Listbox>
    }}
  </div>
}
