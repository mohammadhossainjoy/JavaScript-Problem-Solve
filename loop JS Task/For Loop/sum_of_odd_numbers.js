/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let sum = 0;
for (let num = 81; num <= 131; num++) {
  if (num % 2 == !0) {
    sum = sum + num;
  }
}
console.log("Sum of Odd numbers: ", sum);
/*

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let suM = 0;
for (let number = 206; number <= 311; number++) {
  if (number % 2 == !0) {
    suM = suM + number;
  }
}
console.log("Sum of Even numbers: ", suM);
