// Question 30 
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
var usernames = ['Wasif', 'Rafay', 'Usman', 'Madiha', 'Iqra', 'admin'];
usernames.forEach(function (user) { return console.log("Hello ".concat(user, ", Welcome back to my website")); });
