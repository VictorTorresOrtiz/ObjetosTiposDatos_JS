'use strict'

let salaries = {
    Harry: 100,
  Ron: 160,
  Hermione: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum); 
  

