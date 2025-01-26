/*3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not. */

const book = ['python is more easy', 'javascript book is more interesting book', 'Design analysis of algorithm']
let containJavascript = book.includes(
  "javascript book is more interesting book"
);

if (containJavascript) {
    console.log('Yes Javascript book is present in array')
} else {
    console.log('Javascript book is not present in array')
}
