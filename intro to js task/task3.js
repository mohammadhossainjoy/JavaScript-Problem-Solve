const prompt = require("prompt-sync")();
let givenNumber = parseInt(prompt("Enter a Number:"));

let reminder = givenNumber % 5;

console.log(reminder);
