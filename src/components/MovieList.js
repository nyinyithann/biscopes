// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as Links from "../shared/Links.js";
import * as React from "react";
import * as Loading from "./Loading.js";
import * as Js_option from "rescript/lib/es6/js_option.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as UrlQueryParam from "../routes/UrlQueryParam.js";
import * as MoviesProvider from "../providers/MoviesProvider.js";

function string(prim) {
  return prim;
}

function array(prim) {
  return prim;
}

function MovieList$Poster(Props) {
  var title = Props.title;
  var poster_path = Props.poster_path;
  var imgLink = poster_path !== undefined ? Links.getPosterImageW342Link(poster_path) : "";
  return React.createElement("button", {
              className: "flex flex-col flex-shrink-0 gap-2 transition ease-linear w-[13rem] h-[22rem] items-center justify-start hover:border-[1px] hover:border-slate-200 transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:scale-105 group\n      hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-400 hover:rounded-md",
              type: "button",
              onClick: (function (param) {
                  console.log("Hello");
                })
            }, imgLink.length > 0 ? React.createElement("img", {
                    className: "w-[13rem] h-[18rem] flex-shrink-0 transform duration-300 group-hover:saturate-150",
                    alt: "A poster",
                    src: imgLink
                  }) : React.createElement("div", undefined, "placeholder here"), React.createElement("p", {
                  className: "break-words text-[0.9rem] transform duration-300 group-hover:scale-110 group-hover:p-2  group-hover:text-yellow-200\n"
                }, Js_option.getWithDefault("", title)));
}

var Poster = {
  make: MovieList$Poster
};

function MovieList(Props) {
  var match = UrlQueryParam.useQueryParams(undefined);
  var queryParam = match[0];
  var match$1 = MoviesProvider.useMoviesContext(undefined);
  var loadMovies = match$1.loadMovies;
  var movieList = Js_option.getWithDefault([], match$1.movies.results);
  React.useEffect((function () {
          switch (queryParam.TAG | 0) {
            case /* Category */0 :
                var match = queryParam._0;
                Curry._1(loadMovies, {
                      TAG: /* Category */0,
                      _0: {
                        name: match.name,
                        page: match.page
                      }
                    });
                break;
            case /* Genre */1 :
                var match$1 = queryParam._0;
                Curry._1(loadMovies, {
                      TAG: /* Genre */1,
                      _0: {
                        id: match$1.id,
                        name: match$1.name,
                        page: match$1.page,
                        sort_by: match$1.sort_by
                      }
                    });
                break;
            default:
              
          }
        }), []);
  if (match$1.error.length > 0) {
    return React.createElement("div", undefined, "Error");
  } else if (match$1.loading) {
    return React.createElement(Loading.make, {
                className: "w-[6rem] h-[3rem] stroke-[0.2rem] p-3 stroke-klor-200 text-green-500 fill-50 dark:fill-slate-600 dark:stroke-slate-400 dark:text-900 m-auto"
              });
  } else {
    return React.createElement("div", {
                className: "w-full h-full flex flex-1 flex-wrap p-1 gap-[3rem] justify-center items-center z-50 px-[2rem]",
                id: "movie-list-here"
              }, Belt_Array.map(movieList, (function (m) {
                      return React.createElement(MovieList$Poster, {
                                  title: m.title,
                                  poster_path: m.poster_path,
                                  key: m.id.toString()
                                });
                    })));
  }
}

var make = MovieList;

export {
  string ,
  array ,
  Poster ,
  make ,
}
/* react Not a pure module */
