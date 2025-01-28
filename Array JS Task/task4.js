/**
4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.


 */

const subject = ['cse445', 18, true, 'cse411', 'cse482'];
let subArray = Array.isArray(subject);


if (subArray) {
    console.log("Yes this is Array.");
} else {
     console.log("This is not Array.");
}