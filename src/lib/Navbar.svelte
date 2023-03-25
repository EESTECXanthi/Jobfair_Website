<script lang="ts">
function hover(element) {
  element.setAttribute('src', 'src/assets/img/combined_logo_glow.png');
  var dur="5s"
}

function unhover(element) {
  element.setAttribute('src', 'src/assets/img/combined_logo.png');
}
</script>

<header class="header_navbar sticky" id="navbar">

  <img
  class="img_navbar_logo"
  src="src/assets/img/combined_logo.png"
  alt="LC Xanthi Logo + Jobfair Logo"
  />

  <navbar>

    <ul class="ul_navbar_links">

      <li class="li_navbar_link"><a class="a_navbar_link" href="#home">Home</a></li>
      <li class="li_navbar_link"><a class="a_navbar_link" href="#about">About</a></li>
      <li class="li_navbar_link"><a class="a_navbar_link" href="#sponsors">Sponsors</a></li>
      <li class="li_navbar_link"><a class="a_navbar_link" href="#contact">Contact</a></li>

    </ul>

  </navbar>

</header>

<style>
.li_navbar_link{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 25px;
  color: #edf0f1;
  text-decoration: none;
}

.a_navbar_link{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 25px;
  color: #edf0f1;
  text-decoration: none;
}

.header_navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  background-color: #76202e;
}

.img_navbar_logo{
  width: 300px;
  cursor: pointer;
  background-color: #76202e;
}

.ul_navbar_links{
  list-style: none;
  background-color: #76202e;
}

.ul_navbar_links li{
  display: inline-block;
  padding: 0 20px;
  background-color: #76202e;
}

.ul_navbar_links li a{
  transition: all 0.3s ease 0s;
  background-color: #76202e;
  font-weight: 500;
}

.ul_navbar_links li a:hover{
  color: #ddaeb5;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>