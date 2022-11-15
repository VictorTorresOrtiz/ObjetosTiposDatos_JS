"use strict";

/*
Multiplicamos el random por max-min pasando el intervalo de 0 1 a 0 max-min

Se suma el min y ese intervalo se convierte desde min a max
*/

function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );