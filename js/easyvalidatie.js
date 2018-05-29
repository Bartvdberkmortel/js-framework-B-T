//Bewerk de foutmeldingen hier
var messages = {
    not_empty: ' het veld mag niet leeg zijn',
    too_long: ' is te lang',
    too_short: ' is te kort',
    not_valid: ' is niet toegestaan',
}

//Voeg het form id in
document.getElementById("form").addEventListener("submit", check );

function check()
{
    //classes met input velden worden door simpel validation gecheckt
    var fields = document.getElementsByClassName('v');


    //Loopje door de validatie resultaten
    for(var i=0;i<fields.length;i++){

        //check of alle velden zijn ingevuld
        if(fields[i].value == ""){
            alert(fields[i].name + messages.not_empty);
        }
        // check de maximale lengte van de input
        if(fields[i].value.length > 20 ){
            alert(fields[i].name + messages.too_long);
        }
        // check de minimale lengte van de input
        if(fields[i].value.length < 5 ){
            alert(fields[i].name + messages.too_short);
        }
        else
        {
            alert ("gelukt!");
        }
    }
    return true;
}
