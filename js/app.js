document.addEventListener("DOMContentLoaded", function(event) {

  // Functie voor het aanpassen van het lettertype wanneer de pagina geladen is.
  function WijzigLettertype(){
    document.body.style.fontFamily = stemspecs.lettertype;
  }

  WijzigLettertype();
});

// Stem module
var stemspecs = new stemvariabel();

var stemmodule = (function() {

  var stemmen = stemspecs.stemmen;

  function stem() {
    stemmen += 1;
    updateStemmen();
  }

  function updateStemmen() {
    document.getElementById('stemmen').innerHTML = stemmen;
  }

  var init = function() {
    console.log('init');
    document.getElementById('stem').addEventListener('click', stem);

    updateStemmen();
  };

  return {
    init: init
  }

})();

stemmodule.init();
