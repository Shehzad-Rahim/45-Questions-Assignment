// Question 41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ["Samar", "Imran", "Alex"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
;
show_magicians(magicians);
