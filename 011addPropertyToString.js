"use strict";

let str = "Peter";
str.test = 5;
alert(str.test);


/*
Si usas el "use strict" el resultado varia:

undefined (No strict mode)
Error. (strict mode)

¿Por qué?
Por que los tipos primitivos no son objetos

*/