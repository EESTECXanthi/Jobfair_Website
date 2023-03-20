<script lang="ts">
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
</script>

<Splide aria-label="My Favorite Images">
  <SplideSlide>
    <img src="src/assets/slideshow/0.jpeg" alt="Image 1" />
  </SplideSlide>
  <SplideSlide>
    <img src="src/assets/slideshow/1.jpeg" alt="Image 2" />
  </SplideSlide>
</Splide>

<style>
  img {
    min-width: 100vw;
    max-height: 95vh;
  }
</style>
