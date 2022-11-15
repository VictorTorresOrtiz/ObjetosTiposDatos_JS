"use strict";

/*
Para que no distinga mayúsculas y minúsculas convertimos el string en 
minisculas
*/

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    if (lowerStr.includes('viagra') || lowerStr.includes('xxx')){ //Si contiene es igual a true
        return true;

    }
   
  }
  
  alert( checkSpam('compra ViAgRA ahora') );
  alert( checkSpam('xxxxx gratis') );
  alert( checkSpam("coneja inocente") );