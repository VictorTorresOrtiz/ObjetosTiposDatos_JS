"use strict";

let grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];

//filtra los grupos por género obtenido aquellos que son de Heavy Metal.
let filtro = grupos.filter(genero => "Heavy Metal");
alert(filtro);

//Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
let filtrarFind = grupos.find(grupos => grupos.nombre == "Cold Play");

//¿En qué posición del array se encuenta “Cold Play”?
let buscar = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];

busqueda = nombre == "Cold Play";

let buscarGrupo = buscar.indexOf(busqueda)
alert(buscarGrupo);
