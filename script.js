function hover(element) {
  element.setAttribute('src', 'assets/img/combined_logo_glow.png');
  dur="5s"
}

function unhover(element) {
  element.setAttribute('src', 'assets/img/combined_logo.png');
}

var displayedPhoto= document.getElementById("photo");
var photoIndex=0;
var images=[
	"assets/img/photo001.png",
	"assets/img/photo002.png",
	"assets/img/photo003.png",
  "assets/img/photo004.png",
  "assets/img/photo005.png",
  "assets/img/photo006.png"
];

function change(){
  if(photoIndex==5){
    photoIndex = 0;
  }else{
    photoIndex = photoIndex +1;
  }
  displayedPhoto.src= images[photoIndex];
}

setInterval(change,5000);