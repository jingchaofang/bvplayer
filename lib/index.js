"use strict";

require("core-js/modules/es7.promise.finally");

() => 1;

class A {}

Promise.resolve().finally();

function foo(x) {
  if (x) {
    return x;
  }

  return "default string";
}