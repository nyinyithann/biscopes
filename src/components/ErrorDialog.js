// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as ModalDialog from "./ModalDialog.js";
import * as RescriptReactRouter from "@rescript/react/src/RescriptReactRouter.js";
import * as Outline from "@heroicons/react/outline";

function ErrorDialog(Props) {
  var isOpen = Props.isOpen;
  var errorMessage = Props.errorMessage;
  var onClose = Props.onClose;
  var onClick = function (e) {
    e.preventDefault();
    Curry._1(onClose, true);
  };
  var reload = function (param) {
    RescriptReactRouter.push("/");
    window.location.reload();
  };
  return React.createElement(ModalDialog.make, {
              isOpen: isOpen,
              onClose: onClose,
              className: "relative z-50",
              panelClassName: "w-full h-full",
              children: React.createElement("div", {
                    className: "flex flex-col w-full items-center bg-red-400 border-2 border-red-500 rounded"
                  }, React.createElement("div", {
                        className: "flex w-full items-center bg-red-400 h-8 px-2"
                      }, React.createElement("span", {
                            className: "mr-auto text-red-800"
                          }, "Oops..."), React.createElement("button", {
                            className: "ring-0 outline-none",
                            type: "button",
                            onClick: onClick
                          }, React.createElement(Outline.XIcon, {
                                className: "w-6 h-6 p-1 fill-red-100 stroke-red-200 hover:bg-red-700 rounded-full bg-red-900"
                              }))), React.createElement("div", {
                        className: "flex flex-col items-center justify-center min-w-[20rem] max-w-[22rem] p-2 bg-red-200 border-[1px] border-red-300 gap-2"
                      }, React.createElement("div", {
                            className: "block text-red-900 rounded p-2 m-auto text-left w-full line-clamp-6 break-all"
                          }, errorMessage), React.createElement("div", {
                            className: "flex flex-wrap items-center justify-center px-2 pt-2 text-red-500 border-t-[1px] border-t-red-900 w-full"
                          }, React.createElement("button", {
                                className: "px-4 bg-slate-600 rounded-md py-2 text-900 hover:bg-slate-900 hover:text-50 dark:bg-slate-500 dark:text-slate-100 dark:hover:bg-slate-800",
                                type: "button",
                                onClick: reload
                              }, "Go Home"))))
            });
}

var make = ErrorDialog;

export {
  make ,
}
/* react Not a pure module */
