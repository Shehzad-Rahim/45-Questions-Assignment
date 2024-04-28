// Question no 35

// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

let favorite_animals: string[] = ["Angora Rabbit", "African Grey Parrot", "Samoyed Dog"]

for (let i = 0; i < favorite_animals.length; i++) {
    console.log(`I Would like to pet some '${favorite_animals[i]} breeds'`);
}

console.log(`${favorite_animals[1]} is a great pet to have `);
