
$(document).ready(function() {

    var random = Math.floor(Math.random()*(120-19)+19);
    $("#numberToGet").text(random);
    
    var num1, num2, num3, num4 = Math.floor(Math.random()*(12-1)+1);
    
    var userTotal= 0;
    var wins = "Wins " + 0;
    var losses ="Losses " + 0;
    
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
    
    function reset() {
        random = Math.floor(Math.random()*(120-19)+19);
        console.log(random);
        $("#numberToGet").text(random);
        var num1, num2, num3, num4 = Math.floor(Math.random()*(12-1)+1);

        userTotal = 0;
        $("#score").text(userTotal);
       
    } 
    function winner() {
        alert("You Won!!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }
    function loser() {
        alert("You Lose!!");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }
    var crystalValues = [];
 
    for (i = 0; i < 4; i++) { 
        crystalValues.push( Math.floor(Math.random()*(12-1)+1));

    }

    function getCrystalHandler(crystalKey) {
       return function() {
        userTotal = userTotal + crystalValues[crystalKey];
        $("#input").text(userTotal);
        console.log("New userTotal " + userTotal);
        $("#score").text(userTotal);
    
        if (userTotal === random) {
            winner()
        }
    
        else if (userTotal > random) {
            loser()
        } 
    }
    }
    $("#image1").on("click", getCrystalHandler(0));
    $("#image2").on("click", getCrystalHandler(1));
    $("#image3").on("click", getCrystalHandler(2));
    $("#image4").on("click", getCrystalHandler(3));
});