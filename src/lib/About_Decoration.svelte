<script lang="ts">
  import jobfair_j from "../assets/img/decorations/jobfair_j_flat.png";
  let width: number;
</script>

<div class="div_about_card">
  <img class="img_decoration_about" src={jobfair_j} alt="About" />
</div>

<style>
  .img_decoration_about {
    height: 100%;
    padding: auto 0px auto 0px;
  }

  .div_about_card {
    flex: 20%;
    border-color: #76202e;
    background: #fff1f3;
    margin: 0px 2vw 50px 2vw;
    border-width: 7px;
    height: 350px;
    padding: 20px;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    text-align: center;
    border-style: solid;
    border-radius: 20px;
    box-shadow: 15px 15px 5px 3px rgba(53, 7, 14, 0.2);
    border-width: 4px;
  }

</style>