<script lang="ts">
  import email_icon from "../assets/img/email.png";
  import phone_icon from "../assets/img/phone.png";
  import linkedin_icon from "../assets/img/linkedin.png";
</script>

<div class="div_contact_card">

  <p class="p_contact_heading">JobFair Head Organizer</p>

  <p class="p_contact_subtitle">Δημήτρης Αναστασούδης</p>

  <hr class="hr_card_underline"/>

  <div class="div_contact_line_container">

    <div class="div_contact_line">
      <img src={email_icon} class="img_icon" alt="Email Icon" />
      <p class="p_contact">dimitrisanastasoudis@gmail.com</p>
   </div>

   <div class="div_contact_line">
      <img src={phone_icon} class="img_icon" alt="Phone Icon" />
      <p class="p_contact">+30 698 828 7864</p>
    </div>

    <div class="div_contact_line">
      <img src={linkedin_icon} class="img_icon" alt="LinkedIn Icon" />
      <p class="p_contact">Dimitris Anastasoudis</p>
    </div>

  </div>

</div>

<style>
  .div_contact_card {
    flex: 33.33%;
    height: 350px;
    padding: 20px;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    text-align: center;
    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
    background: #76202e;
    margin: 0px 2.5vw 0px 5vw;
    box-shadow: 15px 15px 5px 3px rgba(53, 7, 14, 0.2);
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

  .div_contact_line_container{
    margin: auto;
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
    margin: 5px auto 15px auto;
    color: #76202e;
    background: #76202e;
    width: 400px;
  }
</style>
