/*
Task - 1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.
Sample Input:
1000
700

Sample Output:
300
*/

const prompt = require("prompt-sync")();

let total_Fruits_money = parseInt(
  prompt("Combined Price of 1 kg apple & 1 kg orange: ")
);
let wallet = parseInt(prompt("Please Enter the amount of money you have: "));

let money = wallet - total_Fruits_money;

console.log("Return: " + money);
