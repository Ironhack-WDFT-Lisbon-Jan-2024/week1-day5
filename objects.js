/* JS OBJECTS */

// An Object is a collection of properties. 
let church = {
    pray: true, 
    height: 30, 
    name: "My Church", 
    people: ["John", "Paul", "Sophie"], 
    materials: {
        wood: true, 
        steel: false
    }
};

// console.log(church.height);

// Re-Write a Property of an Object

 church.people = ["John, Paul"];
// OR: church.people.pop();

// Delete a Property 
delete church.materials; 

// console.log(church);

/* MINI-SPOTIFY EXERCISE */
const song1 = {
    name: "Let it Be", 
    artist: "The Beatles", 
    length: 4.03, 
    composers: ["John Lennon", "Paul McCartney"]
}

const song2 = {
    name: "Dragostea Din Tei", 
    artist: "O-Zone", 
    length: 3.34, 
    genre: ["Eurodance", "Pop"]
}

const profile = {
    name: "Bernardo", 
    mail: "bernardo@ironhack.com", 
    favouriteSongs: []
}

/* 1 - Add a property called 'genre' to song1 object. This should be an array that holds the values "Rock" and "Pop" */
 song1.genre= ['Rock', 'Pop'];
 console.log(song1);
/* 2 - Add song1 and song2 to profile's favouriteSongs */
 profile.favouriteSongs.push(song1, song2);
 console.log(profile);