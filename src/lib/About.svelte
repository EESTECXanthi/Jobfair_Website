<script lang="ts">
  import About_WhatIs from "./About_WhatIs.svelte";
  import About_Decoration from "./About_Decoration.svelte";
  import About_EventInfo from "./About_EventInfo.svelte";

  import About_Energy from "./About_Energy.svelte";
  import About_SoHaEl from "./About_SoHaEl.svelte";
  import About_Consulting from "./About_Consulting.svelte";

  import About_Tel from "./About_Tel.svelte";
  import About_Constructing from "./About_Constructing.svelte";
  import About_Coaching from "./About_Coaching.svelte";

  
  import Line from "./Line.svelte";
  let width: number;
</script>

<Line id="about" name="About JobFair" />

<div bind:clientWidth={width}>
  <div class={width > 1200 ? "div_about_horizontal" : "div_about_vertical"}>
                      <About_WhatIs />
    {#if width > 1800}<About_Decoration />{/if}
                      <About_EventInfo />
  </div>
</div>

<div bind:clientWidth={width}>
  <div class={width > 1200 ? "div_about_horizontal" : "div_about_vertical"}>
                      <About_Energy />
                      <About_SoHaEl />
    {#if width > 1800}<About_Consulting />{/if}
  </div>
</div>

<div bind:clientWidth={width}>
  <div class={width > 1200 ? "div_about_horizontal" : "div_about_vertical"}>
    {#if width <= 1800}<About_Consulting />{/if}
                      <About_Tel />
    {#if width > 1800}<About_Constructing />{/if}
    {#if width > 1800}<About_Coaching />{/if}
  </div>
</div>

{#if width <= 1800}
<div bind:clientWidth={width}>
  <div class={width > 1200 ? "div_about_horizontal" : "div_about_vertical"}>
    <About_Constructing />
    <About_Coaching />
  </div>
</div>
{/if}

<style>
  .div_about_horizontal {
    justify-content: space-around;
    display: flex;
    text-align: center;
    text-align: center;
    margin: 0px 2.5vw 30px 2.5vw;
  }

  .div_about_vertical {
    text-align: center;
    text-align: center;
    margin: 0px auto;
  }
</style>