<script lang="ts">
  import About_WhatIs from "./About_WhatIs.svelte";
  import About_Decoration from "./About_Decoration.svelte";
  import About_EventInfo from "./About_EventInfo.svelte";
  import Line from "./Line.svelte";
  import jobfair_j from "../assets/img/decorations/jobfair_j_flat.png";
  let width: number;
</script>

<Line id="about" name="About JobFair" />

<div bind:clientWidth={width}>
  <div class={width > 720 ? "div_about_master" : ""}>
    <About_WhatIs />
    {#if width > 1500}<About_Decoration />{/if}
    <About_EventInfo />
  </div>
</div>

<style>
  .div_about_master {
    justify-content: space-around;
    display: flex;
    text-align: center;
    display: flex;
    text-align: center;
  }
</style>