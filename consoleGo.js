// consoleGo.js

(function(global) {
  global.consoleGo = function(...args) {
    console.log(...args);
  };
})(typeof window !== "undefined" ? window : global);
