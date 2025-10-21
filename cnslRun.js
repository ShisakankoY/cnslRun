// cnslRun.js

(function(global) {
  global.cnslRun = function(...args) {
    console.log(...args);
  };
})(typeof window !== "undefined" ? window : global);
