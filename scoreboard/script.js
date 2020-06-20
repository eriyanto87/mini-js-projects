//set up variables
//team #1
var reset1 = document.getElementById("reset1");
var counter1 = document.getElementById("counter1");
var add1 = document.getElementById("add1");
var minus1 = document.getElementById("minus1");
var teamA = document.getElementById("Team1");
var teamB = document.getElementById("Team2");

//team#2
var reset2 = document.getElementById("reset2");
var counter2 = document.getElementById("counter2");
var add2 = document.getElementById("add2");
var minus2 = document.getElementById("minus2");

//functions
//team #1
function resetOne() {
    counter1.innerHTML = 0;
}

function addToOne() {
    counter1.innerHTML++;
}

function minusToOne() {
    counter1.innerHTML--;
}

//team #2
function resetTwo() {
    counter2.innerHTML = 0;
}

function addToTwo() {
    counter2.innerHTML++;
}

function minusToTwo() {
    counter2.innerHTML--;
}

var team1 = prompt("You will be Team #1. Please Enter Your Team's Name"); 
    if(team1 != null) {
        teamA.innerHTML = team1;
    }

var team2 = prompt("You will be Team #2. Please Enter Your Team's Name");
if (team2 != null) {
    teamB.innerHTML = team2;
}

//addEventListener
//team #1
reset1.addEventListener("click", resetOne);
add1.addEventListener("click", addToOne);
minus1.addEventListener("click", minusToOne);

//team #2
reset2.addEventListener("click", resetTwo);
add2.addEventListener("click", addToTwo);
minus2.addEventListener("click", minusToTwo);

