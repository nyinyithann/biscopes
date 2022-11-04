// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as MovieAPI from "../http/MovieAPI.js";
import * as Js_option from "rescript/lib/es6/js_option.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as GenreModel from "../models/GenreModel.js";
import * as MoviesProvider from "../providers/MoviesProvider.js";

function __Home$MovieList(Props) {
  var match = React.useState(function () {
        return 1;
      });
  var setCount = match[1];
  var count = match[0];
  var match$1 = MoviesProvider.useMoviesContext(undefined);
  var loadMovies = match$1.loadMovies;
  var genreCallback = function (json) {
    var genreList = GenreModel.GenreDecoder.decode(json);
    if (genreList.TAG === /* Ok */0) {
      console.log(genreList._0.genres);
      return ;
    }
    console.log(genreList._0);
  };
  React.useEffect((function () {
          Curry._1(loadMovies, {
                TAG: /* Category */0,
                _0: {
                  name: "popular",
                  page: count
                }
              });
          MovieAPI.getGenres(genreCallback, undefined, undefined);
        }), [count]);
  return React.createElement("div", {
              className: "w-full flex flex-col items-start justify-start pt-20"
            }, React.createElement("button", {
                  className: "p-2 bg-300",
                  type: "button",
                  onClick: (function (e) {
                      e.preventDefault();
                      Curry._1(setCount, (function (prev) {
                              return prev + 1 | 0;
                            }));
                    })
                }, "More"), React.createElement(React.Fragment, undefined, Belt_Array.map(Js_option.getExn(match$1.movies.results), (function (m) {
                        return React.createElement("div", {
                                    key: String(m.id)
                                  }, Js_option.getExn(m.title));
                      }))));
}

var MovieList = {
  make: __Home$MovieList
};

function __Home(Props) {
  return React.createElement("div", {
              className: "flex flex-col items-center justify-center"
            }, React.createElement(MoviesProvider.make, {
                  children: React.createElement(__Home$MovieList, {})
                }));
}

var make = __Home;

export {
  MovieList ,
  make ,
}
/* react Not a pure module */
