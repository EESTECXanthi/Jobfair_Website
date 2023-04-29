<script lang="ts">
  export let id: string;
  export let name: string;
  export let point1: string;
  export let point2: string;
  export let point3: string;
</script>

<hr class="hr_line" {id} />

<div class="div_about_card global_div_card">

  <p class="p_card_heading global_p_card_heading">{name}</p>

  <hr class="hr_card_underline"/>

  <div class="div_about_line">
    <p class="p_card global_p_card">{point1}</p>
  </div>

  <div class="div_about_line">
    <p class="p_card global_p_card">{point2}</p>
  </div>

  <div class="div_about_line">
    <p class="p_card global_p_card">{point3}</p>
  </div>

</div>

<style>
  .hr_line {
    opacity: 0;
    scroll-margin-top: 12vh;
  }

  .div_about_card {
    flex: 27%;
    border-color: #76202e;
    background: #fff1f3;
  }

  .p_card_heading {
    background: #fff1f3;
    color: black;
    font-weight: 100px;
    font-size: 30px;
  }

  .p_card {
    background: #fff1f3;
    color: black;
  }

  .div_about_line {
    justify-content: center;
    display: flex;
    text-align: center;
    background: #fff1f3;
    padding: 5px;
  }

  .hr_card_underline {
    border-top: 1px solid black;
    border-left: none;
    border-right: none;
    width: 400px;
    margin: 5px auto 10px auto;
    width: 40%;
  }
</style>