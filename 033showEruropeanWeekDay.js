"use strict"

function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { 
      day = 7;
    }
    //  Sunday == a 7
  
    return day;
  }