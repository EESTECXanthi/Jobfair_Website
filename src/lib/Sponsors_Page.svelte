<script lang="ts">
  import placeholder from "../assets/img/logos/sponsors/placeholder.png";
  export let name: string;
  export let logo: string;
  export let description: string;
</script>


<div class="div_container">

  <div class="div_logo_name">

    <div class="div_logo global_div_card">

      <img
      src={logo}
      alt="Company Logo"
      />

    </div>

    <div class="div_name global_div_card"><p class="p_name global_p_card_heading">{name}</p></div>

  </div>

  <div class="div_description global_div_card">
    
    <p class="p_description global_p_card">

      {description}

    </p>

  </div>

</div>

<style>
  img{
    width: max(18vw, 36vh);
    max-width: max(12vh, 550px);
  }

  .div_logo{

    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
  }

  .div_name{
    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
  }

  .div_description{
    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
    width: 40vw;
    max-width: 1600px;
  }

  .div_container{
    justify-content: center;
    display: flex;
  }

  .p_name{
    font-size: 35px;
  }

  .p_description{
    padding: 0.5vw 1vw;
    font-size: 30px;
  }
</style>