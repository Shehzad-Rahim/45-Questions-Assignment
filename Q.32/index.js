// Queston no 32
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_user = ['Wasif', 'Rafay', 'Usman', 'Madiha', 'Iqra', 'Alishba', 'Ayesha'];
var new_user = ['Iqra', 'Ahmed', 'Ayesha', 'Muneeb', 'Bilal'];
new_user.forEach(function (newUser) {
    if (current_user.some(function (currentUSer) { return currentUSer.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " Please enter a new username"));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
