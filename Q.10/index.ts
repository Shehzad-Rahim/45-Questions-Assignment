// Question no.10

//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.



function myName(name:string): string {
    return name.toUpperCase()
};

console.log(myName('shehzad rahim'))

// First Comment 
// This is my name function that is taking a string parameter and converting the lowercase to upper case and returning the string value.

let my_name:string = 'SHEHZAD RAHIM'

let message:string = `${my_name} is converted to lowercase '${my_name.toLowerCase()}'  `

console.log(message);

// Second comment 
// I have stored uppercase letter of my name in my_name varibale and then converted my name to lowercase in message variable and printed the message in console