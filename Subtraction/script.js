//variable name for button
var button = document.getElementById("button");

//subtraction function
button.addEventListener("click", function() {
    //variable names for inputs
    let a = document.getElementById("1").value;
    let b = document.getElementById("2").value;

    let result = parseInt(a) - parseInt(b);

    //putting result to appear 
    let answer = document.getElementById("answer");
    answer.innerHTML = result;
});

