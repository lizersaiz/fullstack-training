let sportsOne: string[] = ["Golf", "Cricket", "Swimming"];

console.log("Index for loop version")
for (let i=0; i < sportsOne.length; i++){
    console.log(sportsOne[i]);
}

console.log("Simplified for loop version")
for (let tempSport of sportsOne){
    if (tempSport == "Cricket"){
        console.log(tempSport + ", my favourite sport.");
    }
    else{
        console.log(tempSport);
    }
}