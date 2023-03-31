<script lang="ts">
  import email_icon from "../assets/img/icons/email.png";
  import facebook_icon from "../assets/img/icons/facebook.png";
  import instagram_icon from "../assets/img/icons/instagram.png";
  import linkedin_icon from "../assets/img/icons/linkedin.png";
  import website_icon from "../assets/img/icons/website.png";
</script>
<!-- svelte-ignore a11y-invalid-attribute -->

<div class="div_contact_card">

  <p class="p_contact_heading">Social Media</p>

  <hr class="hr_card_underline" />

  <div class="div_contact_line">
    <img src={website_icon} class="img_icon" alt="Website Icon" />
    <p class="p_contact"><a href="#">eestec.ee.duth.gr</a></p>
  </div>

  <div class="div_contact_line">
    <img src={email_icon} class="img_icon" alt="Email Icon" />
    <p class="p_contact"><a href="mailto:jobfair.eesteclcxanthi@gmail.com" target="_blank">jobfair.eesteclcxanthi@gmail.com</a></p>
  </div>

  <div class="div_contact_line">
    <img src={facebook_icon} class="img_icon" alt="Facebook Icon" />
    <p class="p_contact"><a href="https://facebook.com/jobfairlcxanthi/" target="_blank">JobFair-EESTEC LC Xanthi</a></p>
  </div>

  <div class="div_contact_line">
    <img src={instagram_icon} class="img_icon" alt="Instagram Icon" />
    <p class="p_contact"><a href="https://instagram.com/jobfair_xanthi/" target="_blank">@jobfair_xanthi</a></p>
  </div>

  <div class="div_contact_line">
    <img src={linkedin_icon} class="img_icon" alt="LinkedIn Icon" />
    <p class="p_contact"><a href="https://linkedin.com/company/eesteclcxanthi/" target="_blank">EESTEC LC Xanthi</a></p>
  </div>

</div>

<style>
  a{
    color: white;
  }

  .div_contact_card {
    flex: 30%;
    width: 80vw;
    height: 350px;
    padding: 20px;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    text-align: center;
    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
    background: #76202e;
    margin: 0px 4% 50px 4%;
    box-shadow: 15px 15px 5px 3px rgba(53, 7, 14, 0.2);
  }

  .p_contact_heading {
    font-size: 40px;
    font-weight: bold;
    padding: 10px 10px 0px 10px;
    background: #76202e;
    color: white;
  }

  .p_contact {
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
