"use strict";

alert( extractCurrencyValue('$120') === 120 ); // true
//Extraemos del extractCurrencyValue el valor numérico sin el dolar
function extractCurrencyValue(str) {
    return +str.slice(1);
  }