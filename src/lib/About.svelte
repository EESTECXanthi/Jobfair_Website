<script lang="ts">
  import About_WhatIs from "./About_WhatIs.svelte";
  import Line from "./Line.svelte";
  import About_EventInfo from "./About_EventInfo.svelte";
  import jobfair_j from "../assets/img/jobfair_j_small.png";
  let width: number;
</script>

<Line id="about" name="About JobFair" />
<div bind:clientWidth={width}>
  <div class={width > 720 ? "div_contact_master" : ""}>
    <About_WhatIs />
    {#if width > 1500}
      <img class="img_contact" src={jobfair_j} alt="About" />
    {/if}
    <About_EventInfo />
  </div>
</div>

<style>
  .div_contact_master {
    justify-content: space-around;
    display: flex;
    text-align: center;
    display: flex;
    text-align: center;
  }

  .img_contact {
    width: 80%;
    max-width: 300px;
    padding: auto;
    flex: 33.33%;
    width: 40%;
    padding: 20px 0px 20px 0px;
    margin: 0px 20px 50px 20px;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    text-align: center;
  }
</style>
