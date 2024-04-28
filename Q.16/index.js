// Question no 16 
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
var inviteFriends = ['Iqra', 'Wasif', 'Raffay'];
inviteFriends.unshift("Usman");
inviteFriends.splice(2, 0, "Ayesha");
inviteFriends.push("Madhia");
inviteFriends.forEach(function (friend) { return console.log("Hello ".concat(friend, ", I want to invite you on my dinner party tonight")); });
