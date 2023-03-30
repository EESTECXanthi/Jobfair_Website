<script lang="ts">
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  import photo001 from "../assets/img/photos/photo001.png";
  import photo002 from "../assets/img/photos/photo002.png";
  import photo003 from "../assets/img/photos/photo003.png";
  import photo004 from "../assets/img/photos/photo004.png";
  import photo005 from "../assets/img/photos/photo005.png";
  import photo006 from "../assets/img/photos/photo006.png";

  const options = {
    rewind: true,
    gap: "1rem",
    autoplay: true,
    arrows: true,
    height: "90vh",
  };

  const slider = (e) => {
    var rate = e.detail.rate;
  };
</script>

<div class="div_card">

  <div class="div_card_text" id="home">
    JobFair 2023 | Find Your Path
  </div>

  <div class="div_card_button">
    <button class="button_apply_now">Apply now</button>
  </div>

</div>


<div class="div_splide_container">
  <Splide {options} class="test" on:autoplayPlaying={slider}>
    <SplideSlide><img src={photo001} alt="1" /></SplideSlide>
    <SplideSlide><img src={photo002} alt="2" /></SplideSlide>
    <SplideSlide><img src={photo003} alt="3" /></SplideSlide>
    <SplideSlide><img src={photo004} alt="4" /></SplideSlide>
    <SplideSlide><img src={photo005} alt="5" /></SplideSlide>
    <SplideSlide><img src={photo006} alt="6" /></SplideSlide>
  </Splide>
</div>

<style>
  .div_splide_container{
    width: 80vw;
    padding: 5vh 0px 0px 0px;
    margin-left: auto;
    margin-right:auto;
  }

  .div_card {
    display: flex;
    justify-content: space-around;
    background-color: #76202e;
    border-radius: 30px;
    border-color: white;
    padding: 2vw;
    border-style: solid;
    margin: 0px 20vw 0px 20vw;
    position: absolute;
    top: 85vh;
    left: 0;
    right: 0;
    z-index: 99;
    box-shadow: 15px 15px 5px 3px rgba(54, 14, 14, 0.2);
  }

  .div_card_text {
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size:50px;
    color: white;
    margin-top: auto;
    margin-bottom: auto;
  }

  .div_card_button {
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }

  .button_apply_now {
    font-weight: bold;
    border-radius: 100px;
    border-style: solid;
    border-width: 5px;
    font-size: 30px;
    color: white;
    background-color: #76202e;
    border-color: white;
    padding: 15px 30px 15px 30px;
    cursor: pointer;
  }

  .button_apply_now:hover {
    color: #76202e;
    background-color: white;
    transition: 0.1s;
    box-shadow: 0px 0px 8px white;
  }

  img {
    width: 80vw;
    max-height: 87vh;
    min-height: 88vh;
    object-fit: cover;
    border-radius: 30px;
  }

</style>
