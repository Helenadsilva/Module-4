(function (window) {
  var helloSpeaker= {};
  var speak = "Hello";
  helloSpeaker.speak = function (names) {
    console.log(speak + " " + names);
  }
window.helloSpeaker = helloSpeaker;

})(window);
