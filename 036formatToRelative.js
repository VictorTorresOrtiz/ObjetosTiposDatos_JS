" use strict";

//Tenemos que restar las dos fecha
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // Aqui le damos formato
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'ahora mismo';
    } else if (diffMin < 1) {
      return `hace ${diffSec} seg.`
    } else if (diffHour < 1) {
      return `hace ${diffMin} min.`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
  }