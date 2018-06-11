# js-framework-B-T

## Korte inhoud
Voor DEV in Semester 4 moesten wij gebruik maken van libraries en hier onze eigen draai aan geven. Wij (Bart & Tim) hebben ervoor gekozen om iets te creëeren waar we in onze proftaak in theorie iets aan zouden hebben. We hebben er als groep voor gekozen om een clickable prototype als eindproduct op te leveren, en dus geen compleet geprogrammeerde landingspagina. We hebben een bestaande library gebruikt [Chart.js](http://www.chartjs.org/) om een grafiek te creëeren, deze library hebben we geimplementeerd in ons eigen POC. Uiteindelijk hebben wij dus een klein stemplatform gemaakt waarin je kunt zien hoeveel stemmen je video per dag heeft gekregen.

Dit gaat om een prototype voor het dashboard en de stemmodule. Mocht je hier zelf mee aan de slag willen. Dan zal je het prototype verder uit moeten werken.

## Motivatie
We hebben het internet afgezocht naar een vote system gemaakt in javascript, helaas konden wij geen goede voorbeelden vinden. We hebben ervoor gekozen om ons eigen stem systeem te creëeren zodat we dit zouden kunnen gebruiken in een gedeelte van ons potentiële eindproduct (dashboard).
We hebben een simpele login validatie gemaakt aangezien er op het internet een heleboel stonden die veel te gecompliceerd en uitgebreid waren voor onze doeleinden.

## Installatie & Hoe te gebruiken?
#### Validatie:
Als eerst creëer je een form binnen HTML, het is belangrijk dat je je form een ID geeft en de input velden een class.
```html
   <div class='login'>
      <h2>Login</h2>
      <form id="form">
          <input name='username' placeholder='Username' type='text' class="v">
          <input name='password' placeholder='Password' type='text' class="v">
          <input type="submit" value="Submit">
        </form>
    </div>
```
Onderaan voeg je een script tag toe die verwijst naar het externe validatie bestand
```html
   <script src="js/easyvalidatie.js" type="text/javascript"></script>
```
#### Stemsysteem:
Om de stemmodule in je pagina te krijgen maak je een nieuw HTML bestand waarin je de volgende structuur overneemt. Het is belangrijk dat je voor de "Paragraph" tags en de "Button" de juiste ID's overneemt.
```html
  <div>
    <p id="stemmen"></p>
    <p id="dag"></p>
    <button id="stem">Stem</button>  
  </div>
```

Onderaan voeg je de volgende twee script tags toe die verwijzen naar de externe JS bestanden.
```html
  <script src="js/var.js"></script>
  <script src="js/app.js"></script>
```

In het bestand var.js kun je het aantal stemmen toewijzen en het lettertype van de stemmodule aanpassen.

```javascript
  var stemvariabel = function(){
    this.stemmen = 10;
    this.lettertype = "Helvetica";
  }
```

Bekijk [hier](http://bartvandenberkmortel.nl/school/framework/) een werkende demo.
