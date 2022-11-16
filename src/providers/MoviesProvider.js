// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as Links from "../shared/Links.js";
import * as React from "react";
import * as MovieAPI from "../http/MovieAPI.js";
import * as Js_option from "rescript/lib/es6/js_option.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as MovieModel from "../models/MovieModel.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as DetailMovieModel from "../models/DetailMovieModel.js";

var emptyMovieList_page = 0;

var emptyMovieList_results = [];

var emptyMovieList_total_pages = 0;

var emptyMovieList_total_results = 0;

var emptyMovieList = {
  page: emptyMovieList_page,
  results: emptyMovieList_results,
  total_pages: emptyMovieList_total_pages,
  total_results: emptyMovieList_total_results
};

var emptyDetailMovie = {};

var initialState_apiParams = {
  TAG: /* Category */0,
  _0: {
    name: "popular",
    display: "Popular",
    page: 1
  }
};

var initialState = {
  apiParams: initialState_apiParams,
  movies: emptyMovieList,
  detail_movie: emptyDetailMovie,
  recommendedMovies: emptyMovieList,
  loading: false,
  error: ""
};

function initialContextValue_loadMovies(param, param$1) {
  
}

function initialContextValue_loadDetailMovie(param, param$1) {
  
}

function initialContextValue_loadRecommendedMovies(param, param$1, param$2) {
  
}

var initialContextValue_apiParams = {
  TAG: /* Category */0,
  _0: {
    name: "popular",
    display: "Popular",
    page: 1
  }
};

function initialContextValue_clearError(param) {
  
}

function initialContextValue_clearAll(param) {
  
}

var initialContextValue = {
  movies: emptyMovieList,
  detail_movie: emptyDetailMovie,
  recommendedMovies: emptyMovieList,
  loading: false,
  error: "",
  loadMovies: initialContextValue_loadMovies,
  loadDetailMovie: initialContextValue_loadDetailMovie,
  loadRecommendedMovies: initialContextValue_loadRecommendedMovies,
  apiParams: initialContextValue_apiParams,
  clearError: initialContextValue_clearError,
  clearAll: initialContextValue_clearAll
};

var context = React.createContext(initialContextValue);

var provider = context.Provider;

function MoviesProvider$MoviesContext$Provider(Props) {
  var value = Props.value;
  var children = Props.children;
  return React.createElement(provider, {
              value: value,
              children: children
            });
}

var Provider = {
  provider: provider,
  make: MoviesProvider$MoviesContext$Provider
};

var MoviesContext = {
  initialContextValue: initialContextValue,
  context: context,
  Provider: Provider
};

function reducer(state, action) {
  if (typeof action === "number") {
    if (action === /* ClearError */0) {
      return {
              apiParams: state.apiParams,
              movies: state.movies,
              detail_movie: state.detail_movie,
              recommendedMovies: state.recommendedMovies,
              loading: false,
              error: ""
            };
    } else {
      return {
              apiParams: state.apiParams,
              movies: emptyMovieList,
              detail_movie: emptyDetailMovie,
              recommendedMovies: emptyMovieList,
              loading: false,
              error: ""
            };
    }
  }
  switch (action.TAG | 0) {
    case /* Loading */0 :
        return {
                apiParams: action._0,
                movies: state.movies,
                detail_movie: state.detail_movie,
                recommendedMovies: state.recommendedMovies,
                loading: true,
                error: ""
              };
    case /* Error */1 :
        return {
                apiParams: state.apiParams,
                movies: state.movies,
                detail_movie: state.detail_movie,
                recommendedMovies: state.recommendedMovies,
                loading: false,
                error: action._0
              };
    case /* SuccessMovies */2 :
        var movies = action._1;
        return {
                apiParams: action._0,
                movies: {
                  dates: movies.dates,
                  page: movies.page,
                  results: Belt_Array.concat(Js_option.getWithDefault([], state.movies.results), Js_option.getWithDefault([], movies.results)),
                  total_pages: movies.total_pages,
                  total_results: movies.total_results
                },
                detail_movie: emptyDetailMovie,
                recommendedMovies: emptyMovieList,
                loading: false,
                error: ""
              };
    case /* SuccessDetailMovie */3 :
        return {
                apiParams: action._0,
                movies: emptyMovieList,
                detail_movie: action._1,
                recommendedMovies: action._2,
                loading: false,
                error: ""
              };
    case /* SuccessRecommendedMovies */4 :
        var recommendedMovies = action._0;
        return {
                apiParams: {
                  TAG: /* Void */5,
                  _0: "recommendedMovies"
                },
                movies: emptyMovieList,
                detail_movie: state.detail_movie,
                recommendedMovies: {
                  page: recommendedMovies.page,
                  results: Belt_Array.concat(Js_option.getWithDefault([], state.recommendedMovies.results), Belt_Array.sliceToEnd(Js_option.getWithDefault([], recommendedMovies.results), 1)),
                  total_pages: recommendedMovies.total_pages,
                  total_results: recommendedMovies.total_results
                },
                loading: false,
                error: ""
              };
    
  }
}

function getApiPath(apiParams) {
  switch (apiParams.TAG | 0) {
    case /* Category */0 :
        var match = apiParams._0;
        return "" + Links.apiBaseUrl + "/" + Links.apiVersion + "/movie/" + match.name + "?language=en-US&page=" + match.page.toString() + "";
    case /* Genre */1 :
        var match$1 = apiParams._0;
        return "" + Links.apiBaseUrl + "/" + Links.apiVersion + "/discover/movie?with_genres=" + String(match$1.id) + "&page=" + match$1.page.toString() + "&sort_by=" + match$1.sort_by + "";
    case /* Search */2 :
        var match$2 = apiParams._0;
        return "" + Links.apiBaseUrl + "/" + Links.apiVersion + "/search/multi?query=" + match$2.query + "&page=" + match$2.page.toString() + "";
    case /* Movie */3 :
        var match$3 = apiParams._0;
        return "" + Links.apiBaseUrl + "/" + Links.apiVersion + "/" + match$3.media_type + "/" + match$3.id + "?language=en-US&append_to_response=videos,credits,images,external_ids,release_dates&include_image_language=en";
    case /* Person */4 :
    case /* Void */5 :
        return "";
    
  }
}

function loadMovieInternal(dispatch, apiParams, signal) {
  var apiPath = getApiPath(apiParams);
  var callback = function (result) {
    if (result.TAG === /* Ok */0) {
      var ml = MovieModel.MovieListDecoder.decode(result._0);
      if (ml.TAG === /* Ok */0) {
        return Curry._1(dispatch, {
                    TAG: /* SuccessMovies */2,
                    _0: apiParams,
                    _1: ml._0
                  });
      } else {
        return Curry._1(dispatch, {
                    TAG: /* Error */1,
                    _0: ml._0
                  });
      }
    }
    var e = MovieModel.MovieErrorDecoder.decode(result._0);
    if (e.TAG !== /* Ok */0) {
      return Curry._1(dispatch, {
                  TAG: /* Error */1,
                  _0: "Unexpected error occured while reteriving movie data."
                });
    }
    var errors = Belt_Array.reduce(Js_option.getWithDefault([], e._0.errors), ". ", (function (a, b) {
            return b + a;
          }));
    Curry._1(dispatch, {
          TAG: /* Error */1,
          _0: errors
        });
  };
  Curry._1(dispatch, {
        TAG: /* Loading */0,
        _0: apiParams
      });
  MovieAPI.getMovies(apiPath, callback, Caml_option.some(signal), undefined);
}

function loadDetailMovieInternal(dispatch, apiParams, signal) {
  var apiPath = getApiPath(apiParams);
  var movieId;
  movieId = apiParams.TAG === /* Movie */3 ? apiParams._0.id : "";
  var rmPath = "" + Links.apiBaseUrl + "/" + Links.apiVersion + "/movie/" + movieId + "/recommendations?api_key=" + process.env.NEXT_PUBLIC_TMDB_API_KEY + "&page=1";
  var callback = function (r1, r2) {
    if (r1.TAG !== /* Ok */0) {
      return Curry._1(dispatch, {
                  TAG: /* Error */1,
                  _0: "Error occured while reteriving movie detail."
                });
    }
    if (r2.TAG !== /* Ok */0) {
      return Curry._1(dispatch, {
                  TAG: /* Error */1,
                  _0: "Error occured while reteriving movie detail."
                });
    }
    var detailMovie = DetailMovieModel.Decoder.decode(r1._0);
    var recommendedMovies = MovieModel.MovieListDecoder.decode(r2._0);
    if (detailMovie.TAG === /* Ok */0) {
      var dm = detailMovie._0;
      if (recommendedMovies.TAG === /* Ok */0) {
        return Curry._1(dispatch, {
                    TAG: /* SuccessDetailMovie */3,
                    _0: apiParams,
                    _1: dm,
                    _2: recommendedMovies._0
                  });
      }
      Curry._1(dispatch, {
            TAG: /* SuccessDetailMovie */3,
            _0: apiParams,
            _1: dm,
            _2: emptyMovieList
          });
      return Curry._1(dispatch, {
                  TAG: /* Error */1,
                  _0: recommendedMovies._0
                });
    }
    var err = detailMovie._0;
    if (recommendedMovies.TAG !== /* Ok */0) {
      return Curry._1(dispatch, {
                  TAG: /* Error */1,
                  _0: err + recommendedMovies._0
                });
    }
    Curry._1(dispatch, {
          TAG: /* SuccessDetailMovie */3,
          _0: apiParams,
          _1: emptyDetailMovie,
          _2: recommendedMovies._0
        });
    Curry._1(dispatch, {
          TAG: /* Error */1,
          _0: err
        });
  };
  Curry._1(dispatch, {
        TAG: /* Loading */0,
        _0: apiParams
      });
  MovieAPI.getMultipleDataset2([
        apiPath,
        rmPath
      ], callback, Caml_option.some(signal), undefined);
}

function loadRecommendedMoviesInternal(dispatch, movieId, page, signal) {
  var apiPath = "" + Links.apiBaseUrl + "/" + Links.apiVersion + "/movie/" + movieId.toString() + "/recommendations?api_key=" + process.env.NEXT_PUBLIC_TMDB_API_KEY + "&page=" + page.toString() + "";
  var callback = function (result) {
    if (result.TAG === /* Ok */0) {
      var ml = MovieModel.MovieListDecoder.decode(result._0);
      if (ml.TAG === /* Ok */0) {
        return Curry._1(dispatch, {
                    TAG: /* SuccessRecommendedMovies */4,
                    _0: ml._0
                  });
      } else {
        return Curry._1(dispatch, {
                    TAG: /* Error */1,
                    _0: ml._0
                  });
      }
    }
    var e = MovieModel.MovieErrorDecoder.decode(result._0);
    if (e.TAG !== /* Ok */0) {
      return Curry._1(dispatch, {
                  TAG: /* Error */1,
                  _0: "Unexpected error occured while reteriving recommended movie data."
                });
    }
    var errors = Belt_Array.reduce(Js_option.getWithDefault([], e._0.errors), ". ", (function (a, b) {
            return b + a;
          }));
    Curry._1(dispatch, {
          TAG: /* Error */1,
          _0: errors
        });
  };
  MovieAPI.getMovies(apiPath, callback, Caml_option.some(signal), undefined);
}

function MoviesProvider(Props) {
  var children = Props.children;
  var match = React.useReducer(reducer, initialState);
  var dispatch = match[1];
  var state = match[0];
  var loadMovies = React.useMemo((function () {
          return function (param, param$1) {
            return loadMovieInternal(dispatch, param, param$1);
          };
        }), [dispatch]);
  var loadDetailMovie = React.useMemo((function () {
          return function (param, param$1) {
            return loadDetailMovieInternal(dispatch, param, param$1);
          };
        }), [dispatch]);
  var loadRecommendedMovies = React.useMemo((function () {
          return function (param, param$1, param$2) {
            return loadRecommendedMoviesInternal(dispatch, param, param$1, param$2);
          };
        }), [dispatch]);
  var value_movies = state.movies;
  var value_detail_movie = state.detail_movie;
  var value_recommendedMovies = state.recommendedMovies;
  var value_loading = state.loading;
  var value_error = state.error;
  var value_apiParams = state.apiParams;
  var value_clearError = function (param) {
    Curry._1(dispatch, /* ClearError */0);
  };
  var value_clearAll = function (param) {
    Curry._1(dispatch, /* ClearAll */1);
  };
  var value = {
    movies: value_movies,
    detail_movie: value_detail_movie,
    recommendedMovies: value_recommendedMovies,
    loading: value_loading,
    error: value_error,
    loadMovies: loadMovies,
    loadDetailMovie: loadDetailMovie,
    loadRecommendedMovies: loadRecommendedMovies,
    apiParams: value_apiParams,
    clearError: value_clearError,
    clearAll: value_clearAll
  };
  return React.createElement(MoviesProvider$MoviesContext$Provider, {
              value: value,
              children: children
            });
}

function useMoviesContext(param) {
  return React.useContext(context);
}

var make = MoviesProvider;

export {
  emptyMovieList ,
  emptyDetailMovie ,
  initialState ,
  MoviesContext ,
  reducer ,
  getApiPath ,
  loadMovieInternal ,
  loadDetailMovieInternal ,
  loadRecommendedMoviesInternal ,
  make ,
  useMoviesContext ,
}
/* context Not a pure module */
