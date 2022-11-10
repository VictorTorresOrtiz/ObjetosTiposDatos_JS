"use strict"

function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  let user = makeUser();
  alert( user.ref.name ); 

  //Aparte de no mosntrar nada sale un error "Uncaught TypeError: Cannot read properties of undefined (reading 'name')"