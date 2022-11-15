"use strict";
//Para redondear a 6.35
//Llevamos más cerca de un entero antes de redondear
alert( (6.35 * 10).toFixed(20) ); // 63.500000................

//Ya podemos redondear
alert( Math.round(6.35 * 10) / 10 ); 
// 6.35 -> 63.5 
//-> 64(round) -> 6.4

