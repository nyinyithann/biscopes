// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Hero from "./Hero.js";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Loading from "../Loading.js";
import * as ErrorDisplay from "../ErrorDisplay.js";
import * as UrlQueryParam from "../../routes/UrlQueryParam.js";
import * as MoviesProvider from "../../providers/MoviesProvider.js";
import * as StorylinePanel from "./StorylinePanel.js";
import * as React$1 from "@headlessui/react";

function string(prim) {
  return prim;
}

function Movie(Props) {
  var match = MoviesProvider.useMoviesContext(undefined);
  var loadDetailMovie = match.loadDetailMovie;
  var error = match.error;
  var detail_movie = match.detail_movie;
  var match$1 = UrlQueryParam.useQueryParams(undefined);
  var queryParam = match$1[0];
  React.useMemo((function () {
          var t = detail_movie.title;
          if (t !== undefined) {
            window.document.title = t;
          } else {
            window.document.title = "Bioscopes";
          }
        }), [detail_movie]);
  React.useEffect((function () {
          var controller = new AbortController();
          if (queryParam.TAG === /* Movie */3) {
            Curry._2(loadDetailMovie, {
                  TAG: /* Movie */3,
                  _0: {
                    id: queryParam._0.id
                  }
                }, controller.signal);
          }
          return (function (param) {
                    controller.abort("Cancel the request");
                  });
        }), []);
  if (error.length > 0) {
    return React.createElement(ErrorDisplay.make, {
                errorMessage: error
              });
  } else if (match.loading) {
    return React.createElement(Loading.make, {
                className: "w-[6rem] h-[3rem] stroke-[0.2rem] p-3 stroke-klor-200 text-green-500 fill-50 dark:fill-slate-600 dark:stroke-slate-400 dark:text-900 m-auto"
              });
  } else {
    return React.createElement("main", {
                className: "flex border-t-[2px] border-slate-200"
              }, React.createElement("div", {
                    className: "flex flex-col w-full h-full"
                  }, React.createElement("div", {
                        className: "w-full",
                        id: "hero_container"
                      }, React.createElement(Hero.make, {
                            movie: detail_movie
                          })), React.createElement("div", {
                        className: "w-full flex pt-1",
                        id: "movie_info_tab_container"
                      }, React.createElement(React$1.Tab.Group, {
                            children: (function (selectedIndex) {
                                return React.createElement("div", {
                                            className: "flex flex-col w-full"
                                          }, React.createElement(React$1.Tab.List, {
                                                className: "flex w-full flex-nowrap items-center justify-around",
                                                children: (function (param) {
                                                    return React.createElement(React.Fragment, undefined, React.createElement(React$1.Tab, {
                                                                    className: "control-color flex flex-col items-center justify-center w-full h-full outline-none ring-0 border-r-[1px] border-300",
                                                                    children: (function (props) {
                                                                        return React.createElement("div", {
                                                                                    className: "" + (
                                                                                      props.selected ? "bg-300 text-900" : ""
                                                                                    ) + " w-full h-full control-color flex items-center justify-center py-2"
                                                                                  }, "OVERVIEW");
                                                                      }),
                                                                    key: "overview"
                                                                  }), React.createElement(React$1.Tab, {
                                                                    className: "control-color flex flex-col items-center justify-center w-full h-full outline-none ring-0 border-r-[1px] border-300",
                                                                    children: (function (props) {
                                                                        return React.createElement("div", {
                                                                                    className: "" + (
                                                                                      props.selected ? "bg-300 text-900" : ""
                                                                                    ) + " w-full h-full control-color flex items-center justify-center py-2"
                                                                                  }, "VIDEOS");
                                                                      }),
                                                                    key: "videos"
                                                                  }), React.createElement(React$1.Tab, {
                                                                    className: "control-color flex flex-col items-center justify-center w-full h-full outline-none ring-0 border-r-[1px] border-300",
                                                                    children: (function (props) {
                                                                        return React.createElement("div", {
                                                                                    className: "" + (
                                                                                      props.selected ? "bg-300 text-900" : ""
                                                                                    ) + " w-full h-full control-color flex items-center justify-center py-2"
                                                                                  }, "PHOTOS");
                                                                      }),
                                                                    key: "photos"
                                                                  }));
                                                  })
                                              }), React.createElement(React$1.Tab.Panels, {
                                                className: "pt-1",
                                                children: (function (props) {
                                                    return React.createElement(React.Fragment, undefined, React.createElement(React$1.Tab.Panel, {
                                                                    children: (function (props) {
                                                                        return React.createElement("div", {
                                                                                    className: "flex w-full p-2"
                                                                                  }, React.createElement(StorylinePanel.make, {
                                                                                        movie: detail_movie
                                                                                      }));
                                                                      }),
                                                                    key: "overview-panel"
                                                                  }), React.createElement(React$1.Tab.Panel, {
                                                                    children: (function (props) {
                                                                        return React.createElement("div", undefined, "panel2");
                                                                      }),
                                                                    key: "videos-panel"
                                                                  }), React.createElement(React$1.Tab.Panel, {
                                                                    children: (function (props) {
                                                                        return React.createElement("div", undefined, "panel3");
                                                                      }),
                                                                    key: "photos-panel"
                                                                  }));
                                                  })
                                              }));
                              })
                          }))), React.createElement("div", {
                    className: "hidden w-full h-[80rem]"
                  }, React.createElement("div", {
                        className: "w-2/5 bg-200 border-2"
                      }), React.createElement("div", {
                        className: "w-3/5 bg-green-100 border-2"
                      })));
  }
}

var make = Movie;

export {
  string ,
  make ,
}
/* Hero Not a pure module */
