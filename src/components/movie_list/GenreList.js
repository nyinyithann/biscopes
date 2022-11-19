// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Js_dict from "rescript/lib/es6/js_dict.js";
import * as MovieAPI from "../../http/MovieAPI.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Caml_array from "rescript/lib/es6/caml_array.js";
import * as GenreModel from "../../models/GenreModel.js";
import * as MovieModel from "../../models/MovieModel.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as UrlQueryParam from "../../routes/UrlQueryParam.js";
import * as React$1 from "@headlessui/react";
import * as Solid from "@heroicons/react/solid";
import * as Outline from "@heroicons/react/outline";

function string(prim) {
  return prim;
}

function array(prim) {
  return prim;
}

var cache = {
  contents: {}
};

var staticItemLookup = [
  {
    id: -1,
    displayName: "Popular",
    icon: React.createElement(Solid.HeartIcon, {
          className: "w-3 h-3"
        })
  },
  {
    id: -2,
    displayName: "Top Rated",
    icon: React.createElement(Solid.TrendingUpIcon, {
          className: "w-3 h-3"
        })
  },
  {
    id: -3,
    displayName: "Upcoming",
    icon: React.createElement(Solid.TruckIcon, {
          className: "w-3 h-3"
        })
  }
];

var staticItems = [
  {
    id: -1,
    name: "popular"
  },
  {
    id: -2,
    name: "top_rated"
  },
  {
    id: -3,
    name: "upcoming"
  }
];

function getDisplayName(genre) {
  if (genre.id > 0) {
    return genre.name;
  }
  var g = Belt_Array.getBy(staticItemLookup, (function (x) {
          return x.id === genre.id;
        }));
  if (g !== undefined) {
    return Caml_option.valFromOption(g).displayName;
  } else {
    return "";
  }
}

function getIcon(genre) {
  var filmIcon = React.createElement(Solid.FilmIcon, {
        className: "w-3 h-3"
      });
  if (genre.id > 0) {
    return filmIcon;
  }
  var g = Belt_Array.getBy(staticItemLookup, (function (x) {
          return x.id === genre.id;
        }));
  if (g !== undefined) {
    return Caml_option.valFromOption(g).icon;
  } else {
    return filmIcon;
  }
}

function GenreList$GenreLink(Props) {
  var genre = Props.genre;
  var active = Props.active;
  var selected = Props.selected;
  var onClick = Props.onClick;
  var handleClick = function (e) {
    e.preventDefault();
    Curry._1(onClick, genre);
  };
  var name = getDisplayName(genre);
  var icon = getIcon(genre);
  return React.createElement("button", {
              className: "flex items-center gap-4 w-full hover:bg-300",
              type: "button",
              onClick: handleClick
            }, React.createElement("div", {
                  className: "" + (
                    active || selected ? "bg-300" : ""
                  ) + " flex items-center w-full px-2 gap-6 p-[1px]"
                }, icon, name, selected ? React.createElement(Solid.CheckIcon, {
                        className: "h-6 w-6 fill-klor-500 ml-auto"
                      }) : React.createElement("span", {
                        className: "block h-6 w-6"
                      })));
}

var GenreLink = {
  make: GenreList$GenreLink
};

var selectedRef = {
  contents: Caml_array.get(staticItems, 0)
};

function GenreList(Props) {
  var match = React.useState(function () {
        return /* Loading */0;
      });
  var setState = match[1];
  var state = match[0];
  var match$1 = UrlQueryParam.useQueryParams(undefined);
  var setQueryParam = match$1[1];
  var queryParam = match$1[0];
  var isInSearchMode;
  isInSearchMode = queryParam.TAG === /* Search */2 ? true : false;
  React.useMemo((function () {
          switch (queryParam.TAG | 0) {
            case /* Category */0 :
                var name = queryParam._0.name;
                if (typeof state === "number") {
                  return ;
                }
                if (state.TAG === /* Error */0) {
                  return ;
                }
                var s = Belt_Array.getBy(state._0, (function (g) {
                        return g.name === name;
                      }));
                if (s !== undefined) {
                  selectedRef.contents = s;
                  return ;
                } else {
                  return ;
                }
            case /* Genre */1 :
                var id = queryParam._0.id;
                if (typeof state === "number") {
                  return ;
                }
                if (state.TAG === /* Error */0) {
                  return ;
                }
                var s$1 = Belt_Array.getBy(state._0, (function (g) {
                        return g.id === id;
                      }));
                if (s$1 !== undefined) {
                  selectedRef.contents = s$1;
                  return ;
                } else {
                  return ;
                }
            default:
              return ;
          }
        }), [queryParam]);
  React.useEffect((function () {
          var callback = function (result) {
            if (result.TAG === /* Ok */0) {
              var genreList = GenreModel.GenreDecoder.decode(result._0);
              if (genreList.TAG === /* Ok */0) {
                var genres = Belt_Array.concat(staticItems, genreList._0.genres);
                cache.contents["genres"] = genres;
                return Curry._1(setState, (function (param) {
                              return {
                                      TAG: /* Success */1,
                                      _0: genres
                                    };
                            }));
              }
              var msg = genreList._0;
              return Curry._1(setState, (function (param) {
                            return {
                                    TAG: /* Error */0,
                                    _0: msg
                                  };
                          }));
            }
            var e = GenreModel.GenreErrorDecoder.decode(result._0);
            if (e.TAG !== /* Ok */0) {
              return Curry._1(setState, (function (param) {
                            return {
                                    TAG: /* Error */0,
                                    _0: "Unexpected error occured while reteriving genre data."
                                  };
                          }));
            }
            var e$1 = e._0;
            Curry._1(setState, (function (param) {
                    return {
                            TAG: /* Error */0,
                            _0: e$1.status_message
                          };
                  }));
          };
          var controller = new AbortController();
          var genres = Js_dict.get(cache.contents, "genres");
          if (genres !== undefined) {
            Curry._1(setState, (function (param) {
                    return {
                            TAG: /* Success */1,
                            _0: genres
                          };
                  }));
          } else {
            MovieAPI.getGenres(callback, Caml_option.some(controller.signal), undefined);
          }
          return (function (param) {
                    controller.abort("Cancel the request");
                  });
        }), []);
  var onClick = React.useCallback((function (genre) {
          if (genre.id < 0) {
            Curry._1(setQueryParam, {
                  TAG: /* Category */0,
                  _0: {
                    name: genre.name,
                    display: getDisplayName(genre),
                    page: 1
                  }
                });
          }
          if (genre.id <= 0) {
            return ;
          }
          var sort_by;
          sort_by = queryParam.TAG === /* Genre */1 ? queryParam._0.sort_by : MovieModel.popularity.id;
          Curry._1(setQueryParam, {
                TAG: /* Genre */1,
                _0: {
                  id: genre.id,
                  name: genre.name,
                  display: genre.name,
                  page: 1,
                  sort_by: sort_by
                }
              });
        }), []);
  var tmp;
  if (typeof state === "number") {
    tmp = React.createElement("p", {
          className: "w-full text-left"
        }, "...");
  } else if (state.TAG === /* Error */0) {
    tmp = React.createElement("div", {
          className: "flex flex-wrap w-full h-auto"
        }, state._0);
  } else {
    var tmp$1;
    tmp$1 = queryParam.TAG === /* Search */2 ? React.createElement("div", {
            className: "flex w-full items-center gap-6"
          }, React.createElement("div", {
                className: "flex gap-4 w-[10rem] items-center"
              }, React.createElement(Outline.SearchCircleIcon, {
                    className: "w-4 h-4"
                  }), React.createElement("span", undefined, "In search")), React.createElement("div", {
                className: "ml-auto"
              }, React.createElement(Solid.ChevronDownIcon, {
                    className: "w-4 h-4"
                  }))) : React.createElement(React.Fragment, undefined, React.createElement("div", {
                className: "flex w-full items-center gap-6"
              }, getIcon(selectedRef.contents), React.createElement("span", {
                    className: "block truncate"
                  }, getDisplayName(selectedRef.contents))), React.createElement("div", {
                className: "ml-auto"
              }, React.createElement(Solid.ChevronDownIcon, {
                    className: "w-4 h-4"
                  })));
    tmp = React.createElement(React$1.Listbox, {
          value: selectedRef.contents,
          children: React.createElement("div", {
                className: "w-full relative flex"
              }, React.createElement(React$1.Listbox.Button, {
                    className: "flex w-full h-full items-center justify-center cursor-pointer ring-0 outline-none",
                    children: tmp$1
                  }), React.createElement(React$1.Listbox.Options, {
                    className: "absolute top-[2rem] -left-2 w-[14rem] rounded bg-200 py-2 outline-none ring-0",
                    children: Belt_Array.map(state._0, (function (genre) {
                            return React.createElement(React$1.Listbox.Option, {
                                        value: genre,
                                        className: "flex w-full",
                                        children: (function (param) {
                                            return React.createElement(GenreList$GenreLink, {
                                                        genre: genre,
                                                        active: param.active && !isInSearchMode,
                                                        selected: param.selected && !isInSearchMode,
                                                        onClick: onClick
                                                      });
                                          }),
                                        key: String(genre.id)
                                      });
                          }))
                  }))
        });
  }
  return React.createElement("div", {
              className: "flex w-[10rem] items-center justify-center text-base text-700 py-1 px-2 outline-none ring-0 rounded-md hover:bg-300"
            }, tmp);
}

var make = GenreList;

export {
  string ,
  array ,
  cache ,
  staticItemLookup ,
  staticItems ,
  getDisplayName ,
  getIcon ,
  GenreLink ,
  selectedRef ,
  make ,
}
/* staticItemLookup Not a pure module */
