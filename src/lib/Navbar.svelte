<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <div class=jf-bg>
    <img
      src="./src/assets/LC_Xanthi_white.png"
      class="logo jf-bg"
      alt="Flowbite Logo"
    />
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi  class="navbar" href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/services">Sponsors</NavLi>  
  </NavUl>
</Navbar>


<style>

  .jf-bg{
    background-color: #76202e;
  }

  .logo{
    height:100px;
  }

  .navbar{
    background-color: #76202e;
  }

</style>



<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger,Card } from 'flowbite-svelte'
</script>