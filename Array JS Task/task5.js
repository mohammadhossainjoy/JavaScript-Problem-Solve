/*
5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log(). */

const fruits = ["apple", "mango", "orange", "lemon", "watermelon"];
const fruitsPrice = [80, 97, 79, 65, 50];

const combineArray = fruits.concat(fruitsPrice);
console.log("original fruits array: ", fruits);
console.log("original fruitsPrice array: ", fruitsPrice);
console.log("Combine array: ", combineArray);
