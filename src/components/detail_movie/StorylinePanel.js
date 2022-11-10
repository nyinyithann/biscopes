// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Imdb from "../social_media/Imdb.js";
import * as Util from "../../shared/Util.js";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Twitter from "../social_media/Twitter.js";
import * as Facebook from "../social_media/Facebook.js";
import * as Instagram from "../social_media/Instagram.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as DomBinding from "../../bindings/DomBinding.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as WebsiteLink from "../social_media/WebsiteLink.js";

function string(prim) {
  return prim;
}

function $$int(prim) {
  return prim;
}

function $$float(prim) {
  return prim;
}

function array(prim) {
  return prim;
}

function StorylinePanel$Pair(Props) {
  var title = Props.title;
  var value = Props.value;
  if (Util.isEmptyString(value)) {
    return null;
  } else {
    return React.createElement("div", {
                className: "flex w-full"
              }, React.createElement("span", {
                    className: "w-1/3 overflow-ellipsis"
                  }, Util.toStringElement(title)), React.createElement("span", {
                    className: "w-2/3 overflow-ellipsis"
                  }, Util.toStringElement(value)));
  }
}

var Pair = {
  make: StorylinePanel$Pair
};

function getDirectorIdAndName(movie) {
  try {
    return Belt_Option.getExn(Belt_Option.flatMap(Belt_Option.flatMap(movie.credits, (function (c) {
                          return Belt_Option.flatMap(c.crew, (function (crews) {
                                        return Belt_Array.getBy(crews, (function (crew) {
                                                      return Belt_Option.getWithDefault(crew.job, "").toLowerCase() === "director";
                                                    }));
                                      }));
                        })), (function (d) {
                      return [
                              Belt_Option.getWithDefault(d.id, 0),
                              Belt_Option.getWithDefault(d.name, "")
                            ];
                    })));
  }
  catch (exn){
    return [
            0,
            ""
          ];
  }
}

function StorylinePanel$DirectorLink(Props) {
  var movie = Props.movie;
  var onClick = Props.onClick;
  var match = getDirectorIdAndName(movie);
  var id = match[0];
  if (id !== 0) {
    return React.createElement("div", {
                className: "flex w-full"
              }, React.createElement("span", {
                    className: "w-1/3 overflow-ellipsis"
                  }, Util.toStringElement("Director")), React.createElement("span", {
                    className: "w-2/3 overflow-ellipsis",
                    onClick: (function (param) {
                        Curry._1(onClick, id);
                      })
                  }, Util.toStringElement(match[1])));
  } else {
    return null;
  }
}

var DirectorLink = {
  make: StorylinePanel$DirectorLink
};

function getSpokenLanguages(movie) {
  var spls = Belt_Array.reduce(Belt_Option.getWithDefault(Belt_Option.flatMap(movie.spoken_languages, (function (sls) {
                  return Belt_Array.map(sls, (function (sl) {
                                return Belt_Option.getWithDefault(sl.name, "");
                              }));
                })), []), "", (function (x, y) {
          return x + ", " + y;
        }));
  if (spls.startsWith(", ")) {
    return spls.substr(2);
  } else {
    return spls;
  }
}

function getProductionCompanies(movie) {
  var names = Belt_Array.reduce(Belt_Option.getWithDefault(Belt_Option.flatMap(movie.production_companies, (function (cmps) {
                  return Belt_Array.map(cmps, (function (cmp) {
                                return Belt_Option.getWithDefault(cmp.name, "");
                              }));
                })), []), "", (function (x, y) {
          return x + ", " + y;
        }));
  if (names.startsWith(", ")) {
    return names.substr(2);
  } else {
    return names;
  }
}

function getGenres(movie) {
  var gns = movie.genres;
  if (gns !== undefined) {
    return Belt_Array.map(gns, (function (g) {
                  return [
                          g.id,
                          g.name
                        ];
                }));
  } else {
    return [];
  }
}

function StorylinePanel$GenreLinks(Props) {
  var movie = Props.movie;
  var onClick = Props.onClick;
  var links = getGenres(movie);
  if (Util.isEmptyArray(links)) {
    return null;
  } else {
    return React.createElement("div", {
                className: "flex w-full"
              }, React.createElement("span", {
                    className: "w-1/3 overflow-ellipsis"
                  }, Util.toStringElement("Genres")), React.createElement("div", {
                    className: "w-2/3 overflow-ellipsis flex flex-wrap items-center gap-2"
                  }, Belt_Array.map(links, (function (param) {
                          var id = param[0];
                          return React.createElement("span", {
                                      key: Util.itos(id),
                                      className: "span-link",
                                      onClick: (function (param) {
                                          Curry._1(onClick, id);
                                        })
                                    }, Util.toStringElement(param[1]));
                        }))));
  }
}

var GenreLinks = {
  make: StorylinePanel$GenreLinks
};

function StorylinePanel(Props) {
  var movie = Props.movie;
  var sotryline = Util.toStringElement(Util.getOrEmptyString(movie.overview));
  var x = movie.release_date;
  var releasedDate;
  if (x !== undefined) {
    try {
      releasedDate = new Date(x).toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
          });
    }
    catch (exn){
      releasedDate = "";
    }
  } else {
    releasedDate = "";
  }
  var x$1 = movie.runtime;
  var runtime;
  if (x$1 !== undefined) {
    var t = x$1 | 0;
    runtime = "" + Util.itos(t / 60 | 0) + "h " + Util.itos(t % 60) + "min";
  } else {
    runtime = "";
  }
  var budget = Util.getOrFloatZero(movie.budget).toLocaleString("en-GB");
  var revenue = Util.getOrFloatZero(movie.revenue).toLocaleString("en-GB");
  var status = Util.getOrEmptyString(movie.status);
  var imdbId = Util.getOrEmptyString(Belt_Option.flatMap(movie.external_ids, (function (x) {
              return Util.getOrEmptyString(x.imdb_id);
            })));
  var twitterId = Util.getOrEmptyString(Belt_Option.flatMap(movie.external_ids, (function (x) {
              return Util.getOrEmptyString(x.twitter_id);
            })));
  var facebookId = Util.getOrEmptyString(Belt_Option.flatMap(movie.external_ids, (function (x) {
              return Util.getOrEmptyString(x.facebook_id);
            })));
  var insgagramId = Util.getOrEmptyString(Belt_Option.flatMap(movie.external_ids, (function (x) {
              return Util.getOrEmptyString(x.instagram_id);
            })));
  var website = Util.getOrEmptyString(movie.homepage);
  return React.createElement("div", {
              className: "flex flex-col w-full prose pl-2 sm:pl-10"
            }, React.createElement("div", {
                  className: "flex flex-col w-full gap-1"
                }, React.createElement("span", {
                      className: "text-[1.2rem] font-semibold"
                    }, Util.toStringElement("Storyline")), React.createElement("span", {
                      className: "break-words w-full flex"
                    }, sotryline)), React.createElement("div", {
                  className: "flex flex-col w-full pt-4"
                }, React.createElement(StorylinePanel$Pair, {
                      title: "Released",
                      value: releasedDate
                    }), React.createElement(StorylinePanel$Pair, {
                      title: "Runtime",
                      value: runtime
                    }), React.createElement(StorylinePanel$DirectorLink, {
                      movie: movie,
                      onClick: (function (id) {
                          DomBinding.pop(Util.itos(id));
                        })
                    }), Util.getOrFloatZero(movie.budget) === 0 ? null : React.createElement(StorylinePanel$Pair, {
                        title: "Budget",
                        value: "$" + budget + ""
                      }), Util.getOrFloatZero(movie.revenue) === 0 ? null : React.createElement(StorylinePanel$Pair, {
                        title: "Revenue",
                        value: "$" + revenue + ""
                      }), React.createElement(StorylinePanel$GenreLinks, {
                      movie: movie,
                      onClick: (function (id) {
                          DomBinding.pop(Util.itos(id));
                        })
                    }), React.createElement(StorylinePanel$Pair, {
                      title: "Status",
                      value: status
                    }), React.createElement(StorylinePanel$Pair, {
                      title: "Language",
                      value: getSpokenLanguages(movie)
                    }), React.createElement(StorylinePanel$Pair, {
                      title: "Production",
                      value: getProductionCompanies(movie)
                    })), React.createElement("div", {
                  className: "flex w-full justify-start gap-[1.4rem] pt-4"
                }, React.createElement(Twitter.make, {
                      id: twitterId,
                      className: "h-6 w-6 fill-klor-500 hover:fill-klor-900"
                    }), React.createElement(Facebook.make, {
                      id: facebookId,
                      className: "h-6 w-6 fill-klor-500 hover:fill-klor-900"
                    }), React.createElement(Instagram.make, {
                      id: insgagramId,
                      className: "h-6 w-6 fill-klor-500 hover:fill-klor-900"
                    }), React.createElement(Imdb.make, {
                      id: imdbId,
                      className: "h-6 w-6 fill-klor-500 hover:fill-klor-900"
                    }), React.createElement(WebsiteLink.make, {
                      link: website,
                      className: "h-6 w-6 fill-klor-50 stroke-klor-500 hover:fill-klor-900"
                    })));
}

var make = StorylinePanel;

export {
  string ,
  $$int ,
  $$float ,
  array ,
  Pair ,
  getDirectorIdAndName ,
  DirectorLink ,
  getSpokenLanguages ,
  getProductionCompanies ,
  getGenres ,
  GenreLinks ,
  make ,
}
/* Imdb Not a pure module */
