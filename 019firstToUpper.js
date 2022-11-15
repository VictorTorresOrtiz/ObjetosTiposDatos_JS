"use strict";

/*
Hacemos un string como el creado pero con 
la primera letra en mayúsculas
*/
let newStr = str[0].toUpperCase() + str.slice(1);

/*
Pero tenemos un problemita por aqui y es que
si el STR esta vacio es == a undefined y como
undefined no tiene metodo uppercase nos aparecera un error

¿Como lo solcionamos?
Agrgando un string vacio
*/

function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("john") ); // RESULTADO = "John"