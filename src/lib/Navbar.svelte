<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<Navbar let:hidden let:toggle class="bg-[#76202e]">
  <NavBrand href="/">
    <span class="w-5" />
    <img
      src="./img/combined_logo.png"
      class="object-contain h-24 w-64 text-white"
      alt="LC Xanthi Logo + Jobfair Logo"
    />
    <span class="w-5" />
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi class="text-white text-[20px]" href="/">Home</NavLi>
    <NavLi class="text-white text-[20px]" href="/about">About</NavLi>
    <NavLi class="text-white text-[20px]" href="/sponsors">Sponsors</NavLi>
    <NavLi class="text-white text-[20px]" href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>