<script lang="ts">
  export let page_name: string;
  export let page_logo: string;
  export let page_description: string;
  let width;
</script>

<div bind:clientWidth={width}>

  <div class={width > 1200 ? "div_page_container" : "div_page_container_vertical"}>

    <div class="div_page_logo_name">

      <div class="div_page_logo global_div_card">

        <img
        src={page_logo}
        alt="Company Logo"
        />

      </div>

      <div class="div_page_name global_div_card"><p class="p_page_name global_p_card_heading">{page_name}</p></div>

    </div>

    <div class={width > 1200 ? "div_page_description global_div_card" : "div_page_description_vertical global_div_card"}>
    
      <p class="p_page_description global_p_card">

        {page_description}

      </p>

    </div>

  </div>

</div>

<style>
  img{
    width: max(18vw, 36vh);
    max-width: max(12vh, 550px);
  }

  .div_page_logo{
    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
  }

  .div_page_name{
    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
  }

  .div_page_description{
    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
    width: 40vw;
    max-width: 1600px;
    font-size: 25px;
  }

  .div_page_description_vertical{
    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
    max-width: 1600px;
  }

  .div_page_container{
    justify-content: center;
    display: flex;
  }

  .div_page_container_vertical{
    margin: 0px 3vh;
  }

  .p_page_name{
    font-size: 35px;
  }

  .p_page_description{
    padding: 0.5vw 1vw;
    font-size: 25px;
  }
</style>