const sports=["tennis", "soccer", "judo", "karate"];

function displaySports(listOfSports){
    let stringOfSports = "";
    if (!listOfSports || listOfSports.length === 0) {
      return null;
    }

    listOfSports.forEach((sport)=>{
        stringOfSports += sport + "\n";
    })

    return stringOfSports;
}


/* The displaySports function should accept one parameter */
console.log(displaySports.length === 1);

/* If I call the displaySorts function with an empty array, it should return null */
console.log(displaySports([]) === null ); // Output: null 

/* If I call the displaySports function without any value, it should return null */
console.log(displaySports() === null);

/* When I call, displaySports() it returns every sport */
console.log(displaySports(sports) == "tennis\nsoccer\njudo\nkarate\n");

// Output: "tennis soccer judo karate"