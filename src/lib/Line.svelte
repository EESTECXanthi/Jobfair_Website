<script lang="ts">
  export let id: string;
  export let name: string;
</script>

<hr class="hr_line" {id} />
<div class="div_line" />
<div class="div_section_heading">{name}</div>
<div class="div_underline"><hr class="hr_underline"></div>

<style>
  .hr_line {
    opacity: 0;
    scroll-margin-top: 12vh;
  }

  .div_line {
    border: none;
    border-top: 5px dotted #ddaeb5;
  }

  .hr_underline{
    opacity: 0;
    scroll-margin-top: 12vh;
  }

  .div_underline{
    border: none;
    border-top: 2px solid black;
    margin: 0px auto 50px auto;
    width: 20vw;
  }

  .div_section_heading {
    justify-content: center;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 50px;
    margin: 50px 0px 0px 0px;
    /*border-bottom: 2px solid black;*/
  }
</style>
