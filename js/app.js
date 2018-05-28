// Stem module
var stemspecs = new stemvariabel();

var stemmodule = (function() {

  var stemmen = stemspecs.stemmen;

  function stem() {
    stemmen += 1;
    updatestemmen();
  }

  function updatestemmen() {
    document.getElementById('stemmen').innerHTML = stemmen;
  }

  var init = function() {
    console.log('init');
    document.getElementById('stem').addEventListener('click', stem);

    updatestemmen();
  };

  return {
    init: init
  }

})();

stemmodule.init();
