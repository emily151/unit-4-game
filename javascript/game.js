$(document).ready(function() {
  var Random = Math.floor(Math.random() * 101 + 19);

  $("#numbermatch").text(Random);

  var crys1 = Math.floor(Math.random() * 11 + 1);
  var crys2 = Math.floor(Math.random() * 11 + 1);
  var crys3 = Math.floor(Math.random() * 11 + 1);
  var crys4 = Math.floor(Math.random() * 11 + 1);

  var userTotal = 0;
  var wins = 0;
  var losses = 0;

  $("#numWins").text(wins);
  $("#numberLosses").text(losses);
  //resets the game
  function reset() {
    Random = Math.floor(Math.random() * 101 + 19);
    console.log(Random);
    $("#numbermatch").text(Random);
    crys1 = Math.floor(Math.random() * 11 + 1);
    crys2 = Math.floor(Math.random() * 11 + 1);
    crys3 = Math.floor(Math.random() * 11 + 1);
    crys4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $("#finalScore").text(userTotal);
  }
  function winna() {
    alert("Winner!");
    wins++;
    $("#numWins").text(wins);
    reset();
  }
  function loser() {
    alert("LO0O0O0SER!");
    losses++;
    $("#numberLosses").text(losses);
    reset();
  }
  $("#gemOne").on("click", function() {
    userTotal = userTotal + crys1;

    $("#finalScore").text(userTotal);
    if (userTotal == Random) {
      winna();
    } else if (userTotal > Random) {
      loser();
    }
  });
  $("#gemTwo").on("click", function() {
    userTotal = userTotal + crys2;
    $("#finalScore").text(userTotal);
    if (userTotal == Random) {
      winna();
    } else if (userTotal > Random) {
      loser();
    }
  });
  $("#gemThree").on("click", function() {
    userTotal = userTotal + crys3;
    $("#finalScore").text(userTotal);
    //sets win/lose conditions
    if (userTotal == Random) {
      winna();
    } else if (userTotal > Random) {
      loser();
    }
  });
  $("#gemFour").on("click", function() {
    userTotal = userTotal + crys4;
    $("#finalScore").text(userTotal);
    if (userTotal == Random) {
      winna();
    } else if (userTotal > Random) {
      loser();
    }
  });
});
