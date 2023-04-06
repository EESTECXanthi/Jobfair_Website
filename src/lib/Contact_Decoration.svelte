<script lang="ts">
  import man_suitcase from "../assets/img/decorations/man_suitcase.png";
  let width: number;
</script>

<div class="div_contact_card">
  <img class="img_decoration_contact" src={man_suitcase} alt="Contact" />
</div>

<style>
  .img_decoration_contact {
    height: 100%;
    padding: auto 0px auto 0px;
  }

  .div_contact_card {
    flex: 20%;
    border-color: #76202e;
    background: #76202e;
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