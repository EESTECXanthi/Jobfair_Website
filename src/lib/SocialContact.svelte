<script lang="ts">
  import email_icon from "../assets/img/email.png";
  import facebook_icon from "../assets/img/facebook.png";
  import instagram_icon from "../assets/img/instagram.png";
  import linkedin_icon from "../assets/img/linkedin.png";
  import website_icon from "../assets/img/website.png";
</script>

<div class="div_contact_right">
  <!--Social Media Card-->

  <p class="p_contact_heading">Social Media</p>

  <hr class="hr_card_underline" />

  <div class="div_contact_line">
    <img src={website_icon} class="img_icon" alt="Website Icon" />

    <p class="p_contact">[URL PENDING]</p>
  </div>
  <!--Website-->

  <div class="div_contact_line">
    <img src={email_icon} class="img_icon" alt="Email Icon" />

    <p class="p_contact">jobfair.eesteclcxanthi@gmail.com</p>
  </div>
  <!--Email-->

  <div class="div_contact_line">
    <img src={facebook_icon} class="img_icon" alt="Facebook Icon" />

    <p class="p_contact">JobFair-EESTEC LC Xanthi</p>
  </div>
  <!--Facebook-->

  <div class="div_contact_line">
    <img src={instagram_icon} class="img_icon" alt="Instagram Icon" />

    <p class="p_contact">@jobfair_xanthi</p>
  </div>
  <!--Instagram-->

  <div class="div_contact_line">
    <img src={linkedin_icon} class="img_icon" alt="LinkedIn Icon" />

    <p class="p_contact">EESTEC LC Xanthi</p>
  </div>
  <!--LinkedIn-->
</div>

<!--Social Media Card-->
<style>
  .div_contact_right {
    flex: 33.33%;
    /* width: 40%; */
    height: 350px;
    padding: 20px;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    text-align: center;
    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
    background: #76202e;
    margin: 0px 5vw 0px 2.5vw;
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
    margin: 6px 5px 0px 5px;
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
    width: 250px;
  }
</style>
