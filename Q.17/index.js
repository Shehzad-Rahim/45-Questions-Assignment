// Question 17 
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Shrinking Guest List
// @ts-ignore
var inviteFriends = ['Iqra', 'Wasif', 'Raffay'];
inviteFriends.unshift("Usman");
inviteFriends.splice(2, 0, "Ayesha");
inviteFriends.push("Madhia");
console.log('Sorry Friends I can just afford two people on dinner party');
while (inviteFriends.length > 2) {
    console.log("I am Sorry ".concat(inviteFriends.pop(), " I cant have you on dinner party"));
}
inviteFriends.forEach(function (friends) { return console.log("".concat(friends, " you can still come to my dinner party")); });
inviteFriends.splice(0, inviteFriends.length);
console.log(inviteFriends);
