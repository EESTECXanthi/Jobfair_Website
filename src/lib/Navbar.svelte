    <script>
      import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, ImagePlaceholder, Skeleton, TextPlaceholder } from 'flowbite-svelte'
    </script>

    <div class="relative px-0">
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
          <NavLi class="text-white text-[20px]" href="/">About</NavLi>
          <NavLi class="text-white text-[20px]" href="/">Sponsors</NavLi>
         <NavLi class="text-white text-[20px]" href="/">Contact</NavLi>
        </NavUl>
     </Navbar> 
    </div>