"use strict";

function getWeekDay(date) {
    let days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2012, 0, 3); // 3 Jan 2014
  alert( getWeekDay(date) );