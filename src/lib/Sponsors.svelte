<script lang="ts"> 
  import Sponsors_Platinum from "./Sponsors_Platinum.svelte"
  import Sponsors_Gold from "./Sponsors_Gold.svelte";
  import Sponsors_Silver from "./Sponsors_Silver.svelte";
  import Sponsors_Bronze from "./Sponsors_Bronze.svelte";
  import Line from "./Line.svelte";
  import sunlight from "../assets/img/logos/sponsors/sunlight_logo.png";
  import ey from "../assets/img/logos/sponsors/ey_logo.png";
  import thrace_group from "../assets/img/logos/sponsors/thrace_group_logo.png";
  import altair from "../assets/img/logos/sponsors/altair_logo.png";
  import chipglobe from "../assets/img/logos/sponsors/chipglobe_logo.png";
  import archirodon from "../assets/img/logos/sponsors/archirodon_logo.png";
  import rhoe from "../assets/img/logos/sponsors/rhoe_logo.png";
  import hdl from "../assets/img/logos/sponsors/hdl_logo.png";
  import alumil from "../assets/img/logos/sponsors/alumil_logo.png";
  import deloitte from "../assets/img/logos/sponsors/deloitte_logo.png";
  import vtool from "../assets/img/logos/sponsors/vtool_logo.png";
  import netcompany_intrasoft from "../assets/img/logos/sponsors/netcompany_intrasoft_logo.png";
  import titan from "../assets/img/logos/sponsors/titan_logo.png";
  let width: number;
  let height: number;
</script>

<Line id="sponsors" name="JobFair Sponsors" />

<div bind:clientWidth={width} bind:clientHeight={height}>
  <div class={((width > 1800)&&(width > height)) ? "global_div_card_collage_horizontal div_platinum_container" : ""}>
    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}
    <Sponsors_Platinum id="platinum_1" logo={sunlight} name="Sunlight"page="#" />
    <div class="div_spacer"></div>
    <Sponsors_Platinum id="platinum_2" logo={ey} name="EY"page="#" />
    <div class="div_spacer"></div>
    <Sponsors_Platinum id="platinum_3" logo={thrace_group} name="Thrace Group"page="#" />
    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}
  </div>
</div>

<div bind:clientWidth={width}>
  <div class={((width > 1800)&&(width > height)) ? "global_div_card_collage_horizontal div_gold_container" : ""}>
    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}
    <Sponsors_Gold id="gold_1" logo={altair} name="Altair"page="#" />
    <div class="div_spacer"></div>
    <Sponsors_Gold id="gold_2" logo={chipglobe} name="Chipglobe"page="#" />
    <div class="div_spacer"></div>
    <Sponsors_Gold id="gold_3" logo={archirodon} name="Archirodon"page="#" />
    <div class="div_spacer"></div>
    <Sponsors_Gold id="gold_4" logo={rhoe} name="Rhoe"page="#" />
    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}
  </div>
</div>

<div bind:clientWidth={width}>
  <div class={((width > 1800)&&(width > height)) ? "global_div_card_collage_horizontal div_silver_container" : ""}>
    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}
    <Sponsors_Silver id="silver_1" logo={hdl} name="HDL"page="#" />
    <div class="div_spacer"></div>
    <Sponsors_Silver id="silver_2" logo={alumil} name="Alumil"page="#" />
    <div class="div_spacer"></div>
    <Sponsors_Silver id="silver_3" logo={deloitte} name="Deloitte"page="#" />
    <div class="div_spacer"></div>
    <Sponsors_Silver id="silver_4" logo={vtool} name="Vtool"page="#" />
    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}
  </div>
</div>

<div bind:clientWidth={width}>
  <div class={((width > 1800)&&(width > height)) ? "global_div_card_collage_horizontal div_bronze_container" : ""}>
    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}
    <Sponsors_Bronze id="bronze_1" logo={netcompany_intrasoft} name="Netcompany-Intrasoft"page="#" />
    <div class="div_spacer"></div>
    <Sponsors_Bronze id="bronze_2" logo={titan} name="Titan"page="#" />
    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}
  </div>
</div>

<style>
  .div_spacer{
    width: 2vw;
  }

  .div_platinum_container{
    max-width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  .div_gold_container{
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .div_silver_container{
    max-width: 85%;
    margin-left: auto;
    margin-right: auto;
  }

  .div_bronze_container{
    max-width: 40%;
    margin-left: auto;
    margin-right: auto;
  }

  .div_blank_card {
    flex: 27%;
    border-color: rgba(0,0,0,0);
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
    background: #fff1f3;
   }
</style>