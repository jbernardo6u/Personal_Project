
// Creating the random function from 1 to 6;

var randomNumber1 = Math.round(Math.random()*5 +1);
var randName1 = "dice" + randomNumber1 +".png"; // dice1.png - dice6.png
document.getElementsByClassName("img1")[0].setAttribute("src","images/" + randName1);  // Change randomly the image name

var randomNumber2 = Math.round(Math.random()*5 +1);
var randName2 = "dice" + randomNumber2 +".png";
document.getElementsByClassName("img2")[0].setAttribute("src","images/" + randName2);

if (randomNumber1 > randomNumber2) {
  document.getElementById("results").innerHTML = "Player 1 Wins !";

//   var image = document.querySelectorAll("div")[0].createElement('img');
//
// // 👇️ Local image
// // image.setAttribute('src', 'my-img.png');
//
// // 👇️ Remote image
// image.setAttribute(
//   'src',
//   'images/redFlag.jpg',
// );
//
// image.setAttribute('alt', 'redflag');
//
// image.setAttribute("height", 50); // 👈️ height in px
// image.setAttribute('width', 50); // 👈️ width in px


} else if (randomNumber1 < randomNumber2) {
//   var image = document.querySelectorAll("div")[0].createElement('img');
//
// // 👇️ Local image
// // image.setAttribute('src', 'my-img.png');
//
// // 👇️ Remote image
// image.setAttribute(
//   'src',
//   'images/redFlag.jpg',
// );
//
// image.setAttribute('alt', 'redflag');
//
// image.setAttribute('height', 50); // 👈️ height in px
// image.setAttribute('width', 50); // 👈️ width in px

  document.getElementById("results").innerHTML = "Player 2 Wins !";
} else if(randomNumber1 == randomNumber2) {
  document.getElementById("results").innerHTML = "Draw !";
}
