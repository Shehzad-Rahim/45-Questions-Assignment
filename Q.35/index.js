// Question no 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
var favorite_animals = ["Angora Rabbit", "African Grey Parrot", "Samoyed Dog"];
for (var i = 0; i < favorite_animals.length; i++) {
    console.log("I Would like to pet some '".concat(favorite_animals[i], " breeds'"));
}
console.log("".concat(favorite_animals[1], " is a great pet to have "));
