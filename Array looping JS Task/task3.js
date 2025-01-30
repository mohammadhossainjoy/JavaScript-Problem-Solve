/*Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:'TomTimTinTik' */
var numbers = ["Tom", "Tim", "Tin", "Tik"];
var res=''
for (const num of numbers) {
    res = res + num;
    
}
console.log("Output: ", res);