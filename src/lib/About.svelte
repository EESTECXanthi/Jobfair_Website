<script lang="ts">
  import About_WhatIs from "./About_WhatIs.svelte";
  import About_Decoration from "./About_Decoration.svelte";
  import About_EventInfo from "./About_EventInfo.svelte";
  import About_Description from "./About_Description.svelte";
  import Line from "./Line.svelte";
  let width: number;
</script>

<Line id="about" name="About JobFair" />

<div bind:clientWidth={width}>
  <div class={width > 1200 ? "global_div_card_collage_horizontal" : "global_div_card_collage_vertical"}>

    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}

    <About_WhatIs />

    {#if width > 1800}
    <About_Decoration />
    {/if}
    
    <About_EventInfo />

    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}
    
  </div>
</div>

<div class="div_section_heading">Τι θα δείτε στο JobFair;</div>
<div class="div_underline"><hr class="hr_underline"></div>

<div bind:clientWidth={width}>
  <div class={width > 1200 ? "global_div_card_collage_horizontal" : "global_div_card_collage_vertical"}>

    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}

    <About_Description
      id="Energy"
      name="Energy"
      point1="&#183 Πάροχοι ηλεκτρικής ενέργειας"
      point2="&#183 Πάροχοι ορυκτών καυσίμων"
      point3="&#183 Ανανεώσιμες πηγές ενέργειας"
    />

    <About_Description
      id="SoHaEl"
      name="Software / Hardware / Electronics"
      point1="&#183 Σχεδιασμός και ανάπτυξη τεχνολογίας υλικού"
      point2="&#183 Προγραμματισμός και τεχνητή νοημοσύνη"
      point3="&#183 Σχεδίαση και κατασκευή ηλεκτρονικών συστημάτων"
    />

    {#if width > 1800}
    <About_Description
      id="Consulting"
      name="Consulting"
      point1="&#183 Στρατηγικός σχεδιασμός"
      point2="&#183 Εξυπηρέτηση πελατών και υπηρεσίες μάρκετινγκ"
      point3="&#183 Οικονομική συμβουλευτική"
    />
    {/if}

    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}
    
  </div>
</div>

<div bind:clientWidth={width}>
  <div class={width > 1200 ? "global_div_card_collage_horizontal" : "global_div_card_collage_vertical"}>

    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}

    {#if width <= 1800}
    <About_Description
      id="Consulting"
      name="Consulting"
      point1="&#183 Στρατηγικός σχεδιασμός"
      point2="&#183 Εξυπηρέτηση πελατών και υπηρεσίες μάρκετινγκ"
      point3="&#183 Οικονομική συμβουλευτική"
    />
    {/if}

    <About_Description
      id="Tel"
      name="Telecommunications"
      point1="&#183 Ενσύρματες και ασύρματες τηλεπικοινωνίες"
      point2="&#183 Αναλογικά και ψηφιακά συστήματα τηλεπικοινωνιών"
      point3="&#183 Δίκτυα οπτικών ινών, RADAR και δορυφόροι"
    />

    {#if width > 1800}
    <About_Description
      id="Constructing"
      name="Constructing"
      point1="&#183 Σχεδιασμός και παραγωγή αρχιτεκτονικών συστημάτων"
      point2="&#183 Διοίκηση και διαχείριση έργων"
      point3="&#183 Εκτέλεση έργων σε ηλεκτρομηχανολογικές εγκαταστάσεις"
    />
    {/if}

    {#if width > 1800}
    <About_Description
      id="Coaching"
      name="Coaching"
      point1="&#183 Πρόσληψη και διαχείρηση προσωπικού"
      point2="&#183 Εκπαίδευση προσωπικού"
      point3="&#183 Παροχή επαγγελματικής καθοδήγησης και υπηρεσιών μισθοδοσίας"
    />
    {/if}

    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}
    
  </div>
</div>

{#if width <= 1800}
<div bind:clientWidth={width}>
  <div class={width > 1200 ? "global_div_card_collage_horizontal" : "global_div_card_collage_vertical"}>

    <About_Description
      id="Constructing"
      name="Constructing"
      point1="&#183 Σχεδιασμός και παραγωγή αρχιτεκτονικών συστημάτων"
      point2="&#183 Διοίκηση και διαχείριση έργων"
      point3="&#183 Εκτέλεση έργων σε ηλεκτρομηχανολογικές εγκαταστάσεις"
    />

    <About_Description
      id="Coaching"
      name="Coaching"
      point1="&#183 Πρόσληψη και διαχείρηση προσωπικού"
      point2="&#183 Εκπαίδευση προσωπικού"
      point3="&#183 Παροχή επαγγελματικής καθοδήγησης και υπηρεσιών μισθοδοσίας"
    />

  </div>
</div>
{/if}

<style>
  .div_blank_card {
    flex: 27%;
    border-color: rgba(0,0,0,0);
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
    background: #fff1f3;
  }

  .hr_underline{
    opacity: 0;
    scroll-margin-top: 12vh;
  }

  .div_underline{
    border: none;
    border-top: 2px solid black;
    margin: 0px auto 50px auto;
    width: 350px;
  }

  .div_section_heading {
    justify-content: center;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 35px;
    margin: 50px 0px 0px 0px;
  }
</style>