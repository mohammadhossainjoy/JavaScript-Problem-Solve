/*
Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04
*/

const prompt = require("prompt-sync")();
let mathematics = parseInt(prompt("Mathematics Number:"));
let biology = parseInt(prompt("biologhy Number:"));
let Chemistry = parseInt(prompt("Chemistry Number:"));
let Physics = parseInt(prompt("Physics Number:"));
let bangla = parseInt(prompt("Bangla Number:"));

let averageMark = (mathematics + biology + Chemistry + Physics + bangla) / 5;

console.log(averageMark);
