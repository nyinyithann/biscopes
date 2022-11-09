// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as GenreList from "../components/GenreList.js";
import * as SearchBox from "../components/SearchBox.js";
import * as ThemeMenu from "../components/ThemeMenu.js";
import * as DomBinding from "../bindings/DomBinding.js";
import * as Js_promise from "rescript/lib/es6/js_promise.js";
import * as GithubButton from "../components/GithubButton.js";
import * as SuspensionLoader from "../components/SuspensionLoader.js";
import * as React$1 from "@headlessui/react";
import * as RescriptReactRouter from "@rescript/react/src/RescriptReactRouter.js";
import * as Solid from "@heroicons/react/solid";

function string(prim) {
  return prim;
}

var sidebarOpenRef = {
  contents: false
};

function Home(Props) {
  var match = React.useState(function () {
        return sidebarOpenRef.contents;
      });
  var setSidebarOpen = match[1];
  var sidebarOpen = match[0];
  React.useEffect((function () {
          sidebarOpenRef.contents = DomBinding.checkMediaQuery("(min-width: 600px)");
        }), []);
  React.useEffect((function () {
          sidebarOpenRef.contents = sidebarOpen;
        }), [sidebarOpen]);
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
  var url = RescriptReactRouter.useUrl(undefined, undefined);
  var match$1 = url.path;
  var component;
  var exit = 0;
  if (match$1) {
    var exit$1 = 0;
    switch (match$1.hd) {
      case "movie" :
          if (match$1.tl) {
            exit = 1;
          } else {
            component = React.createElement(SuspensionLoader.make, {
                  children: lazyMovie
                });
          }
          break;
      case "person" :
          if (match$1.tl) {
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
      if (match$1.tl) {
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
  return React.createElement("div", undefined, React.createElement("div", {
                  className: "w-[12rem] sm:w-[14rem] md:w-[16rem]"
                }, React.createElement(React$1.Transition, {
                      show: sidebarOpenRef.contents,
                      children: React.createElement("div", {
                            className: "relative z-40 w-[12rem] sm:w-[14rem] md:w-[16rem]"
                          }, React.createElement("div", {
                                className: "fixed inset-0 flex w-[12rem] sm:w-[14rem] md:w-[16rem] bg-white"
                              }, React.createElement(React$1.Transition.Child, {
                                    enter: "transition ease-in-out duration-300 transform",
                                    enterFrom: "-translate-x-full",
                                    enterTo: "translate-x-0",
                                    leave: "transition ease-in-out duration-300 transform",
                                    leaveFrom: "translate-x-0",
                                    leaveTo: "-translate-x-full",
                                    children: React.createElement("div", {
                                          className: "relative flex h-full w-[12rem] sm:w-[14rem] md:w-[16rem] flex-1 flex-col border-r-[1px] border-r-slate-200 shadow-2xl shadow-slate-300 pt-2"
                                        }, React.createElement(React$1.Transition.Child, {
                                              enter: "ease-in-out duration-300",
                                              enterFrom: "opacity-0",
                                              enterTo: "opacity-100",
                                              leave: "ease-in-out duration-300",
                                              leaveFrom: "opacity-100",
                                              leaveTo: "opacity-0",
                                              children: React.createElement("div", {
                                                    className: "absolute top-0 right-0 pt-2 w-[14rem] sm:w-[14rem] md:w-[16rem] z-40 bg-gradient-to-t from-green-300 via-klor-100 to-slate-50"
                                                  })
                                            }), React.createElement("div", {
                                              className: "relative w-full"
                                            }, React.createElement("button", {
                                                  className: "" + (
                                                    sidebarOpenRef.contents ? "block" : "hidden"
                                                  ) + " pr-4 outline-none absolute right-[-0.8rem] top-[0.3rem]",
                                                  type: "button",
                                                  onClick: (function (param) {
                                                      sidebarOpenRef.contents = false;
                                                      Curry._1(setSidebarOpen, (function (param) {
                                                              return false;
                                                            }));
                                                    })
                                                }, React.createElement("span", {
                                                      className: "sr-only"
                                                    }, "Close sidebar"), React.createElement(Solid.XIcon, {
                                                      className: "h-8 w-8 fill-400 hover:fill-yellow-200 fill-yellow-300 rounded-full py-1 bg-transparent"
                                                    })), React.createElement(GenreList.make, {})))
                                  })))
                    })), React.createElement("div", {
                  className: "" + (
                    sidebarOpenRef.contents ? "ml-[12rem] sm:ml-[14rem] md:ml-[16rem]" : ""
                  ) + " flex flex-1 flex-col h-full"
                }, React.createElement("div", {
                      className: "w-full flex flex-col flex-1 bg-white"
                    }, React.createElement("div", {
                          className: "h-auto flex flex-col z-50"
                        }, React.createElement("div", {
                              className: "sticky top-0 z-50 flex h-14 flex-shrink-0 bg-white",
                              id: "navbar"
                            }, React.createElement("button", {
                                  className: "" + (
                                    sidebarOpenRef.contents ? "hidden" : "block"
                                  ) + " px-4 outline-none",
                                  type: "button",
                                  onClick: (function (param) {
                                      sidebarOpenRef.contents = true;
                                      Curry._1(setSidebarOpen, (function (param) {
                                              return true;
                                            }));
                                    })
                                }, React.createElement("span", {
                                      className: "sr-only"
                                    }, "Open Sidebar"), React.createElement(Solid.MenuIcon, {
                                      className: "h-8 w-8 fill-400 hover:fill-yellow-100 bg-gradient-to-tr from-teal-400 to-blue-400 text-yellow-300 rounded p-1"
                                    })), React.createElement("div", {
                                  className: "flex flex-1 items-center justify-end gap-2",
                                  id: "search-colorswatch-container"
                                }, React.createElement(SearchBox.make, {}), React.createElement("div", {
                                      className: "pr-4 place-items-start flex items-center gap-2 z-[50]",
                                      id: "colorswatch-container"
                                    }, React.createElement(ThemeMenu.make, {}), React.createElement(GithubButton.make, {})))), React.createElement("div", {
                              className: "z-30 bg-white"
                            }, component), React.createElement("footer", {
                              className: "h-8"
                            })))));
}

var make = Home;

export {
  string ,
  sidebarOpenRef ,
  make ,
}
/* react Not a pure module */
