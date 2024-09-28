var dark = false;
var white = document.querySelector(".white");
var body = document.querySelector("body");
white.addEventListener("click", function () {
  body.classList.toggle("whiteMode");
  if (dark == false) {
    white.innerHTML = "Dark Mode"
    dark = true
  } 
else{
    white.innerHTML = "Light Mode"
    dark = false
  } 
 
});


white.addEventListener("click" ,function(){
  var img = document.querySelector(".image");
  img.src = "img/logo2-removebg-preview.png";
  
})