<script lang="ts">

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

  let sunlight_des = "Η Sunlight Group είναι κορυφαία εταιρεία τεχνολογίας και παροχής καινοτόμων λύσεων αποθήκευσης ενέργειας για βιομηχανικές και εκτός δρόμου εφαρμογές, με περισσότερα από 30 χρόνια εμπειρίας. Ειδικεύεται στην ανάπτυξη, παραγωγή και διάθεση μπαταριών μολύβδου-οξέος και ιόντων λιθίου για βιομηχανική ηλεκτροκίνηση και ηλεκτροκίνηση οχημάτων αναψυχής, καθώς και συστημάτων αποθήκευσης ενέργειας. Τα προϊόντα αυτά κατασκευάζονται και συναρμολογούνται στις υπερσύγχρονες εγκαταστάσεις της Sunlight στην Ελλάδα, την Ιταλία, τη Γερμανία τις ΗΠΑ και αλλού, και εξάγονται σε περισσότερες από 115 χώρες.";
  let ey_des = "Στην ΕΥ, σκοπός μας είναι η δημιουργία ενός καλύτερου εργασιακού κόσμου, παράγοντας μακροπρόθεσμη αξία για τους πελάτες μας, τους ανθρώπους μας και την κοινωνία, και οικοδομώντας εμπιστοσύνη στις κεφαλαιαγορές. Αξιοποιώντας τα δεδομένα και την τεχνολογία, οι πολυσυνθετικές ομάδες μας, σε περισσότερες από 150 χώρες, οικοδομούν την εμπιστοσύνη μέσω της διασφάλισης της καλής λειτουργίας των επιχειρήσεων και βοηθούν τους πελάτες μας να αναπτυχθούν, να μετασχηματιστούν και να λειτουργήσουν αποτελεσματικότερα. Μέσω των Ελεγκτικών, Συμβουλευτικών, Νομικών και Φορολογικών Υπηρεσιών μας, καθώς και μέσω των Συμβουλευτικών Υπηρεσιών Εταιρικής Στρατηγικής και Συναλλαγών, οι ομάδες της EY θέτουν καλύτερες ερωτήσεις, για να καταλήξουν σε νέες απαντήσεις στα περίπλοκα ζητήματα που αντιμετωπίζει ο κόσμος μας σήμερα.";
  let thrace_group_des = "Από το 1977 μέχρι και σήμερα, ο Όμιλος Πλαστικά Θράκης δραστηριοποιείται στην παραγωγή και διάθεση προϊόντων πολυπροπυλενίου και πολυαιθυλενίου κατασκευάζοντας Τεχνικά Υφάσματα & Λύσεις Συσκευασίας που διατίθενται στην παγκόσμια αγορά. Με αφετηρία το Μαγικό Ξάνθης, εξελίχθηκε σε έναν επιτυχημένο Ελληνικό Πολυεθνικό Όμιλο που απασχολεί περισσότερους από 2,000 εργαζόμενους και λειτουργεί παραγωγικές & εμπορικές μονάδες σε 9 χώρες (Ελλάδα, Σκωτία, Βουλγαρία, Ρουμανία, Ιρλανδία, Η.Π.Α., Σερβία, Νορβηγία και Σουηδία) και εκτεταμένο δίκτυο πωλήσεων σε περισσότερες από 80 χώρες. Οι μεγαλύτερες εγκαταστάσεις του ομίλου παραμένουν στο Μαγικό Ξάνθης, εκτείνονται σε έκταση 500 στρεμμάτων και απασχολούν περίπου 1,000 εργαζόμενους σε θέσεις που σχετίζονται με την παραγωγή, την έρευνα και ανάπτυξη προϊόντων, τη συντήρηση και βελτίωση τεχνολογικού εξοπλισμού και σύγχρονες τεχνικές εφαρμογές. Το 2013 εντάχθηκαν στον Όμιλο τα Θερμοκήπια Θράκης με τις υδροπονικές καλλιέργειες που αξιοποιούν τη γεωθερμία στην περιοχή της Ξάνθης. Τα τελευταία χρόνια ο Όμιλος επενδύει δυναμικά στης Βιώσιμη Ανάπτυξη και κάνει την κυκλική οικονομία πράξη με τη λειτουργία μονάδας ανακύκλωσης, τη χρήση αναγεννημένης πρώτης ύλης στην παραγωγική διαδικασία, αλλά και τη συνεχή μείωση των αποβλήτων. Επίσης, συμβάλλει στη μείωση των επιπτώσεων της κλιματικής αλλαγής με τη χρήση ενέργειας από ανανεώσιμες πηγές (ηλιακή, γεωθερμική και υδροηλεκτρική), και τη συνεχή μείωση της κατανάλωσης ενέργειας κατά την παραγωγική διαδικασία. Μέσω της πλατφόρμας IN THE LOOP, ο όμιλος δικτυώνει εταιρείες, δημόσιους φορείς και καταναλωτές με στόχο τη μείωση του περιβαλλοντικού αποτυπώματος σε ολόκληρη την αλυσίδα αξίας. Για όλα τα παραπάνω, έχει αξιολογηθεί με τη διάκριση «Β» από τον διεθνή μη κερδοσκοπικό οργανισμό CDP υπερβαίνοντας τον παγκόσμιο μέσο όρο.";

  let altair_des = "Η Altair (Nasdaq: ALTR) είναι παγκόσμιος ηγέτης στην υπολογιστική επιστήμη και την τεχνητή νοημοσύνη (AI). Εδώ και σχεδόν 40 χρόνια, η Altair βοηθάει τις εταιρείες να λαμβάνουν πιο έξυπνες αποφάσεις σε έναν ολοένα και πιο συνδεδεμένο και πολύπλοκο κόσμο, εξοικονομώντας κόστος, μειώνοντας τη σπατάλη, επιταχύνοντας το χρόνο διάθεσης στην αγορά, βελτιώνοντας την επιχειρηματική απόδοση και εξελίσσοντας μία data-driven κουλτούρα. Η προσέγγισή μας στην καινοτομία με βάση την προσομοίωση και την τεχνητή νοημοσύνη τροφοδοτείται από το ευρύ portfolio λύσεων υψηλής αξιοπιστίας, βασισμένων στη φυσική, την κορυφαία τεχνολογία για βελτιστοποίηση και HPC και την end-to-end πλατφόρμα για την ανάπτυξη λύσεων τεχνητής νοημοσύνης. Οι επιστήμονες, οι μηχανικοί και τα δημιουργικά μυαλά μας βρίσκονται πίσω από μερικές από τις πιο επαναστατικές ανακαλύψεις στον κόσμο. Οι 1.000+ software developers που διαθέτουμε αξιοποιούν όλη την εμπειρία δεκαετιών στην ανάπτυξη εμπορικού λογισμικού, η οποία είναι απαράμιλλη στην αγορά.";
  let chipglobe_des = "Η εταιρεία Chipglobe δραστηριοποείται στο χώρο της βιομηχανίας των ημιαγωγών. Ιδρύθηκε στις αρχές του 2014 από τον Volker Frisch στο Μόναχο της Γερμανίας, όπου και βρίσκεται η έδρα της. Στην Ελλάδα η Chipglobe Greece MIKE είναι ενεργή από το 2021. Άλλα Chipglobe Design Centers (ODC) υπάρχουν στη Δρέσδη, το Βελιγράδι, τη Σιγκαπούρη και το Βιετνάμ. Απασχολούμε παγκοσμίως περισσότερους από 100 μηχανικούς. Η εταιρεία μας παρέχει συμβουλευτικές υπηρεσίες στους ακόλουθους τομείς: Design, Verification και Firmware/Embedded Systems και βοηθά τους πελάτες στην ανάπτυξη ολοκληρωμένων chips (ASICS, FPGA και ενσωματωμένων συστημάτων). Οι ομάδες μας συνεργάζονται σε παγκόμιο επίπεδο με ομάδες Design και Verification ASIC και άλλων μεγάλων εταιρειών ημιαγωγών, εστιάζοντας στις αγορές της αυτοκινητοβιομηχανίας, των τηλεπικοινωνιών, της ασφάλειας και της δικτύωσης.";
  let archirodon_des = " Ο Όμιλος Archirodon είναι ένας πολυεθνικός  κατασκευαστικός όμιλος με 64 χρόνια παρουσίας, που έχει πραγματοποιήσει πάνω από 350 έργα μεγάλης κλίμακας, σε περισσότερες από 30 χώρες.  Έχει έδρα στην Ολλανδία και παρουσία σε πολλές χώρες, ιδιαίτερα στη Μέση Ανατολή, τη Βόρειο Αφρική και την Ελλάδα. Αναλαμβάνει τεχνικά έργα κάθε τύπου και πολυπλοκότητας (turnkey-EPC) στους τομείς των Λιμενικών, Παράκτιων και Βιομηχανικών Έργων, Ενέργειας και Υποδομών. Στοχεύει στη διατήρηση της θέσης του στην παγκόσμια αγορά ως αξιόπιστου συνεργάτη στη μελέτη, τον σχεδιασμό και την κατασκευή σύνθετων και εξειδικευμένων τεχνικών έργων. Απασχολεί περίπου 10.000 εργαζόμενους και διαθέτει περισσότερα από 6.000 ειδικά και πλωτά μηχανήματα για τις ανάγκες και των πλέον απαιτητικών έργων. Ο Όμιλος διατηρεί σήμερα γραφεία ή εργοτάξια στις χώρες Ολλανδία, Ελλάδα, Κύπρο, Σαουδική Αραβία, Ηνωμένα Αραβικά Εμιράτα, Κατάρ, Μπαχρέιν, Ομάν, Αίγυπτο, Μαρόκο, Καζακστάν."
  let rhoe_des = "Η Rhoé, είναι μια start-up που δραστηριοποιείται στο χώρο της κινητικότητας και της πράσινης τεχνολογίας με στόχο τη δημιουργία ενός βιώσιμου, πράσινου μέλλοντος για όλους. Πιο συγκεκριμένα, βοηθάει δημόσιους και ιδιωτικούς φορείς να επιχειρήσουν τη μετάβαση προς καθαρότερες μορφές ενέργειας, με οικονομικά-επιχειρηματικά βιώσιμο τρόπο.  Για να το πετύχει αυτό, αναπτύσσει λογισμικά βελτιστοποίησης τα οποία ενώνουν τις πράσινες μορφές ενέργειας με καινοτόμες τεχνολογίες στον χώρο της κινητικότητας.";

  let hdl_des = "HDL Design House provides front to back digital and analog services for the most complex System-on-Chip (SoC). The company develops IP cores, VIP and SystemVerilog based verification solutions. With 20 years of experience in SoC implementation, and 250 engineers working in four design centers, HDL Design House can deliver leading edge technologies solutions for the most demanding projects. With customers ranging from small start-up companies to multi-national corporations in the semiconductor industry, HDL Design House is dedicated to fulfilling each customer’s unique requirements with high-quality products and services, flexible licensing models, and highly responsive technical support. ";
  let alumil_des = "Με περισσότερα από 30 χρόνια εμπειρίας, η ALUMIL είναι μία από τις κορυφαίες ευρωπαϊκές εταιρείες σχεδιασμού και παραγωγής αρχιτεκτονικών συστημάτων αλουμινίου παγκοσμίως. Με πάνω από 2600 εργαζομένους, 12 εργοστάσια σε 6 χώρες και ένα ισχυρό δίκτυο πωλήσεων σε όλες τις ηπείρους, αποστολή της εταιρείας είναι η βελτίωση της ποιότητας ζωής των ανθρώπων, ενισχύοντας την επίδοση των κτιρίων τους με καινοτόμα προϊόντα υψηλής αισθητικής. Με πλήρη επίγνωση των επιπτώσεων της περιβαλλοντικής υποβάθμισης, η ALUMIL χαράσσει και υλοποιεί μια επιχειρηματική στρατηγική που εδράζεται στις αξίες της βιωσιμότητας και της κυκλικής οικονομίας, επενδύοντας σε «πράσινες» ενέργειες που συμβάλλουν στην καλλιέργεια μιας κουλτούρας υπευθυνότητας απέναντι στο περιβάλλον.";
  let deloitte_des = "Η Deloitte, το ισχυρότερο και πολυτιμότερο brand εμπορικών υπηρεσιών παγκοσμίως και ένα από τα Best Workplaces (Great Place to Work®) στον κόσμο και στην Ελλάδα, δραστηριοποιείται στη χώρα μας από το 1975 με γραφεία σε Αθήνα, Θεσσαλονίκη, Πάτρα και Ηράκλειο και περισσότερους από 2.700 εργαζόμενους. Παρέχουμε συμβουλευτικές, ελεγκτικές, χρηματοοικονομικές, φορολογικές και υπηρεσίες διαχείρισης κινδύνου. Η τεχνολογία και η καινοτομία βρίσκονται στην καρδιά των υπηρεσιών μας, γι’ αυτό και περισσότεροι από το 50% των ανθρώπων μας αξιοποιούν τις εφαρμογές της τεχνολογίας για να παρέχουν καινοτόμες λύσεις στους πελάτες μας. Στα γραφεία μας στη Θεσσαλονίκη λειτουργεί το Competence Center της Deloitte, ένα πρότυπο κέντρο τεχνογνωσίας, εκπαίδευσης και καινοτομίας που εξελίσσει τους αποφοίτους πανεπιστημίου και τους νέους επαγγελματίες σε εξειδικευμένα στελέχη με ψηφιακές γνώσεις σε εκθετικές τεχνολογίες αιχμής.";
  let vtool_des = "Vtool answers to the ever-increasing need for faster, more reliable ASIC and FPGA development cycles. Operating out of Israel, France, Serbia, Poland, Greece, and India, Vtool is an EDA verification company, RISC-V SoC adaptable platform provider, and ASIC and embedded SW design house. Cogita-PRO is Vtool’s advanced EDA solution, a first-of-its-kind debug platform, applying visual analysis principles and AI-based algorithms to dramatically optimize verification closure. Our Universa RISC-V SoC IP core is a ready-to-use framework for developing SoC solutions faster. Universa provides a modular, easily adaptable and extendable RTL design, UVM/SV verification environment, bootroom, and software drivers. Vtool also offers cutting-edge professional services that cover ASIC design, verification, embedded software, and analog/RF design, providing our customers a clear path to success. Established in 2014, Vtool is led by industry experts with a proven track record, and its team of more than 150 professionals is growing rapidly while serving chipmakers worldwide. ";

  let isClicked = 0;
  let width: number;
  let height: number;

</script>

<Line id="sponsors" name="JobFair Sponsors" />

{#if !isClicked}<!--Sponsor-List-->

<div bind:clientWidth={width} bind:clientHeight={height}><!--Platinum Cards-->

  <div  class={((width > 1800)&&(width > height)) ? "global_div_card_collage_horizontal div_platinum_container" : ""}>

    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}

    <div class="div_sponsors_card_platinum"><!--Sunlight Card-->

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img class="img_sponsor_logo_platinum global_img_sponsor_logo"
        src={sunlight}
        alt="Sponsor Logo"
        on:click={() => isClicked = 1}
      />
    
      <p class="p_card_heading_platinum global_p_card_heading">Sunlight</p>
    
    </div>

    <div class="div_spacer"></div>
  
    <div class="div_sponsors_card_platinum"><!--EY Card-->

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img class="img_sponsor_logo_platinum global_img_sponsor_logo"
          src={ey} alt="Sponsor Logo"
          on:click={() => isClicked = 2}
        />
    
        <p class="p_card_heading_platinum global_p_card_heading">EY</p>
    
    </div>

    <div class="div_spacer"></div>

    <div class="div_sponsors_card_platinum"><!--Thrace Group Card-->

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img class="img_sponsor_logo_platinum global_img_sponsor_logo"
          src={thrace_group} alt="Sponsor Logo"
          on:click={() => isClicked = 3}
        />
    
        <p class="p_card_heading_platinum global_p_card_heading">Thrace Group</p>
    
    </div>

    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}

  </div>

</div>

<div bind:clientWidth={width} bind:clientHeight={height}><!--Gold Cards-->
  <div class={((width > 1800)&&(width > height)) ? "global_div_card_collage_horizontal div_gold_container" : ""}>
    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}

    <div class="div_sponsors_card_gold"><!--Altair Card-->

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        class="img_sponsor_logo_gold global_img_sponsor_logo"
        src={altair}
        alt="Sponsor Logo"
        on:click={() => isClicked = 4}
      />
    
      <p class="p_card_heading_gold global_p_card_heading">Altair</p>
    
    </div>

    <div class="div_spacer"></div>

    <div class="div_sponsors_card_gold"><!--Chipglobe Card-->

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        class="img_sponsor_logo_gold global_img_sponsor_logo"
        src={chipglobe}
        alt="Sponsor Logo"
        on:click={() => isClicked = 5}
      />
    
      <p class="p_card_heading_gold global_p_card_heading">Chipglobe</p>
    
    </div>

    <div class="div_spacer"></div>

    <div class="div_sponsors_card_gold"><!--Archirodon Card-->

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        class="img_sponsor_logo_gold global_img_sponsor_logo"
        src={archirodon} alt="Sponsor Logo"
        on:click={() => isClicked = 6}
      />
    
      <p class="p_card_heading_gold global_p_card_heading">Archirodon</p>
    
    </div>

    <div class="div_spacer"></div>

    <div class="div_sponsors_card_gold"><!--Rhoe Card-->

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        class="img_sponsor_logo_gold global_img_sponsor_logo"
        src={rhoe} alt="Sponsor Logo"
        on:click={() => isClicked = 7}
      />
    
      <p class="p_card_heading_gold global_p_card_heading">Rhoe</p>
    
    </div>

    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}
  </div>
</div>

<div bind:clientWidth={width} bind:clientHeight={height}><!--Silver Cards-->

  <div class={((width > 1800)&&(width > height)) ? "global_div_card_collage_horizontal div_silver_container" : ""}>

    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}

    <div class="div_sponsors_card_silver"><!--HDL Card-->

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        class="img_sponsor_logo_silver global_img_sponsor_logo"
        src={hdl}
        alt="Sponsor Logo"
        on:click={() => isClicked = 8}
      />
    
      <p class="p_card_heading_silver global_p_card_heading">HDL</p>
    
    </div>

    <div class="div_spacer"></div>

    <div class="div_sponsors_card_silver"><!--Alumil Card-->

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        class="img_sponsor_logo_silver global_img_sponsor_logo"
        src={alumil} alt="Sponsor Logo"
        on:click={() => isClicked = 9}
      />
    
      <p class="p_card_heading_silver global_p_card_heading">Alumil</p>
    
    </div>

    <div class="div_spacer"></div>

    <div class="div_sponsors_card_silver"><!--Deloitte Card-->

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img 
        class="img_sponsor_logo_silver global_img_sponsor_logo"
        src={deloitte}
        alt="Sponsor Logo"
        on:click={() => isClicked = 10}
      />
    
      <p class="p_card_heading_silver global_p_card_heading">Deloitte</p>
    
    </div>

    <div class="div_spacer"></div>

    <div class="div_sponsors_card_silver"><!--Vtool Card-->

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img
          class="img_sponsor_logo_silver global_img_sponsor_logo"
          src={vtool} alt="Sponsor Logo"
          on:click={() => isClicked = 11}
        />
    
        <p class="p_card_heading_silver global_p_card_heading">Vtool</p>
    
    </div>
  
  {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}

  </div>

</div>

<div bind:clientWidth={width} bind:clientHeight={height}><!--Bronze Cards-->

  <div class={((width > 1800)&&(width > height)) ? "global_div_card_collage_horizontal div_bronze_container" : ""}>

    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}

    <div class="div_sponsors_card_bronze"><!--Netcompany-IntraSoft Card-->

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        class="img_sponsor_logo_bronze global_img_sponsor_logo"
        src={netcompany_intrasoft}
        alt="Sponsor Logo"
      />
    
      <p class="p_card_heading_bronze global_p_card_heading">Netcompany-Intrasoft</p>
    
    </div>

    <div class="div_spacer"></div>

    <div class="div_sponsors_card_bronze"><!--Titan Card-->

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        class="img_sponsor_logo_bronze global_img_sponsor_logo"
        src={titan}
        alt="Sponsor Logo"
      />
    
      <p class="p_card_heading_bronze global_p_card_heading">Titan</p>
    
    </div>

    {#if width > 3200}<div class="div_blank_card global_div_card"></div>{/if}
  </div>
</div>

{/if}<!--/Sponsor-List-->

{#if isClicked}

<div bind:clientWidth={width}>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class={width > 1200 ? "div_page_container" : "div_page_container_vertical"}  on:click={() => isClicked = 0}>

    <div class="div_page_logo_name">

      <div class="div_page_logo global_div_card">

        {#if isClicked == 1}<img src={sunlight} alt="Company Logo"/>{/if}
        {#if isClicked == 2}<img src={ey} alt="Company Logo"/>{/if}
        {#if isClicked == 3}<img src={thrace_group} alt="Company Logo"/>{/if}
        {#if isClicked == 4}<img src={altair} alt="Company Logo"/>{/if}
        {#if isClicked == 5}<img src={chipglobe} alt="Company Logo"/>{/if}
        {#if isClicked == 6}<img src={archirodon} alt="Company Logo"/>{/if}
        {#if isClicked == 7}<img src={rhoe} alt="Company Logo"/>{/if}
        {#if isClicked == 8}<img src={hdl} alt="Company Logo"/>{/if}
        {#if isClicked == 9}<img src={alumil} alt="Company Logo"/>{/if}
        {#if isClicked == 10}<img src={deloitte} alt="Company Logo"/>{/if}
        {#if isClicked == 11}<img src={vtool} alt="Company Logo"/>{/if}

      </div>

      <div class="div_page_name global_div_card">

        {#if isClicked == 1}<p class="p_page_name global_p_card_heading">Sunlight</p>{/if}
        {#if isClicked == 2}<p class="p_page_name global_p_card_heading">EY</p>{/if}
        {#if isClicked == 3}<p class="p_page_name global_p_card_heading">Thrace Group</p>{/if}
        {#if isClicked == 4}<p class="p_page_name global_p_card_heading">Altair</p>{/if}
        {#if isClicked == 5}<p class="p_page_name global_p_card_heading">Chipglobe</p>{/if}
        {#if isClicked == 6}<p class="p_page_name global_p_card_heading">Archirodon</p>{/if}
        {#if isClicked == 7}<p class="p_page_name global_p_card_heading">Rhoe</p>{/if}
        {#if isClicked == 8}<p class="p_page_name global_p_card_heading">HDL</p>{/if}
        {#if isClicked == 9}<p class="p_page_name global_p_card_heading">Alumil</p>{/if}
        {#if isClicked == 10}<p class="p_page_name global_p_card_heading">Deloitte</p>{/if}
        {#if isClicked == 11}<p class="p_page_name global_p_card_heading">Vtool</p>{/if}

      </div>

    </div>

    <div class={width > 1200 ? "div_page_description global_div_card" : "div_page_description_vertical global_div_card"}>
    
      {#if isClicked == 1}<p class="p_page_description global_p_card">{sunlight_des}</p>{/if}
      {#if isClicked == 2}<p class="p_page_description global_p_card">{ey_des}</p>{/if}
      {#if isClicked == 3}<p class="p_page_description global_p_card">{thrace_group_des}</p>{/if}
      {#if isClicked == 4}<p class="p_page_description global_p_card">{altair_des}</p>{/if}
      {#if isClicked == 5}<p class="p_page_description global_p_card">{chipglobe_des}</p>{/if}
      {#if isClicked == 6}<p class="p_page_description global_p_card">{archirodon_des}</p>{/if}
      {#if isClicked == 7}<p class="p_page_description global_p_card">{rhoe_des}</p>{/if}
      {#if isClicked == 8}<p class="p_page_description global_p_card">{hdl_des}</p>{/if}
      {#if isClicked == 9}<p class="p_page_description global_p_card">{alumil_des}</p>{/if}
      {#if isClicked == 10}<p class="p_page_description global_p_card">{deloitte_des}</p>{/if}
      {#if isClicked == 11}<p class="p_page_description global_p_card">{vtool_des}</p>{/if}

    </div>

  </div>

</div>
{/if}

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

 .img_sponsor_logo_gold{
    width: max(15vw, 30vh);
    max-width: max(11vh, 400px);
    cursor: pointer;
}

.img_sponsor_logo_platinum{
    width: max(18vw, 36vh);
    cursor: pointer;
    max-width: max(11vh, 400px);
}

.div_sponsors_card_gold {
  flex: 27%;
  border-color: #FFD700;
  background: #fff1f3;
  min-width: 200px;
  height: auto;
  padding: 20px;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  text-align: center;
  border-style: solid;
  border-radius: 20px;
  box-shadow: 15px 15px 5px 3px rgba(53, 7, 14, 0.2);
  border-width: 4px;
  margin: 0px auto 50px auto;
  width: 80%;
  max-width: 75vh;
  min-width: min(11vw, 320px);
}

.div_sponsors_card_platinum {
  flex: 27%;
  border-color: #C0C0C0;
  background: #fff1f3;
  min-width: 200px;
  height: auto;
  padding: 20px;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  text-align: center;
  border-style: solid;
  border-radius: 20px;
  box-shadow: 15px 15px 5px 3px rgba(53, 7, 14, 0.2);
  border-width: 4px;
  margin: 0px auto 50px auto;
  width: 85%;
  max-width: 80vh;
  min-width: min(12vw, 360px);
}

.p_card_heading_gold {
  background: #fff1f3;
  color: black;
  font-size: 30px;
  padding: 20px 0px 10px 0px;
}

.p_card_heading_platinum {
  background: #fff1f3;
  color: black;
  font-size: 35px;
  padding: 20px 0px 10px 0px;
}

.img_sponsor_logo_silver{
    cursor: pointer;
  width: max(12vw, 24vh);
  max-width: max(10vh, 250px);
}

.div_sponsors_card_silver {
  flex: 27%;
  border-color: #C0C0C0;
  background: #fff1f3;
  min-width: 200px;
  height: auto;
  padding: 20px;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  text-align: center;
  border-style: solid;
  border-radius: 20px;
  box-shadow: 15px 15px 5px 3px rgba(53, 7, 14, 0.2);
  border-width: 4px;
  margin: 0px auto 50px auto;
  width: 75%;
  max-width: 70vh;
  min-width: min(10vw, 280px);
}

.p_card_heading_silver {
  background: #fff1f3;
  color: black;
  font-size: 25px;
  padding: 20px 0px 10px 0px;
}

.img_sponsor_logo_bronze{
  width: max(9vw, 18vh);
  max-width: max(9vh, 200px);
}

.div_sponsors_card_bronze {
  flex: 27%;
  border-color: #cd7f32;
  background: #fff1f3;
  min-width: 200px;
  height: auto;
  padding: 20px;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  text-align: center;
  border-style: solid;
  border-radius: 20px;
  box-shadow: 15px 15px 5px 3px rgba(53, 7, 14, 0.2);
  border-width: 4px;
  margin: 0px auto 50px auto;
  width: 70%;
  max-width: 50vh;
  min-width: min(9vh, 240px);
}

.p_card_heading_bronze {
  background: #fff1f3;
  color: black;
  font-size: 20px;
  padding: 20px 0px 10px 0px;
}

img{
    width: max(18vw, 36vh);
    max-width: max(12vh, 550px);
  }

  .div_page_logo{
    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
  }

  .div_page_name{
    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
  }

  .div_page_description{
    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
    width: 40vw;
    max-width: 1600px;
    font-size: 25px;
  }

  .div_page_description_vertical{
    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
    max-width: 1600px;
  }

  .div_page_container{
    justify-content: center;
    display: flex;
  }

  .div_page_container_vertical{
    margin: 0px 3vh;
  }

  .p_page_name{
    font-size: 35px;
  }

  .p_page_description{
    padding: 0.5vw 1vw;
    font-size: 25px;
  }
</style>