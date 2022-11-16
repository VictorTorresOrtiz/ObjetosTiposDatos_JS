"use strict";


let frutas = ["Banana", "Manzana", "Fresa"];

//Cereza al principio del Array
fruits[3] = "Cereza";


alert("Añadir al 1: " + frutas);

//Melocoton ult posición
frutas.push("Melocotón");
alert("Añadir ult posición: " + frutas);

//Mostrar el array elemento a elemento con for clásico
for(let i = 0; i < frutas.length; i++){
    alert(frutas[i]);
}


frutas.shift();
alert("Eliminar Primer Elemento: " + frutas);


frutas.pop();
alert("Eliminar último elemento: " + frutas);

//Mostrar elementos
for(let fruits of frutas){
    alert(fruits);
}
