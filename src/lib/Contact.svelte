<script lang="ts">
  import Contact_HO from "./Contact_HO.svelte";
  import Contact_Decoration from "./Contact_Decoration.svelte";
  import Contact_Social from "./Contact_Social.svelte";
  import Line from "./Line.svelte";
  import man_suitcase from "../assets/img/decorations/man_suitcase.png";
  let width: number;
</script>

<Line id="contact" name="Contact JobFair" />

<div bind:clientWidth={width}>
  <div class={width > 1200 ? "div_contact_horizontal" : "div_contact_vertical"}>
    <Contact_HO />
    {#if width > 1800}<Contact_Decoration />{/if}
    <Contact_Social />
  </div>
</div>

<style>
  .div_contact_horizontal {
    justify-content: space-around;
    display: flex;
    text-align: center;
    text-align: center;
    margin: 0px 2.5vw 30px 2.5vw;
  }

  .div_contact_vertical {
    text-align: center;
    text-align: center;
    margin: 0px auto;
  }
</style>
