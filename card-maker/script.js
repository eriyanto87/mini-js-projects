let image = document.getElementById("image")
let text = document.getElementById("text")
let card = document.getElementById(`card`)
let birthdayButton = document.getElementById(`birthdayButton`)
let yellowBackgroundButton = document.getElementById(`yellowBackgroundButton`)
let blueTextButton = document.getElementById(`blueTextButton`)
let size40Button = document.getElementById(`size40Button`)
let fontStyleButton = document.getElementById("fontStyleButton")
let balloon = document.getElementById("balloon");

var birthdayTextFunction = function() {
  text.innerHTML = "Happy Birthday"
 };

birthdayButton.onclick = function(){
  birthdayTextFunction()
};

yellowBackgroundButton.onclick = function() {
  card.style.background = "#ba79fc";
};

blueTextButton.onclick = function() {
  text.style.color = "orange";
};

size40Button.onclick =  function() {
  text.style.fontSize = 40 + "px";
};

fontStyleButton.onclick = function() {
  text.style.fontFamily =  "'Pangolin', cursive"
};

balloon.onclick = function() {
  text.style.marginTop="0px"
  image.innerHTML = "<img src='http://images.clipartpanda.com/balloon-clipart-pictures-balloon-clipart-transparent.png' width='250' height='250'>";
  
}
