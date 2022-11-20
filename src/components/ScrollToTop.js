// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Solid from "@heroicons/react/solid";

function string(prim) {
  return prim;
}

function array(prim) {
  return prim;
}

function ScrollToTop(Props) {
  var match = React.useState(function () {
        return false;
      });
  var setVisibility = match[1];
  var toggleVisibility = function (param) {
    if (window.pageYOffset > 300) {
      return Curry._1(setVisibility, (function (param) {
                    return true;
                  }));
    } else {
      return Curry._1(setVisibility, (function (param) {
                    return false;
                  }));
    }
  };
  var getVisibility = function (isVisible) {
    if (isVisible) {
      return {
              visibility: "visible"
            };
    } else {
      return {
              visibility: "hidden"
            };
    }
  };
  var up = function (param) {
    window.scrollTo({
          behavior: "smooth",
          top: 0,
          left: 0
        });
  };
  var clickToTop = function (e) {
    e.preventDefault();
    up(undefined);
  };
  var touchToTop = function (e) {
    e.preventDefault();
    up(undefined);
  };
  React.useEffect((function () {
          window.addEventListener("scroll", toggleVisibility);
          return (function (param) {
                    window.removeEventListener("scroll", toggleVisibility);
                  });
        }), []);
  return React.createElement("button", {
              className: "z-50 flex w-auto gap-2 justify-center p-[0.8rem] group rounded-full ring-0 outline-none bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-lg hover:bg-opacity-80 hover:cursor-pointer shadow-md shadow-slate-100  dark:shadow-slate-700",
              style: getVisibility(match[0]),
              type: "button",
              onClick: clickToTop,
              onTouchStart: touchToTop
            }, React.createElement(Solid.ArrowUpIcon, {
                  className: "w-6 h-6 fill-klor-900"
                }));
}

var make = ScrollToTop;

export {
  string ,
  array ,
  make ,
}
/* react Not a pure module */