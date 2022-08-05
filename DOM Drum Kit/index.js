

//Detecting Button Press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){  // Annonimous Function
    this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;  // Creating a variable taking each butthon names : w, a , s , d , j, k, l
    buttonAnimation(buttonInnerHTML);
    makeSound(buttonInnerHTML);
  });
}

// detecting Keyboard press
document.addEventListener("keypress", function(event){
  // console.log (event.key);   Show name of the pressed key
  //console.log(this);
  // this.style.color = "yellow";
  var keycode = event.key;  // Creating a variable taking each butthon names : w, a , s , d , j, k, l
  buttonAnimation(keycode);
  makeSound(keycode);


})


// Creating the makeSound Function
function makeSound(key) {
  switch (key) {
    case "w" :
        var tom1 = new Audio('sounds/tom-1.mp3');   // Play sounds
        tom1.play();
      break;
    case "a" :
        var tom2 = new Audio('sounds/tom-2.mp3');   // Play sounds
        tom2.play();
      break;
    case "s" :
        var tom3 = new Audio('sounds/tom-3.mp3');   // Play sounds
        tom3.play();
      break;
   case "d" :
          var tom4 = new Audio('sounds/tom-4.mp3');   // Play sounds
          tom4.play();
      break;

  case "j" :
          var crash = new Audio('sounds/crash.mp3');   // Play sounds
          crash.play();
      break;
  case "k" :
          var kickbass = new Audio('sounds/kick-bass.mp3');   // Play sounds
          kickbass.play();
      break;
  case "l" :
          var snare = new Audio('sounds/snare.mp3');   // Play sounds
          snare.play();
      break;

    default: console.log(key);

  }

}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout (function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
