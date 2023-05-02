<script lang="ts">
  import jobfair_logo_navbar from "../assets/img/logos/other/jobfair_logo_navbar.png";
  let width;
</script>
<!-- svelte-ignore a11y-invalid-attribute -->


<header class="header_navbar" id="navbar" bind:clientWidth={width}>
  <img class={width > 920 ? "img_left" : "img_center"} src={jobfair_logo_navbar} alt="JobFair Logo" />

  <navbar>
    {#if width > 920}
      <ul class="ul_navbar_links">
        <li class="li_navbar_link">
          <a class="a_navbar_link" href="#">Home</a>
        </li>
        <li class="li_navbar_link">
          <a class="a_navbar_link" href="#about">About</a>
        </li>
        <li class="li_navbar_link">
          <a class="a_navbar_link" href="#sponsors">Sponsors</a>
        </li>
        <li class="li_navbar_link">
          <a class="a_navbar_link" href="#contact">Contact</a>
        </li>
      </ul>
    {/if}
  </navbar>
</header>

<style>
  .img_left{
    width: 10%;
    cursor: pointer;
    background-color: #76202e;
    margin: 0px 0px 0px 2vw;
  }

  .img_center{
    width: min(25vh, 30vw);
    cursor: pointer;
    background-color: #76202e;
    margin: auto;
  }

  .li_navbar_link {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 25px;
    color: #edf0f1;
    text-decoration: none;
  }

  .a_navbar_link {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: #edf0f1;
    text-decoration: none;
  }

  .header_navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5% 20px 5%;
    background-color: #76202e;
  }

  .ul_navbar_links {
    list-style: none;
    background-color: #76202e;
    margin: 0px 2vw 0px 0px;
  }

  .ul_navbar_links li {
    display: inline-block;
    padding: 0 20px;
    background-color: #76202e;
  }

  .ul_navbar_links li a {
    transition: all 0.3s ease 0s;
    background-color: #76202e;
    font-weight: 500;
  }

  .ul_navbar_links li a:hover {
    color: #ddaeb5;
  }
</style>
