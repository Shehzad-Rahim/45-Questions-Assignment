// Question no 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var inviteFriends = ['Iqra', 'Wasif', 'Raffay'];
inviteFriends.unshift("Usman");
inviteFriends.splice(2, 0, "Ayesha");
inviteFriends.push("Madhia");
inviteFriends.forEach(function (friend) { return console.log("Hello ".concat(friend, ", I want to invite you on my dinner party tonight")); });
console.log("I am inviting", inviteFriends.length, " Friends to the dinner");
