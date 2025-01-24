/*Task-4
Count the number of properties.

Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
}; */

let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
}; 

console.log("the number of properties: ",Object.keys(student).length)