<script lang="ts">
  export let id: string;
  export let name: string;
</script>

<hr class="hr_section_divider" {id} />
<div class="border" />
<div class="div_section_heading">{name}</div>

<style>
  .hr_section_divider {
    /* border-bottom: 5px dotted #ddaeb5; */
    opacity: 0;
    scroll-margin-top: 12vh;
  }
  .border {
    border: none;
    border-top: 5px dotted #ddaeb5;
  }
  .div_section_heading {
    justify-content: center;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 50px;
    padding: 50px 0px 50px 0px;
  }
</style>
