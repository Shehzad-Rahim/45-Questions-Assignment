// Question 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
var userName = [];
if (userName.length == 0) {
    console.log('We need to find some new user');
}
else {
    console.log("Hello ".concat(userName, ", You are welcome to our website!"));
}
