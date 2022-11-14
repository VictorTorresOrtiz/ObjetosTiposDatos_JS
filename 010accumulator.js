"use strict";
function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('Dale caña que es gratis agregar acumuladores', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read(); // agrega el valor introducido por el usuario
  accumulator.read(); // agrega el valor introducido por el usuario
  alert(accumulator.value); // muestra la suma de estos valores