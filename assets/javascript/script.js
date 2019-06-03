
$(document).ready(function() {

    var random = Math.floor(Math.random()*(120-19)+19);
    $("#numberToGet").text(random);
        
    var userTotal= 0;
    var wins =  0;
    var losses = 0;
    
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            // reset();
        });
    });
    function reset() {
    // Generate random number value for target number
        random = Math.floor(Math.random()*(120-19)+19);
        // console.log(random);
        $("#numberToGet").text(random);

        userTotal = 0;
        $("#score").text(userTotal);
       } 

    function winner() {
        wins++;
        $("#numberWins").text(wins);
        document.getElementById('victory-text').classList.add('visible');
        reset();
    }
    function loser() {
        losses++;
        $("#numberLosses").text(losses);
        document.getElementById('game-over-text').classList.add('visible');
        reset();
    }
//Create array of values for crystals 
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
            console.log(winner);
        }
    
        else if (userTotal > random) {
            loser()
            console.log(loser);
        } 
    }
    }
    $("#image1").on("click", getCrystalHandler(0));
    $("#image2").on("click", getCrystalHandler(1));
    $("#image3").on("click", getCrystalHandler(2));
    $("#image4").on("click", getCrystalHandler(3));
});