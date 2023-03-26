<script lang="ts">
  import email_icon from "../assets/img/email.png";
  import phone_icon from "../assets/img/phone.png";
  import linkedin_icon from "../assets/img/linkedin.png";
</script>

<div class="div_contact_left">
  <!--HO Card-->

  <p class="p_contact_heading">JobFair Head Organizer</p>

  <p class="p_contact_subtitle">Δημήτρης Αναστασούδης</p>

  <hr class="hr_card_underline" style="width: 400px;" />

  <div class="div_contact_line">
    <img src={email_icon} class="img_icon" alt="Email Icon" />

    <p class="p_contact">dimitrisanastasoudis@gmail.com</p>
  </div>
  <!--Email-->

  <div class="div_contact_line">
    <img src={phone_icon} class="img_icon" alt="Phone Icon" />

    <p class="p_contact">+30 698 828 7864</p>
  </div>
  <!--Phone-->

  <div class="div_contact_line">
    <img src={linkedin_icon} class="img_icon" alt="LinkedIn Icon" />

    <p class="p_contact">Dimitris Anastasoudis</p>
  </div>
  <!--LinkedIn-->
</div>

<style>
  .div_contact_left {
    flex: 33.33%;
    /* width: 40%; */
    height: 350px;
    padding: 20px;
    /* margin: 0px 2% 50px 10%; */
    justify-content: center;
    font-family: "Roboto", sans-serif;
    text-align: center;
    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
    background: #76202e;
  }

  .p_contact_heading {
    font-size: 40px;
    font-weight: bold;
    padding: 10px 10px 0px 10px;
    background: #76202e;
    color: white;
  }

  .p_contact_subtitle {
    font-size: 30px;
    padding: 0px 10px 0px 10px;
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
    /*Individual adjustments can be
  found on each card div element*/
  }
</style>
