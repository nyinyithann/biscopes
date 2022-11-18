// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Util from "../../shared/Util.js";
import * as Links from "../../shared/Links.js";
import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as PhotosViewer from "../PhotosViewer.js";

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

function getBackdrops(movie) {
  return Belt_Array.keepMap(Belt_Option.getWithDefault(Belt_Option.getWithDefault(Belt_Option.map(movie.images, (function (imgs) {
                            return imgs.backdrops;
                          })), []), []), (function (x) {
                var filePath = Util.getOrEmptyString(x.file_path);
                if (filePath !== "") {
                  return {
                          id: filePath,
                          url: Links.getPosterImageW533H300Bestv2Link(filePath),
                          type_: "backdrop"
                        };
                }
                
              }));
}

function getPosters(movie) {
  return Belt_Array.keepMap(Belt_Option.getWithDefault(Belt_Option.getWithDefault(Belt_Option.map(movie.images, (function (imgs) {
                            return imgs.posters;
                          })), []), []), (function (x) {
                var filePath = Util.getOrEmptyString(x.file_path);
                if (filePath !== "") {
                  return {
                          id: filePath,
                          url: Links.getPosterImage_W370_H556_bestv2Link(filePath),
                          type_: "poster"
                        };
                }
                
              }));
}

function PhotosPanel(Props) {
  var movie = Props.movie;
  var photosRef = React.useRef([]);
  React.useMemo((function () {
          photosRef.current = Belt_Array.concat(getBackdrops(movie), getPosters(movie));
        }), [movie]);
  return React.createElement("div", {
              className: "flex w-full items-center justify-center p-2"
            }, React.createElement(PhotosViewer.make, {
                  photos: photosRef.current
                }));
}

var make = PhotosPanel;

export {
  string ,
  $$int ,
  $$float ,
  array ,
  getBackdrops ,
  getPosters ,
  make ,
}
/* react Not a pure module */
