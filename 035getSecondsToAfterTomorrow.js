"use strict";
//Restamos la fecha actual a la fecha de mañana que seria la 00:00:00

function getSecondsToTomorrow() {
    let now = new Date();
  
    // Esto es mañana
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diferencia = tomorrow - now; 
    return Math.round(diferencia / 1000); // conversión 
  }