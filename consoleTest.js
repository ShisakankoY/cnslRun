// consoleTest.js

(function(global) {
  global.consoleTest = function(...args) {
    console.log(...args);
  };
})(typeof window !== "undefined" ? window : global);
