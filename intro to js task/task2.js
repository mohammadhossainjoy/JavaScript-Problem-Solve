const prompt = require("prompt-sync")();
let mathematics = parseInt(prompt("Mathematics Number:"));
let biology = parseInt(prompt("biologhy Number:"));
let Chemistry = parseInt(prompt("Chemistry Number:"));
let Physics = parseInt(prompt("Physics Number:"));
let bangla = parseInt(prompt("Bangla Number:"));

let averageMark = (mathematics + biology + Chemistry + Physics + bangla) / 5;

console.log(averageMark);
