// Question 40

/* Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.*/

function make_album(artist:string, albumTitle:string, track?:number) {
    let album = {artist, albumTitle}
    if (track) {
        album['track'] = track
    }
    return album

};

console.log(make_album("Atif Aslam", "Jalpari"));
console.log(make_album("Ali Zafar", "Jhoom"));
console.log(make_album("Arijit singh", "Kabir singh", 6));

