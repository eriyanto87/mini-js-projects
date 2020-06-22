//set up variable
var div = document.getElementById("div");

//create a div to put the time in via js
var time = document.createElement("div");
time.setAttribute("class", "rounded border border-info text-muted display-2 font-weight-normal bg-light p-5");
div.appendChild(time);

//get time
var startingTime = prompt("Please Enter Exact Minutes To Count Down From");
if (startingTime != null) {
    time.innerHTML = startingTime;
}
let totalTimeInSeconds = startingTime * 60;

 //countdown function
setInterval(countdown, 1000);

function countdown() {
    var minutes = Math.floor(totalTimeInSeconds/60);
    var seconds = totalTimeInSeconds % 60;
    time.innerHTML = `${minutes} : ${seconds}`;
    //console.log(minutes)
    //console.log(seconds);
    if (totalTimeInSeconds <= 0) { 
        clearInterval(countdown);
        time.innerHTML = "Time Is Up!"
    }
    else if (seconds < 10) { 
        time.innerHTML = `${minutes} : 0${seconds}`;
    }
    else if (minutes < 10) {
        time.innerHTML = `0${minutes} : ${seconds}`
    }
    else if (minutes < 10 && seconds < 10) {
        time.innerHTML = `0${minutes} : 0${seconds}`
    }

    totalTimeInSeconds--;
}

function reset() {
    location.reload();
}

/*function stopFunction() {
    if (totalTimeInSeconds <= 0) {
        clearInterval(countdown);
        time.innerHTML = "Time Is Up!"
    }
}*/