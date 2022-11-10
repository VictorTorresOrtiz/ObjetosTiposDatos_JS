"Use strict";

// Antes de la llamada
let menu = {
  width: 200,
  height: 300,
  title: "Mi menú",
};

multiplyNumeric(menu);

// Después de la llamada
menu = {
  width: 400,
  height: 600,
  title: "Mi menú",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      //Typeof para comprobar si hay un numero ahí
      obj[key] *= 2;
    }
  }
}
