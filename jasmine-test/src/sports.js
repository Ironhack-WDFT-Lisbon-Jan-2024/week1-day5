function displaySports(sports){
    let sportsList = "";
    if (!sports || sports.length === 0) {
      return null;
    }
    sports.forEach((sport)=>{
        sportsList += sport + "\n";
    })

    return sportsList;
}