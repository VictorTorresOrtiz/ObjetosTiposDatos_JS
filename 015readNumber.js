"use strict";

function readNumber() {
    let num;
  
    do {        //Pide numeros
      num = prompt("Introducir un número:", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`A leer: ${readNumber()}`);

  //