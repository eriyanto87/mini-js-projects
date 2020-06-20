//setting up variable name
var submit = document.getElementById("submit");

//Addition function on click
submit.addEventListener("click", function() {
var x = document.getElementById("one").value;
var y = document.getElementById("two").value;
var answer = parseInt(x) + parseInt(y);
var result = document.getElementById("result");
result.innerHTML = answer;
});

