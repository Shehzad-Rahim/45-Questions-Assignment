// Question no 24

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:


//Tests for equality and inequality with strings

console.log("String equality comparison");

console.log("Shehzad" == "Shehzad"); // True
console.log("Shehzad" != "Shehzad"); //False



//Tests using the lower case function

console.log("Lowercase Uppercase Function");
console.log("LENOVO".toLowerCase() == "lenovo"); //True
console.log("lenovo".toUpperCase() == "lenovo");// False


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log("Numerical Test");
console.log(6 > 3); //True
console.log(10 < 9);// False


// Tests using "and" and "or" operators

console.log(" Test with 'And' and 'Or' Operators");
let age = 22;
console.log(age >= 18 && age <= 25); 
console.log(age >= 10  || age <= 20); 

// Test whether an item is in a array

let freinds = ["Wasif","Usman","Iqra"];

console.log("Is Iqra in my friendlist ?");

console.log(freinds.includes("Iqra")); // True

// Test whether an item is not in a array

console.log("Is Alishba not in my friendlist");
console.log(!freinds.includes("Alishba")); // True