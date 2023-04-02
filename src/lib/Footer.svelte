<script lang="ts">
  import lc_xanthi_logo from "../assets/img/logos/lc_xanthi_logo.png";
  import jobfair_logo from "../assets/img/logos/jobfair_logo.png";
  import duth_logo from "../assets/img/logos/duth_logo.png";

  let width;
</script>

<footer bind:clientWidth={width}>
  <img src={lc_xanthi_logo} alt="LC Xanthi Logo" />
  <img src={jobfair_logo} alt="Jobfair Logo" />
  <img src={duth_logo} alt="Duth Logo" />
</footer>

<style>
  img{
    height: 150px;
    cursor: pointer;
    background-color: #76202e;
  }

  footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15%;
    background-color: #76202e;
    margin: 50px 0px 0px 0px;
  }
</style>
