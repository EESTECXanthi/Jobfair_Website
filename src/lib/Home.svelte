<script lang="ts">
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  import ProgressBar from "./ProgressBar.svelte";

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
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="./src/assets/img/photo001.png" alt="Image 1" />
  </SplideSlide>
  <SplideSlide>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="./src/assets/img/photo002.png" alt="Image 1" />
  </SplideSlide>
  <SplideSlide>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="./src/assets/img/photo003.png" alt="Image 1" />
  </SplideSlide>
  <SplideSlide>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="./src/assets/img/photo004.png" alt="Image 1" />
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
    /* padding: 200px 0px 50px 0px; */
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
    font-size: 25px;
    color: #76202e;
    border-color: #76202e;
    padding: 15px;
    cursor: pointer;
  }

  .button_apply_now:hover {
    color: white;
    background-color: #76202e;
    transition: 0.1s;
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
