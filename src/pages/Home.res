let {string} = module(React)

open ReactBinding
let lazyMovieList = React.createElement(
  Lazy.lazy_(() =>
    Lazy.import_("../components/MovieList.js")->Js.Promise.then_(
      comp => Js.Promise.resolve({"default": comp["make"]}),
      _,
    )
  ),
  (),
)

let lazyMovie = React.createElement(
  Lazy.lazy_(() =>
    Lazy.import_("../components/detail_movie/Movie.js")->Js.Promise.then_(
      comp => Js.Promise.resolve({"default": comp["make"]}),
      _,
    )
  ),
  (),
)

let lazyPerson = React.createElement(
  Lazy.lazy_(() =>
    Lazy.import_("../components/Person.js")->Js.Promise.then_(
      comp => Js.Promise.resolve({"default": comp["make"]}),
      _,
    )
  ),
  (),
)

module NavLink = {
  @react.component
  let make = (~title: string) => {
    let onClick = e => {
      ReactEvent.Mouse.preventDefault(e)
      RescriptReactRouter.push("/")
    }
    <button
      type_="button"
      className="flex gap-1 justify-center p-1 group rounded ring-0 outline-none hover:bg-300"
      onClick>
      <Heroicons.Solid.HomeIcon className="w-5 h-6 fill-klor-900" />
      <span className="hidden sm:block text-900"> {title->React.string} </span>
    </button>
  }
}

@react.component
let make = () => {
  let url = RescriptReactRouter.useUrl()
  let component = switch url.path {
  | list{}
  | list{"genre"}
  | list{"search"} =>
    <SuspensionLoader> lazyMovieList </SuspensionLoader>
  | list{"movie"} => <SuspensionLoader> lazyMovie </SuspensionLoader>
  | list{"person"} => <SuspensionLoader> lazyPerson </SuspensionLoader>
  | _ => <div> {"Todo: To create a proper component to display message"->string} </div>
  }

  <div className="flex flex-col w-full h-full">
    <div className="h-auto flex flex-col z-50 relative">
      <div
        id="navbar"
        className="flex items-center w-full bg-white sticky top-0 z-50 h-14 flex-shrink-0">
        <div className="pl-1 mr-auto">
          <NavLink title={"Home"} />
        </div>
        <div
          id="search-colorswatch-container"
          className="flex flex-1 pl-4 items-center justify-between sm:justify-end gap-2">
          <SearchBox />
          <div
            id="colorswatch-container"
            className="pr-2 place-items-start flex items-center gap-2 z-[50]">
            <ThemeMenu />
            <GithubButton />
          </div>
        </div>
      </div>
      <div className="z-30 bg-white">
        <MoviesProvider>
          <YoutubePlayerProvider> {component} </YoutubePlayerProvider>
        </MoviesProvider>
      </div>
      <footer className="h-8" />
    </div>
  </div>
}
