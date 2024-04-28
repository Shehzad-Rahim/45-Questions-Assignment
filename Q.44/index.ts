// Question no 44

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich (...items:string[]){
    console.log(`The sandwich is made by ${items.length} items, and the items are ${items.join(', ')}`);
    
};

sandwich('Green chutni', 'Tomato', 'Mayonees', 'Cheese');
sandwich('Chicken breast', 'Tomoto sauce', 'Cacumber', 'feta cheese');
sandwich('Omlette', 'Onion', 'Tomato', 'Cacumber','chilli sauce');

