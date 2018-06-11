document.addEventListener("DOMContentLoaded", function(event) {

  // Functie voor het aanpassen van het lettertype wanneer de pagina geladen is.
  function WijzigLettertype(){
    document.body.style.fontFamily = stemspecs.lettertype;
  }

  WijzigLettertype();

});
//chart.js canvas
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [huidigeDag],
        datasets: [{
            label: 'Aantal stemmen',
            data: [1],
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                // 'rgba(255,99,132,1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



// Huidige weekdag
var dag = new Date();
    var weekdag = new Array(7);
    weekdag[0] = "Zondag";
    weekdag[1] = "Maandag";
    weekdag[2] = "Dinsdag";
    weekdag[3] = "Woensdag";
    weekdag[4] = "Donderdag";
    weekdag[5] = "Vrijdag";
    weekdag[6] = "Zaterdag";

    var huidigeDag = weekdag[dag.getDay()];

// Variabelen uit var.js inladen
var stemspecs = new stemvariabel();

// Stem module
var stemmodule = (function() {

  // Variabel aanmaken met het aantal stemmen
  var stemmen = stemspecs.stemmen;

  // Functie om elke keer nadat er geklikt wordt een stem toe te voegen aan het variabel.
  function stem() {
    stemmen += 1;
    updateStemmen();
  }

  // Functie voor het bijwerken van het aantal stemmen.
  function updateStemmen() {
    document.getElementById('stemmen').innerHTML = stemmen;
    document.getElementById('dag').innerHTML = huidigeDag;
  }

  // Initialiseren van het aantal huidigen stemmen en het uitvoeren van de functie wanneer er op de knop geklikt wordt.
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
