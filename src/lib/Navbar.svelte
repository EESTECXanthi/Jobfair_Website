<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<Navbar let:hidden let:toggle class="bg-[#75202e]">
  <NavBrand href="/">
    <img
      src="./img/LC_Xanthi_white.png"
      class="object-contain h-24 h-24 text-white"
      alt="LC Xanthi Logo"
    />
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi class="text-white text-[20px]" href="/">Home</NavLi>
    <NavLi class="text-white text-[20px]" href="/about">About</NavLi>
    <NavLi class="text-white text-[20px]" href="/sponsors">Sponsors</NavLi>
    <NavLi class="text-white text-[20px]" href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>