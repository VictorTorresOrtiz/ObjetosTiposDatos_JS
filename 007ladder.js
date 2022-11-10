"use strict";

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() { //Esto muestra el floor atual 
      alert( this.step );
      return this;
    }
  };

  ladder
  .up() //++
  .up() //++
  .down() //--
  .showStep() // AQUI SERA 1
  .down() // --
  .showStep(); // 0