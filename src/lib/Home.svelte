<script lang="ts">
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  import ProgressBar from "./ProgressBar.svelte";
  import image1 from "../assets/img/photo001.png";
  import image2 from "../assets/img/photo002.png";
  import image3 from "../assets/img/photo003.png";
  import image4 from "../assets/img/photo004.png";
  import image5 from "../assets/img/photo005.png";
  import image6 from "../assets/img/photo006.png";

  const options = {
    rewind: true,
    gap: "1rem",
    autoplay: true,
    arrows: true,
    // pauseOnHover: true,
    height: "90vh",
    // height: "15rem",
  };

  const slider = (e) => {
    var rate = e.detail.rate;
  };
</script>

<div class="center">
  <div class="card">
    <div class="div_top_section_heading" id="home">
      Jobfair 2023 | Find Your Path
    </div>

    <div class="div_button_container">
      <button class="button_apply_now">Apply now</button>
    </div>
  </div>
</div>

<Splide {options} on:autoplayPlaying={slider}>
  <SplideSlide>
    <img src={image1} alt="1" />
  </SplideSlide>
  <SplideSlide>
    <img src={image2} alt=" 2" />
  </SplideSlide>
  <SplideSlide>
    <img src={image3} alt=" 3" />
  </SplideSlide>
  <SplideSlide>
    <img src={image4} alt="4" />
  </SplideSlide>
  <SplideSlide>
    <img src={image5} alt="5" />
  </SplideSlide>
  <SplideSlide>
    <img src={image6} alt="6" />
  </SplideSlide>
</Splide>

<div class="splide__progress">
  <div class="splide__progress__bar" />
</div>

<!-- <ProgressBar /> -->

<!-- </div> -->
<style>
  .center {
    display: flex;
    justify-content: center;
  }

  .card {
    background-color: #76202e;
    border-radius: 30px;
    border-color: white;
    padding: 2vw;
    border-style: solid;
    margin: auto;
    position: absolute;
    top: 70vh;
    z-index: 99;
    box-shadow: 15px 15px 5px 3px rgba(54, 14, 14, 0.2);
  }

  .div_top_section_heading {
    justify-content: center;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 50px;
    color: white;
    padding: 0px 0px 2vw 0px;
  }

  .div_button_container {
    justify-content: center;
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
    width: 100vw;
    max-height: 87vh;
    min-height: 88vh;
    object-fit: cover;
  }

  .splide__progress__bar {
    height: 3px !important;
    background: #00ff00 !important;
  }
</style>
