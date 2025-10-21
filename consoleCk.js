// consoleCk.js

(function(global) {
  global.consoleCk = function(...args) {
    console.log(...args);
  };
})(typeof window !== "undefined" ? window : global);
