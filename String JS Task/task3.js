/*Task-3:
Check whether a string contains all the vowels a, e, i, o, u */

const str = "Education is powerful";

const vowels = ['a', 'e', 'i', 'o', 'u'];

if (vowels.every(vowels=> str.toLowerCase().includes(vowels))) {
  console.log("The string contains all the vowels: a, e, i, o, u.");
} else {
  console.log("The string does not contains all the vowels: a, e, i, o, u.");
}
