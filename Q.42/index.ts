// Question no 42

// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians:string[] = ["Samar", "Imran", "Alex"];

function show_magicians(magicians:string[]){
    magicians.forEach(magician => console.log(magician));
};

show_magicians(magicians);

console.log('The modified list of magician 👇');


for(let i = 0; i < magicians.length; i++) {
    magicians[i] = `The Great ${magicians[i]}`;
}

show_magicians(magicians);