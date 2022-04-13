"use strict";

// HOMEWORK #14

let num = +prompt("Введите число");

if (isNaN(num)) {
  alert("Вы ввели не число");

} else if (num === 1) {
  console.log(false);

} else if (num > 0) {
  for (let simple = 2; simple < num; simple++) {
    if (num % simple === 0) {
      console.log(false);
      break;
    } else {
      console.log(true);
    }
  }

} else {
  alert("Жаль, что Вы не ввели число");
}
