/*Task-3
Write a function called make_avg() which will take an array of integers and the size
 of that array and return the average of those values. */

let sum = 0;
function make_avg(num) {
  if (num.length === 0) return 0;
    for (let i = 0; i < num.length; i++){
        sum = sum + num[i];
    }
  return sum / num.length;
}
const num = [30, 50, 34, 70, 20];
console.log(make_avg(num));
