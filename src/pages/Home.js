// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as SearchBox from "../components/SearchBox.js";
import * as ThemeMenu from "../components/ThemeMenu.js";
import * as Js_promise from "rescript/lib/es6/js_promise.js";
import * as GithubButton from "../components/GithubButton.js";
import * as MoviesProvider from "../providers/MoviesProvider.js";
import * as SuspensionLoader from "../components/SuspensionLoader.js";
import * as RescriptReactRouter from "@rescript/react/src/RescriptReactRouter.js";
import * as YoutubePlayerProvider from "../providers/YoutubePlayerProvider.js";
import * as Solid from "@heroicons/react/solid";

function string(prim) {
  return prim;
}

var lazyMovieList = React.createElement(React.lazy(function (param) {
          var __x = import("../components/MovieList.js");
          return Js_promise.then_((function (comp) {
                        return Promise.resolve({
                                    default: comp.make
                                  });
                      }), __x);
        }), undefined);

var lazyMovie = React.createElement(React.lazy(function (param) {
          var __x = import("../components/detail_movie/Movie.js");
          return Js_promise.then_((function (comp) {
                        return Promise.resolve({
                                    default: comp.make
                                  });
                      }), __x);
        }), undefined);

var lazyPerson = React.createElement(React.lazy(function (param) {
          var __x = import("../components/Person.js");
          return Js_promise.then_((function (comp) {
                        return Promise.resolve({
                                    default: comp.make
                                  });
                      }), __x);
        }), undefined);

function Home$NavLink(Props) {
  var title = Props.title;
  var onClick = function (e) {
    e.preventDefault();
    RescriptReactRouter.push("/");
  };
  return React.createElement("button", {
              className: "flex gap-1 justify-center p-1 group rounded ring-0 outline-none hover:bg-300",
              type: "button",
              onClick: onClick
            }, React.createElement(Solid.HomeIcon, {
                  className: "w-5 h-6 fill-klor-900"
                }), React.createElement("span", {
                  className: "hidden sm:block text-900"
                }, title));
}

var NavLink = {
  make: Home$NavLink
};

function Home(Props) {
  var url = RescriptReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  var component;
  var exit = 0;
  if (match) {
    var exit$1 = 0;
    switch (match.hd) {
      case "movie" :
          if (match.tl) {
            exit = 1;
          } else {
            component = React.createElement(SuspensionLoader.make, {
                  children: lazyMovie
                });
          }
          break;
      case "person" :
          if (match.tl) {
            exit = 1;
          } else {
            component = React.createElement(SuspensionLoader.make, {
                  children: lazyPerson
                });
          }
          break;
      case "genre" :
      case "search" :
          exit$1 = 2;
          break;
      default:
        exit = 1;
    }
    if (exit$1 === 2) {
      if (match.tl) {
        exit = 1;
      } else {
        component = React.createElement(SuspensionLoader.make, {
              children: lazyMovieList
            });
      }
    }
    
  } else {
    component = React.createElement(SuspensionLoader.make, {
          children: lazyMovieList
        });
  }
  if (exit === 1) {
    component = React.createElement("div", undefined, "Todo: To create a proper component to display message");
  }
  return React.createElement("div", {
              className: "flex flex-col w-full h-full"
            }, React.createElement("div", {
                  className: "h-auto flex flex-col z-50 relative"
                }, React.createElement("div", {
                      className: "flex items-center w-full bg-white sticky top-0 z-50 h-14 flex-shrink-0",
                      id: "navbar"
                    }, React.createElement("div", {
                          className: "pl-1 mr-auto"
                        }, React.createElement(Home$NavLink, {
                              title: "Home"
                            })), React.createElement("div", {
                          className: "flex flex-1 pl-4 items-center justify-between sm:justify-end gap-2",
                          id: "search-colorswatch-container"
                        }, React.createElement(SearchBox.make, {}), React.createElement("div", {
                              className: "pr-2 place-items-start flex items-center gap-2 z-[50]",
                              id: "colorswatch-container"
                            }, React.createElement(ThemeMenu.make, {}), React.createElement(GithubButton.make, {})))), React.createElement("div", {
                      className: "z-30 bg-white"
                    }, React.createElement(MoviesProvider.make, {
                          children: React.createElement(YoutubePlayerProvider.make, {
                                children: component
                              })
                        })), React.createElement("footer", {
                      className: "h-8"
                    })));
}

var make = Home;

export {
  string ,
  lazyMovieList ,
  lazyMovie ,
  lazyPerson ,
  NavLink ,
  make ,
}
/* lazyMovieList Not a pure module */
