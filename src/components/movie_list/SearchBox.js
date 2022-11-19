// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as UrlQueryParam from "../../routes/UrlQueryParam.js";
import * as Solid from "@heroicons/react/solid";

function SearchBox(Props) {
  var match = UrlQueryParam.useQueryParams(undefined);
  var setQueryParam = match[1];
  var queryParam = match[0];
  var inputRef = React.useRef(null);
  React.useEffect((function () {
          if (queryParam.TAG === /* Search */2) {
            var elem = inputRef.current;
            if (!(elem == null)) {
              elem.value = queryParam._0.query;
            }
            
          }
          
        }), [
        queryParam,
        inputRef.current
      ]);
  var handleKeyDown = function (e) {
    if (e.key !== "Enter") {
      return ;
    }
    e.preventDefault();
    var elem = inputRef.current;
    if (!(elem == null)) {
      return Curry._1(setQueryParam, {
                  TAG: /* Search */2,
                  _0: {
                    query: elem.value,
                    page: 1
                  }
                });
    }
    
  };
  var handleChange = function (e) {
    e.preventDefault();
    var v = e.target.value;
    if (v === "" && queryParam.TAG === /* Search */2) {
      return Curry._1(setQueryParam, {
                  TAG: /* Category */0,
                  _0: {
                    name: "popular",
                    display: "Popular",
                    page: 1
                  }
                });
    }
    
  };
  return React.createElement("div", {
              className: "relative text-slate-500 focus-within:text-slate-600 flex items-center w-full",
              id: "search-container"
            }, React.createElement("div", {
                  className: "pointer-events-none absolute inset-y-0 left-1 flex items-center"
                }, React.createElement(Solid.SearchIcon, {
                      className: "h-5 w-5 fill-klor-400"
                    })), React.createElement("input", {
                  ref: inputRef,
                  className: "block w-full pl-[2rem] placeholder-klor-400 outline-none ring-0 border-t-0 border-r-0 border-l-0 border-b-[1px] border-b-400 hover:border-b-500 focus:placeholder-slate-500 focus:outline-none focus:ring-0 text-900 active:text-900 focus:text-900 active:ring-0 active:outline-none rounded-md",
                  id: "search-field",
                  maxLength: 64,
                  name: "search",
                  placeholder: "Search",
                  type: "search",
                  onKeyDown: handleKeyDown,
                  onChange: handleChange
                }));
}

var make = SearchBox;

export {
  make ,
}
/* react Not a pure module */
