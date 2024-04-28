// Question no 34

//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.



let favoritePizza:string[] = ['BBQ chicken Pizza', 'pepperoni pizza', 'spicy beef pizza'];

for(let i = 0; i < favoritePizza.length; i++){
    console.log(`I Really enjoye to eat ${favoritePizza[i]}`);
}

console.log(`My most favorite Pizza among the list is ${favoritePizza[2]} i love to eat ${favoritePizza[2]}`)
