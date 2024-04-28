// Question no 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var inviteFriends = ['Iqra', 'Wasif', 'Raffay'];
var absent = inviteFriends.pop();
console.log("".concat(absent, " can't make it to dinner"));
inviteFriends.push('Alishba');
inviteFriends.forEach(function (friend) { return console.log("Hello ".concat(friend, ", I want to invite you on my dinner party tonight")); });
