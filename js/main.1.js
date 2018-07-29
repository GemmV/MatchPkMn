'use strict';

var click4 = document.getElementById('iddelboton1');
var click6 = document.getElementById('iddelboton2');
var click8 = document.getElementById('iddelboton3');
var botonComenzar = document.getElementById('iddelboton4');
 
var urlApi = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';
var cuatro = "4.json";
var seis = "6.json";
var ocho = "8.json";

var promesa;
var UL = document.querySelector('.listadelis');

//funcion llamada y promesa
function comenzar (){
	var suma;
	
	if (click4.checked === true) {
		suma = urlApi + cuatro;
	} else if (click6.checked === true){
		suma = urlApi + seis;
	} else if (click8.checked === true){
		suma = urlApi + ocho;
	}
	
	function llamadaApi(){
		var result = fetch(suma)
			.then(function(translate){
				return translate.json();
		});
		return result;
	}
	promesa = llamadaApi();
	}

	promesa.then(function(lista_de_cartas){
		console.log(lista_de_cartas);
		// nuevoLi = document.createElement('li');
		// UL.innerHTML = nuevoLi;
		//el appendchild
	})



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