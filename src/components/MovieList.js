// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Util from "../shared/Util.js";
import * as Curry from "rescript/lib/es6/curry.js";
import * as Links from "../shared/Links.js";
import * as React from "react";
import * as Rating from "./Rating.js";
import * as FilterBox from "./FilterBox.js";
import * as GenreList from "./GenreList.js";
import * as Js_option from "rescript/lib/es6/js_option.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as MediaQuery from "../hooks/MediaQuery.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as ErrorDialog from "./ErrorDialog.js";
import * as LazyImageLite from "./LazyImageLite.js";
import * as LoadingDialog from "./LoadingDialog.js";
import * as UrlQueryParam from "../routes/UrlQueryParam.js";
import * as MoviesProvider from "../providers/MoviesProvider.js";

function string(prim) {
  return prim;
}

function array(prim) {
  return prim;
}

function MovieList$Poster(Props) {
  var movie = Props.movie;
  var isMobile = MediaQuery.useMediaQuery("(max-width: 600px)");
  var match = UrlQueryParam.useQueryParams(undefined);
  var setQueryParam = match[1];
  var p = movie.poster_path;
  var imgLink = p !== undefined ? Links.getPosterImageW342Link(p) : "";
  var id = movie.id.toString();
  var onClick = function (e) {
    e.preventDefault();
    var mt = movie.media_type;
    if (mt !== undefined) {
      return Curry._1(setQueryParam, {
                  TAG: /* Movie */3,
                  _0: {
                    id: id,
                    media_type: mt
                  }
                });
    } else {
      return Curry._1(setQueryParam, {
                  TAG: /* Movie */3,
                  _0: {
                    id: id,
                    media_type: "movie"
                  }
                });
    }
  };
  var rd = movie.release_date;
  var tmp;
  if (rd !== undefined) {
    var releaseYear = rd.substring(0, 4);
    tmp = releaseYear.length === 4 ? React.createElement("div", {
            className: "absolute top-[2%] right-[3%] text-[0.8rem] bg-700/60 text-slate-50 px-[12px] py-[1px] rounded-sm"
          }, releaseYear) : null;
  } else {
    tmp = null;
  }
  return React.createElement("div", {
              className: "cursor-pointer transform duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01] hover:rounded group",
              role: "button",
              onClick: onClick
            }, React.createElement(LazyImageLite.make, {
                  className: "w-[16rem] h-full border-[2px] border-slate-200 rounded-md group-hover:border-0 group-hover rounded-b-none",
                  placeholderPath: Links.placeholderImage,
                  alt: "poster image",
                  src: imgLink,
                  lazyHeight: isMobile ? 286 : 366,
                  lazyOffset: 50
                }), React.createElement("p", {
                  className: "text-base break-words transform duration-300 pt-[0.3rem] flex text-left text-900 truncate overflow-hidden p-1"
                }, Util.getOrEmptyString(movie.title)), React.createElement("div", {
                  className: "pb-2"
                }, React.createElement(Rating.make, {
                      ratingValue: movie.vote_average
                    })), tmp);
}

var Poster = {
  make: MovieList$Poster
};

var isGenreRef = {
  contents: false
};

function MovieList(Props) {
  var match = UrlQueryParam.useQueryParams(undefined);
  var queryParam = match[0];
  var match$1 = MoviesProvider.useMoviesContext(undefined);
  var clearError = match$1.clearError;
  var loadMovies = match$1.loadMovies;
  var error = match$1.error;
  var loading = match$1.loading;
  var movies = match$1.movies;
  var movieList = Js_option.getWithDefault([], movies.results);
  var currentPage = Js_option.getWithDefault(0, movies.page);
  var totalPages = Js_option.getWithDefault(0, movies.total_pages);
  var viewingTitleRef = React.useRef("");
  React.useMemo((function () {
          switch (queryParam.TAG | 0) {
            case /* Category */0 :
                var display = queryParam._0.display;
                if (display.toLowerCase() === "upcoming") {
                  var ds = movies.dates;
                  var msg;
                  if (ds !== undefined) {
                    var match = ds.maximum;
                    var match$1 = ds.minimum;
                    msg = match !== undefined && match$1 !== undefined ? "" + display + " (" + match$1 + " ~ " + match + ")" : display;
                  } else {
                    msg = display;
                  }
                  viewingTitleRef.current = msg;
                } else {
                  viewingTitleRef.current = display;
                }
                window.document.title = display + " Movies";
                isGenreRef.contents = false;
                return ;
            case /* Genre */1 :
                var display$1 = queryParam._0.display;
                viewingTitleRef.current = display$1;
                window.document.title = display$1 + " Movies";
                isGenreRef.contents = true;
                return ;
            case /* Search */2 :
                viewingTitleRef.current = "Search: '" + queryParam._0.query + "'";
                window.document.title = viewingTitleRef.current;
                isGenreRef.contents = false;
                return ;
            default:
              isGenreRef.contents = false;
              return ;
          }
        }), [movies]);
  React.useEffect((function () {
          var controller = new AbortController();
          switch (queryParam.TAG | 0) {
            case /* Category */0 :
                var match = queryParam._0;
                Curry._2(loadMovies, {
                      TAG: /* Category */0,
                      _0: {
                        name: match.name,
                        display: match.display,
                        page: match.page
                      }
                    }, controller.signal);
                break;
            case /* Genre */1 :
                var match$1 = queryParam._0;
                Curry._2(loadMovies, {
                      TAG: /* Genre */1,
                      _0: {
                        id: match$1.id,
                        name: match$1.name,
                        display: match$1.display,
                        page: match$1.page,
                        sort_by: match$1.sort_by
                      }
                    }, controller.signal);
                break;
            case /* Search */2 :
                var match$2 = queryParam._0;
                Curry._2(loadMovies, {
                      TAG: /* Search */2,
                      _0: {
                        query: match$2.query,
                        page: match$2.page
                      }
                    }, controller.signal);
                break;
            default:
              
          }
          return (function (param) {
                    controller.abort("Cancel the request");
                  });
        }), []);
  var controller = new AbortController();
  var loadPage = function (page) {
    switch (queryParam.TAG | 0) {
      case /* Category */0 :
          var match = queryParam._0;
          return Curry._2(loadMovies, {
                      TAG: /* Category */0,
                      _0: {
                        name: match.name,
                        display: match.display,
                        page: page
                      }
                    }, controller.signal);
      case /* Genre */1 :
          var match$1 = queryParam._0;
          return Curry._2(loadMovies, {
                      TAG: /* Genre */1,
                      _0: {
                        id: match$1.id,
                        name: match$1.name,
                        display: match$1.display,
                        page: page,
                        sort_by: match$1.sort_by
                      }
                    }, controller.signal);
      case /* Search */2 :
          return Curry._2(loadMovies, {
                      TAG: /* Search */2,
                      _0: {
                        query: queryParam._0.query,
                        page: page
                      }
                    }, controller.signal);
      default:
        return ;
    }
  };
  var onClose = function (arg) {
    if (arg) {
      return Curry._1(clearError, undefined);
    }
    
  };
  var match$2 = React.useState(function () {
        return null;
      });
  var setLastPoster = match$2[1];
  var lastPoster = match$2[0];
  var match$3 = React.useState(function () {
        return 1;
      });
  var setPageToLoad = match$3[1];
  var pageToLoad = match$3[0];
  var setLastPosterRef = function (elem) {
    Curry._1(setLastPoster, (function (param) {
            return elem;
          }));
  };
  var observer = React.useRef(new IntersectionObserver((function (entries, param) {
              var entry = Belt_Array.get(entries, 0);
              if (entry !== undefined && Caml_option.valFromOption(entry).isIntersecting) {
                return Curry._1(setPageToLoad, (function (p) {
                              return p + 1 | 0;
                            }));
              }
              
            })));
  React.useEffect((function () {
          if (pageToLoad <= totalPages) {
            loadPage(pageToLoad);
          }
          
        }), [pageToLoad]);
  React.useEffect((function () {
          var currentObserver = observer.current;
          if (!(lastPoster == null)) {
            currentObserver.observe(lastPoster);
          }
          return (function (param) {
                    if (!(lastPoster == null)) {
                      currentObserver.unobserve(lastPoster);
                      return ;
                    }
                    
                  });
        }), [lastPoster]);
  return React.createElement("div", {
              className: "flex flex-col bg-white"
            }, React.createElement("div", {
                  className: "flex items-center p-1 pl-4 sticky top-[3.4rem] z-50 shadlow-md flex-shrink-0 bg-white border-t-[2px] border-slate-200"
                }, React.createElement("div", undefined, React.createElement(GenreList.make, {})), React.createElement("div", {
                      className: "" + (
                        isGenreRef.contents ? "flex" : "hidden"
                      ) + " justify-start ml-auto pr-4"
                    }, React.createElement(FilterBox.make, {}))), React.createElement("div", {
                  className: "flex flex-col items-center justify-center bg-white p-2"
                }, React.createElement("ul", {
                      className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-y-4 gap-2 justify-center items-center w-full relative"
                    }, Belt_Array.mapWithIndex(movieList, (function (i, m) {
                            if (i === (movieList.length - 1 | 0) && !loading && currentPage <= totalPages) {
                              return React.createElement("li", {
                                          key: Util.itos(m.id) + currentPage.toString(),
                                          ref: setLastPosterRef
                                        }, React.createElement(MovieList$Poster, {
                                              movie: m
                                            }));
                            } else {
                              return React.createElement("li", {
                                          key: Util.itos(m.id) + currentPage.toString()
                                        }, React.createElement(MovieList$Poster, {
                                              movie: m
                                            }));
                            }
                          })))), (currentPage - 1 | 0) === totalPages ? React.createElement("div", {
                    className: "flex items-center justify-center w-full bg-900 gap-2 p-2"
                  }, React.createElement("p", {
                        className: "text-slate-50"
                      }, "Amazing... you browsed all the movies!  😲")) : null, error.length > 0 ? React.createElement(ErrorDialog.make, {
                    isOpen: error.length > 0,
                    errorMessage: error,
                    onClose: onClose
                  }) : null, loading ? React.createElement(LoadingDialog.make, {
                    isOpen: loading,
                    onClose: onClose
                  }) : null);
}

var make = MovieList;

export {
  string ,
  array ,
  Poster ,
  isGenreRef ,
  make ,
}
/* react Not a pure module */
