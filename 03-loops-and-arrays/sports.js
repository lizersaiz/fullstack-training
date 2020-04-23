var sportsOne = ["Golf", "Cricket", "Swimming"];
console.log("Index for loop version");
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log("Simplified for loop version");
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + ", my favourite sport.");
    }
    console.log(tempSport);
}
