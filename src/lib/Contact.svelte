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
    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}
    <Contact_Social />
    {#if width > 1800}<Contact_Decoration />{/if}
    <Contact_LC />
    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}
  </div>
</div>

<style>
    .div_blank_card {
    flex: 27%;
    border-color: rgba(0,0,0,0);
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
    background: #fff1f3;
  }
</style>
