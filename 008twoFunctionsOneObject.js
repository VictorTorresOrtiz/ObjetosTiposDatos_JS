"use strict";

/*
Es posible por que si la fuction devuelve un obj() new lo devuelve y no el this
*/

let obj = {};

function A() { 
    return obj; 
}

function B() { 
    return obj; 
}

alert( new A() == new B() ); // ESTO DA TRUE