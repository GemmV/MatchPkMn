'use strict';

var click4 = document.getElementById('iddelboton1');
var click6 = document.getElementById('iddelboton2');
var click8 = document.getElementById('iddelboton3');
var botonComenzar = document.getElementById('iddelboton4');
 
var urlApi = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';
var cuatro = "4.json";
var seis = "6.json";
var ocho = "8.json";
var dorso = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';

var promesa;
var UL = document.querySelector('.listadelis');

//funcion llamada y promesa
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
   			var result = fetch(urlApi + seis)
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
      		return result;
    	}
    	promesa = llamadaApi();
	}

	//pintando el HTML
	promesa.then(function(lista_de_cartas){
		console.log(lista_de_cartas);

		for (let carta of lista_de_cartas){
			var nuevoLi = document.createElement('li');
			var imagen1 = document.createElement('img');
			var imagen2 = document.createElement('img');
			imagen1.src = carta.image;
			imagen2.src = dorso;
			imagen1.classList.add('claseoculta');
			nuevoLi.classList.add('li');
						
			function cambiarDorso(){
				imagen1.classList.toggle('claseoculta');
				imagen2.classList.toggle('claseoculta');	
			}
			imagen1.addEventListener('click', cambiarDorso);
			imagen2.addEventListener('click', cambiarDorso);

			nuevoLi.appendChild(imagen1);
			nuevoLi.appendChild(imagen2);
			UL.appendChild(nuevoLi);
		}
	})
}

botonComenzar.addEventListener('click', comenzar);