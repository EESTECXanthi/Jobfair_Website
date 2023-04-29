<script lang="ts">
  export let id: string;
  export let name: string;
  export let logo: string;
</script>

<hr class="hr_line" {id} />

<div class="div_sponsors_card">

  <img class="img_sponsor_logo global_img_sponsor_logo" src={logo} alt="Sponsor Logo" />

  <p class="p_card_heading global_p_card_heading">{name}</p>

</div>

<style>
  .img_sponsor_logo{
    width: max(15vw, 30vh);
  }

  .hr_line {
    opacity: 0;
    scroll-margin-top: 12vh;
  }

  .div_sponsors_card {
    flex: 27%;
    border-color: #FFD700;
    background: #fff1f3;
    min-width: 200px;
    height: auto;
    padding: 20px;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    text-align: center;
    border-style: solid;
    border-radius: 20px;
    box-shadow: 15px 15px 5px 3px rgba(53, 7, 14, 0.2);
    border-width: 4px;
    margin: 0px auto 50px auto;
    width: 80%;
    max-width: 75vh;
    min-width: 360px;
}

  .p_card_heading {
    background: #fff1f3;
    color: black;
    font-size: 35px;
    padding: 20px 0px 10px 0px;
  }
</style>