(function (window) {
  var byeSpeaker= {};
  var speak = "Good bye";
  byeSpeaker.speak = function (names) {
    console.log(speak + " " + names);
  }
  window.byeSpeaker = byeSpeaker;
  }) (window);
