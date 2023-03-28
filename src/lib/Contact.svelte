<script lang="ts">
  import Contact_HO from "./Contact_HO.svelte";
  import Line from "./Line.svelte";
  import Contact_Social from "./Contact_Social.svelte";
  import man_suitcase from "../assets/img/man_suitcase.png";
  let width: number;
</script>

<Line id="contact" name="Contact JobFair" />
<div bind:clientWidth={width}>
  <div class={width > 800 ? "div_contact_master" : ""}>
    <Contact_HO />
    {#if width > 1500}
      <img class="img_contact" src={man_suitcase} alt="Contact" />
    {/if}
    <Contact_Social />
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
