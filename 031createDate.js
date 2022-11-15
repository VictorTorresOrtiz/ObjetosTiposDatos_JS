"use strict";

//(año, mes, día, hora, minuto, segundo, milisegundo)
let fecha = new Date(2012, 1, 20, 3, 12);
alert( fecha );

//Gracias a los frikis de stackOverflow he investigado y hay otra forma de realizarlo
//Una fecha con un DataString
let fechaFriki = new Date("2012-02-20T03:12");
alert( fechaFriki );