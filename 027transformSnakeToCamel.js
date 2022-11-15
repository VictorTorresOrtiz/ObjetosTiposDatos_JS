"use strict";

function camelize(str) {
    return str
    // list-style-image lo separa en el array ['list','style,'image']
      .split('-') 
      .map(
        // convierte en mayúscula todas las primeras letras excepto las del primer array
        // Es decir ['list', 'Style', 'Image']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); 
      //['list', 'Style', 'Image'] == 'listStyleImage'
  }