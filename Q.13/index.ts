// Question 13

// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favoriteTransportation: string[] = ['Honda 125', 'Honda civic', 'Audi R9','Bugati '];

favoriteTransportation.map((item: string) => (
    console.log('I would like to own a' + " "+ item )
))