"use strict";

/*

Longitud max == maxLength 
Acortamos el maxLength para meter los puntos
*/
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str; //metemos los puntos
  }