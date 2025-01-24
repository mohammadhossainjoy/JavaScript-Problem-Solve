/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let suM = 0;
let number = 1;

while (true) {
  suM = sum + number;
  if (suM >= 100) {
    break;
  }
  number++;
}

console.log("Sum: ", suM);
