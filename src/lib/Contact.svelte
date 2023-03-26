<script lang="ts">
  import HoContact from "./HOContact.svelte";
  import Line from "./Line.svelte";
  import SocialContact from "./SocialContact.svelte";
  import man_suitcase from "../assets/img/man_suitcase.png";
  let width: number;
</script>

<Line id="contact" name="Contact Jobfair" />
<div bind:clientWidth={width}>
  <div class={width > 800 ? "div_contact_master" : ""}>
    <HoContact />
    {#if width > 1500}
      <img class="img_contact" src={man_suitcase} alt="Contact" />
    {/if}
    <SocialContact />
  </div>
</div>

<style>
  .div_contact_master {
    justify-content: space-around;
    display: flex;
    text-align: center;
    display: flex;
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
  }

  .img_contact {
    width: 80%;
    max-width: 300px;
    padding: auto;
    flex: 33.33%;
    width: 40%;
    /* height: 250px; */
    padding: 20px 0px 20px 0px;
    margin: 0px 0px 50px 0px;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    text-align: center;
  }
</style>
