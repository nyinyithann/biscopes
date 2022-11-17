// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as Links from "../shared/Links.js";
import * as Js_exn from "rescript/lib/es6/js_exn.js";
import * as $$Promise from "@ryyppy/rescript-promise/src/Promise.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

var contentType = [
  "Content-type",
  "application/json"
];

var authorization_1 = "Bearer " + process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN + "";

var authorization = [
  "Authorization",
  authorization_1
];

function checkResponseStatus(promise) {
  return promise.then(function (response) {
              if (response.ok) {
                return Promise.resolve({
                            TAG: /* Ok */0,
                            _0: response.json()
                          });
              } else {
                return Promise.resolve({
                            TAG: /* Error */1,
                            _0: response.json()
                          });
              }
            });
}

function catchPromiseFault(promise) {
  return $$Promise.$$catch(promise, (function (e) {
                if (e.RE_EXN_ID !== Js_exn.$$Error) {
                  return Promise.resolve({
                              TAG: /* Error */1,
                              _0: Promise.resolve("Unexpected Promise Fault!")
                            });
                }
                var msg = e._1.message;
                if (msg === undefined) {
                  return Promise.resolve({
                              TAG: /* Error */1,
                              _0: Promise.resolve("Unexpected Promise Fault!")
                            });
                }
                var tmp;
                try {
                  tmp = JSON.parse(msg);
                }
                catch (exn){
                  tmp = "Unexpected Promise Fault!";
                }
                return Promise.resolve({
                            TAG: /* Error */1,
                            _0: Promise.resolve(tmp)
                          });
              }));
}

function handleResponse(promise, callback, param) {
  return promise.then(function (result) {
              if (result.TAG === /* Ok */0) {
                result._0.then(function (data) {
                      Curry._1(callback, {
                            TAG: /* Ok */0,
                            _0: data
                          });
                      return Promise.resolve(undefined);
                    });
              } else {
                result._0.then(function (err) {
                      Curry._1(callback, {
                            TAG: /* Error */1,
                            _0: err
                          });
                      return Promise.resolve(undefined);
                    });
              }
              return Promise.resolve(undefined);
            });
}

function getMultipleDataset2(apiPaths, callback, signal, param) {
  var getFetch = function (apiPath) {
    return catchPromiseFault(checkResponseStatus(fetch(apiPath, {
                        method: "GET",
                        headers: Caml_option.some(new Headers([
                                  contentType,
                                  authorization
                                ])),
                        signal: signal
                      })));
  };
  return Promise.all([
                getFetch(apiPaths[0]),
                getFetch(apiPaths[1])
              ]).then(function (param) {
              var r2 = param[1];
              var r1 = param[0];
              if (r1.TAG === /* Ok */0) {
                var rp1 = r1._0;
                if (r2.TAG === /* Ok */0) {
                  var rp2 = r2._0;
                  rp1.then(function (data1) {
                        return rp2.then(function (data2) {
                                    Curry._2(callback, {
                                          TAG: /* Ok */0,
                                          _0: data1
                                        }, {
                                          TAG: /* Ok */0,
                                          _0: data2
                                        });
                                    return Promise.resolve(undefined);
                                  });
                      });
                } else {
                  var msg = r2._0;
                  rp1.then(function (data) {
                        return msg.then(function (err) {
                                    Curry._2(callback, {
                                          TAG: /* Ok */0,
                                          _0: data
                                        }, {
                                          TAG: /* Error */1,
                                          _0: err
                                        });
                                    return Promise.resolve(undefined);
                                  });
                      });
                }
              } else {
                var msg$1 = r1._0;
                if (r2.TAG === /* Ok */0) {
                  var rp = r2._0;
                  msg$1.then(function (err) {
                        return rp.then(function (data) {
                                    Curry._2(callback, {
                                          TAG: /* Error */1,
                                          _0: err
                                        }, {
                                          TAG: /* Ok */0,
                                          _0: data
                                        });
                                    return Promise.resolve(undefined);
                                  });
                      });
                } else {
                  var msg2 = r2._0;
                  msg$1.then(function (err1) {
                        return msg2.then(function (err2) {
                                    Curry._2(callback, {
                                          TAG: /* Error */1,
                                          _0: err1
                                        }, {
                                          TAG: /* Error */1,
                                          _0: err2
                                        });
                                    return Promise.resolve(undefined);
                                  });
                      });
                }
              }
              return Promise.resolve(undefined);
            });
}

function getData(apiPath, callback, signal, param) {
  return handleResponse(catchPromiseFault(checkResponseStatus(fetch(apiPath, {
                          method: "GET",
                          headers: Caml_option.some(new Headers([
                                    contentType,
                                    authorization
                                  ])),
                          signal: signal
                        }))), callback, undefined);
}

function getGenres(callback, signal, param) {
  var apiPath = "" + Links.apiBaseUrl + "/" + Links.apiVersion + "/genre/movie/list";
  return handleResponse(catchPromiseFault(checkResponseStatus(fetch(apiPath, {
                          method: "GET",
                          headers: Caml_option.some(new Headers([
                                    contentType,
                                    authorization
                                  ])),
                          signal: signal
                        }))), callback, undefined);
}

export {
  contentType ,
  authorization ,
  checkResponseStatus ,
  catchPromiseFault ,
  handleResponse ,
  getMultipleDataset2 ,
  getData ,
  getGenres ,
}
/* authorization Not a pure module */
