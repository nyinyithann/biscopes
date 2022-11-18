// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

function Pulse(Props) {
  var show = Props.show;
  if (show) {
    return React.createElement("div", {
                className: "flex w-full items-center justify-center p-2 pt-8 gap-6"
              }, React.createElement("div", {
                    className: "flex items-center justify-center p-1 h-[1.2rem] w-[1.2rem] rounded-full bg-200 animate-ping"
                  }, React.createElement("span", {
                        className: "h-[0.5rem] w-[0.5rem] rounded-full bg-red-500"
                      })), React.createElement("div", {
                    className: "flex items-center justify-center p-1 h-[1.2rem] w-[1.2rem] rounded-full bg-200 animate-ping"
                  }, React.createElement("span", {
                        className: "h-[0.5rem] w-[0.5rem] rounded-full bg-yellow-500"
                      })), React.createElement("div", {
                    className: "flex items-center justify-center p-1 h-[1.2rem] w-[1.2rem] rounded-full bg-200 animate-ping"
                  }, React.createElement("span", {
                        className: "h-[0.5rem] w-[0.5rem] rounded-full bg-green-500"
                      })));
  } else {
    return null;
  }
}

var make = Pulse;

export {
  make ,
}
/* react Not a pure module */
