'use strict';

function isEmpty(obj) {
    for (let key in obj) {  // Si funciona el bucle es que al menos hay una propiedad
      return false;
    }
    return true;
  }