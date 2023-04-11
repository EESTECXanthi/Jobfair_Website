<script lang="ts">
  import email_icon from "../assets/img/icons/email.svg";
  import facebook_icon from "../assets/img/icons/facebook.svg";
  import instagram_icon from "../assets/img/icons/instagram.svg";
  import linkedin_icon from "../assets/img/icons/linkedin.svg";
  import website_icon from "../assets/img/icons/website.svg";
</script>

<!-- svelte-ignore a11y-invalid-attribute -->

<div class="div_contact_card global_div_card">
  <p class="p_card_heading">Social Media</p>

  <hr class="hr_card_underline" />

  <div class="div_contact_line">
    <img src={website_icon} class="img_icon" alt="Website Icon" />
    <p class="p_card global_p_card"><a href="#">jobfair.eestecxanthis.gr</a></p>
  </div>

  <div class="div_contact_line">
    <img src={email_icon} class="img_icon" alt="Email Icon" />
    <p class="p_card global_p_card">
      <a href="mailto:jobfair.eesteclcxanthi@gmail.com" target="_blank"
        >jobfair.eesteclcxanthi@gmail.com</a
      >
    </p>
  </div>

  <div class="div_contact_line">
    <img src={facebook_icon} class="img_icon" alt="Facebook Icon" />
    <p class="p_card global_p_card">
      <a href="https://facebook.com/jobfairlcxanthi/" target="_blank"
        >JobFair-EESTEC LC Xanthi</a
      >
    </p>
  </div>

  <div class="div_contact_line">
    <img src={instagram_icon} class="img_icon" alt="Instagram Icon" />
    <p class="p_card global_p_card">
      <a href="https://instagram.com/jobfair_xanthi/" target="_blank"
        >@jobfair_xanthi</a
      >
    </p>
  </div>

  <div class="div_contact_line">
    <img src={linkedin_icon} class="img_icon" alt="LinkedIn Icon" />
    <p class="p_card global_p_card">
      <a href="https://linkedin.com/company/eesteclcxanthi/" target="_blank"
        >EESTEC LC Xanthi</a
      >
    </p>
  </div>

  <div class="div_contact_line">
    <img src={website_icon} class="img_icon" alt="Website Icon" />
    <p class="p_card global_p_card">
      <a href="https://ee.duth.gr/" target="_blank">ee.duth.gr</a>
    </p>
  </div>
</div>

<style>
  a {
    color: white;
  }

  .div_contact_card {
    flex: 30%;
    border-color: #76202e;
    background: #76202e;
  }

  .p_card_heading {
    font-size: 40px;
    font-weight: bold;
    padding: 10px 10px 0px 10px;
    background: #76202e;
    color: white;
  }

  .p_card {
    font-size: 20px;
    padding: 5px;
    background: #76202e;
    color: white;
    clear: both;
    cursor: pointer;
  }

  .div_contact_line {
    justify-content: center;
    display: flex;
    text-align: center;
    background: #76202e;
    padding: 5px;
  }

  .img_icon {
    margin: 7px 5px 0px 5px;
    border: none;
    width: 20px;
    height: 20px;
    clear: both;
    filter: brightness(0) invert(1);
  }

  .hr_card_underline {
    border-top: 5px white;
    border-left: none;
    border-right: none;
    width: 400px;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    color: #76202e;
    background: #76202e;
    margin-bottom: 15px;
    width: 40%;
  }
</style>
