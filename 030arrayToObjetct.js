"use strict";

//Creamos el array
let personajes = [
    {id: 'john', name: "John Nieves", movie: "El costalero Perdido"},
    {id: 'pedri', name: "Pedro el loco", movie: "Pedro y el pollo de 20 gramos"},
    {id: 'mari', name: "Maria la Jilguera", movie: "La pureta del Chester"},
  ];
  
  let personajesById = groupById(personajes);

  //Ordenamos 
  function groupById(personajes) {
    return personajes.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }
