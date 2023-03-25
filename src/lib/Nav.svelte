<script lang="ts">
  function hover(element) {
    element.setAttribute("src", "assets/img/combined_logo_glow.png");
    var dur = "5s";
  }

  function unhover(element) {
    element.setAttribute("src", "assets/img/combined_logo.png");
  }
</script>

<header class="header_navbar sticky" id="navbar">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <img
    class="img_navbar_logo"
    src="assets/img/combined_logo.png"
    alt="LC Xanthi Logo + Jobfair Logo"
    on:mouseenter={hover}
    on:mouseleave={unhover}
    on:click={() => console.log("click")}
  />

  <nav>
    <ul class="ul_nav_links">
      <li class="li_navbar_link">
        <a class="a_navbar_link" href="#home">Home</a>
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
  </nav>
</header>

<style>
  .ul_nav_links {
    list-style: none;
    background-color: #76202e;
  }

  .ul_nav_links li {
    display: inline-block;
    padding: 0 20px;
    background-color: #76202e;
  }

  .ul_nav_links li a {
    transition: all 0.3s ease 0s;
    background-color: #76202e;
    font-weight: 500;
  }

  .ul_nav_links li a:hover {
    color: #ddaeb5;
  }
</style>
