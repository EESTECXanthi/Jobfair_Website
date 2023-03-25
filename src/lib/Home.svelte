<script>
/*var displayedPhoto= document.getElementById("photo");
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

setInterval(change,5000);*/
</script>

<div class="div_top_section_heading" id="home">Jobfair 2023 | Find Your Path</div>

    <div class="div_button_container">

      <button class="button_apply_now">Apply now</button>

    </div>

    <div class="div_frontpage_left">

      <img
      class="img_jobfair_logo"
      src="src/assets/img/jflogored.png"
      alt="Jobfair Logo">

    </div>

    <div class="div_frontpage_right">

      <img
      class="img_frontpage_photo"
      id="photo"
      src="src/assets/img/photo001.png"
      alt="Event">

    </div>

<style>    
.div_top_section_heading{
  justify-content: center;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 50px;
  padding: 200px 0px 50px 0px;
}

.div_button_container{
  justify-content: center;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}

.button_apply_now{
  font-weight: bold;
  border-radius: 100px;
  border-style: solid;
  border-width: 5px;
  font-size: 25px;
  color: #76202e;
  border-color: #76202e;
  padding: 15px;
  cursor: pointer;
}

.button_apply_now:hover{
  color: white;
  background-color: #76202e;
  transition: 0.1s;
}

.div_frontpage_left {
  float: left;
  width: 50%;
  padding: 50px 50px 100px 150px;
  display: flex;
  justify-content: center;
}

.div_frontpage_right {
  float: right;
  width: 50%;
  padding: 50px 150px 100px 50px;
  display: flex;
  justify-content: center;
}

.img_jobfair_logo{
  height: 500px;
  padding: 0px;
}

.img_frontpage_photo{
  height: 500px;
  padding: 0px;
  border-radius: 10px;
}
</style>