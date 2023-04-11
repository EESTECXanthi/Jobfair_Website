<script lang="ts">
  import Contact_LC from "./Contact_LC.svelte";
  import Contact_Decoration from "./Contact_Decoration.svelte";
  import Contact_Social from "./Contact_Social.svelte";
  import Line from "./Line.svelte";
  let width: number;
</script>

<Line id="contact" name="Contact JobFair" />

<div bind:clientWidth={width}>
  <div class={width > 1200 ? "global_div_card_collage_horizontal" : "global_div_card_collage_vertical"}>
    <Contact_LC />
    {#if width > 1800}<Contact_Decoration />{/if}
    <Contact_Social />
  </div>
</div>

<style>
</style>
