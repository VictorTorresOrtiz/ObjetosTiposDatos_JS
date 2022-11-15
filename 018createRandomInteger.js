"use strict";


/*GRACIAS STACK OVERFLOW */

//Geneamos valores entre 0.5 a 3.5, sumando las probabilidades
function randomInteger(min, max) {
    // aquí rand es desde min a (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  alert( randomInteger(1, 3) );

  /*RESULTADOS 
2valores desde 1  ... hasta 1.9999999999 = 1
valores desde 2  ... hasta 2.9999999999 = 2
valores desde 3  ... hasta 3.9999999999 = 3
  
 */