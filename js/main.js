'use strict';

console.log('>> Ready :)');


var click4 = document.getElementById('iddelboton1');
var click6 = document.getElementById('iddelboton2');
var click8 = document.getElementById('iddelboton3');
var botonComenzar = document.getElementById('iddelboton4');
 
var urlApi = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';
var cuatro = "4.json";
var seis = "6.json";
var ocho = "8.json";

var promesa;
var UL = document.querySelector('.listadecartas');

function comenzar (){

if (click4.checked === true) {
    
function llamadaApi(){
    var result = fetch(urlApi + cuatro)
      .then(function(translate){
        return translate.json();
      });
    return result;
    }
    promesa = llamadaApi();

} else if (click6.checked === true){
    function llamadaApi(){
    var result = fetch(urlApi + cuatro)
      .then(function(translate){
        return translate.json();
      });
    return result;
    }
    promesa = llamadaApi();

} else if (click8.checked === true){
    function llamadaApi(){
    var result = fetch(urlApi + ocho)
      .then(function(translate){
        return translate.json();
      });
      console.log(result);
    return result;
     }
     promesa = llamadaApi();
    
    }
}
botonComenzar.addEventListener('click', comenzar);




// function comenzarJuego (urlApi){
    
// }
    // fetch(urlApi + '/4.json')
    //   .then(function(response){
    //     return response.json();

    
//  console.log(comenzarJuego);


// // UL.innerHTML = PoKemon;

// // console.log(urlApi);
// // console.log(PoKemon);

//     // if () {
//     //  
        
//     // } else if (condition) {
        
//     // } {
                
//     // }
// // //llamada a la URL BOTON 1
// // fetch(urlApi + '8.json')
// //     .then(function(response){
// //         return response.txt();
// // })
// // //https://raw.githubusercontent.com/Adalab/cards-data/master/NUMERO.json