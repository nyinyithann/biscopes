// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Solid from "@heroicons/react/solid";

function $$int(prim) {
  return prim;
}

function string(prim) {
  return prim;
}

var baseBtnClass = "flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-2 group";

function PhotosSlider(Props) {
  var currentImageIndex = Props.currentImageIndex;
  var width = Props.width;
  var height = Props.height;
  React.useState(function () {
        return {
                url: "",
                index: currentImageIndex
              };
      });
  var style = {
    height: height.toString() + "px",
    width: width.toString() + "px"
  };
  return React.createElement("div", {
              className: "flex flex-col",
              style: style
            }, React.createElement("div", {
                  className: "bg-blue-500 h-10"
                }), React.createElement("div", {
                  className: "flex items-end justify-center p-2 gap-2 mt-auto"
                }, React.createElement("div", {
                      className: "flex items-center justify-center p-2 rounded-t-full bg-200 self-baseline"
                    }, React.createElement("button", {
                          className: "" + baseBtnClass + " rounded-l-full",
                          type: "button"
                        }, React.createElement(Solid.ArrowNarrowLeftIcon, {
                              className: "w-6 h-6 fill-klor-500"
                            })), React.createElement("span", {
                          className: "rounded-md px-6 py-2"
                        }, "1/6"), React.createElement("button", {
                          className: "" + baseBtnClass + " rounded-r-full",
                          type: "button"
                        }, React.createElement(Solid.ArrowNarrowRightIcon, {
                              className: "w-6 h-6 fill-klor-500"
                            })))));
}

var make = PhotosSlider;

export {
  $$int ,
  string ,
  baseBtnClass ,
  make ,
}
/* react Not a pure module */
