/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let num = 81;
let sum = 0;
while (num <= 131) {
  if (num % 2 == !0) {
    sum = sum + num;
  }
  num++;
}
console.log("Sum of Odd numbers: ", sum);
/*

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */
let number = 206;
let suM = 0;
while (number <= 311) {
  if (number % 2 == !0) {
    suM = suM + number;
  }
  number++;
}
console.log("Sum of Even numbers: ", suM);
