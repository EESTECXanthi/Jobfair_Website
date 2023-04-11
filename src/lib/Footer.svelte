<script lang="ts">
  import lc_xanthi_logo from "../assets/img/logos/lc_xanthi_logo.png";
  import jobfair_logo from "../assets/img/logos/jobfair_logo.png";
  import duth_logo from "../assets/img/logos/duth_logo.png";

  let width;
</script>
<!-- svelte-ignore a11y-invalid-attribute -->


<footer class="footer_navbar" id="navbar" bind:clientWidth={width}>
  <img src={lc_xanthi_logo} alt="LC Xanthi Logo" />
  <img src={jobfair_logo} alt="JobFair Logo" />
  <img src={duth_logo} alt="DUTH Logo" />

</footer>

<style>
  img{
    width: 25%;
    cursor: pointer;
    background-color: #76202e;
  }

  .footer_navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15%;
    background-color: #76202e;
  }
</style>
