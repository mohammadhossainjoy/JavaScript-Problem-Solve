/*2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output */

const tourist_dest = ["CoxsBazar", "bandarban", "Saintmartin"];
tourist_dest.push("Dhaka");
console.log(tourist_dest);
tourist_dest.push("ChittagongHill", "PadmaRiver");
console.log(tourist_dest);
tourist_dest.pop();
console.log("Final Array: ", tourist_dest);
