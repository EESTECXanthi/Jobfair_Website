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

<div class="div_apply_card">

  <div class="div_apply_card_text" id="home">
    JobFair 2023
  </div>

  <button class="button_apply_now">
    <a href="https://forms.gle/xBvhnyH9dKRf7Ubx6" target="_blank">
      Apply now
    </a>
  </button>

</div>


<div class="div_splide_container">
  <Splide {options} on:autoplayPlaying={slider}>
    <SplideSlide><img src={photo001} alt="JobFair 2022" /></SplideSlide>
    <SplideSlide><img src={photo002} alt="Stand" /></SplideSlide>
    <SplideSlide><img src={photo003} alt="Photobooth" /></SplideSlide>
    <SplideSlide><img src={photo004} alt="Crowd" /></SplideSlide>
    <SplideSlide><img src={photo005} alt="Presentation" /></SplideSlide>
    <SplideSlide><img src={photo006} alt="Organizing Committee 2022" /></SplideSlide>
  </Splide>
</div>

<style>
  a{
    color: white;
    transition: 0.2s;
  }

  .button_apply_now:hover a{
    color: #76202e;
    transition: 0.2s;
  }

  img {
    width: 80vw;
    height: 70vh;
    object-fit: cover;
    border-radius: 30px;
  }

  .div_splide_container{
    width: 80vw;
    height: 88vh;
    padding: 5vh 0px 0px 0px;
    margin-left: auto;
    margin-right:auto;
  }

  .div_apply_card {
    display: flex;
    justify-content: space-around;
    background-color: #76202e;
    border-radius: 40px;
    border-color: white;
    padding: 1.5vw 1vw;
    border-style: solid;
    margin: 0px auto;
    position: absolute;
    top: 78vh;
    left: 0;
    right: 0;
    z-index: 99;
    box-shadow: 15px 15px 5px 3px rgba(54, 14, 14, 0.2);
    width: 45vw;
  }

  .div_apply_card_text {
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 2.5vw;
    max-height: 200px;
    color: white;
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
    margin: auto 0px auto 2vw;
  }

  .button_apply_now {
    font-weight: bold;
    border-radius: 100px;
    border-style: solid;
    border-width: 0.3vw;
    font-size: 1.5vw;
    color: white;
    background-color: #76202e;
    border-color: white;
    padding: 1vw 2vw;
    cursor: pointer;
    margin: 0.2vh 2vw 0.2vh 0px;
    transition: 0.2s;
  }

  .button_apply_now:hover {
    color: #76202e;
    background-color: white;
    box-shadow: 0px 0px 8px white;
    transition: 0.2s;
  }
</style>
