<script lang="ts">
  import location_icon from "../assets/img/location.png";
  import calendar_icon from "../assets/img/calendar.png";
  import facebook_icon from "../assets/img/facebook.png";
  import instagram_icon from "../assets/img/instagram.png";
  import linkedin_icon from "../assets/img/linkedin.png";
</script>

<div class="div_about_card">
  <!--Social Media Card-->

  <p class="p_about_heading">Event Information</p>

  <hr class="hr_card_underline" />

  <div class="div_about_line">
    <img src={calendar_icon} class="img_icon" alt="Calendar Icon" />
    <p class="p_about">6-7 Μαΐου</p>
  </div>

  <div class="div_about_line">
    <img src={location_icon} class="img_icon" alt="Location Icon" />
    <p class="p_about">Κτίριο ΗΜΜΥ</p>
  </div>

</div>

<!--Social Media Card-->
<style>
  .div_about_card {
    flex: 33.33%;
    height: 350px;
    padding: 20px;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    text-align: center;
    border-style: solid;
    border-color: #76202e;
    border-radius: 20px;
    background: #fff1f3;
    margin: 0px 2.5vw 0px 5vw;
    box-shadow: 15px 15px 5px 3px rgba(53, 7, 14, 0.2);
  }

  .p_about_heading {
    font-size: 40px;
    font-weight: bold;
    padding: 10px 10px 0px 10px;
    background: #fff1f3;
    color: black;
  }

  .p_about {
    font-size: 20px;
    padding: 5px;
    background: #fff1f3;
    color: black;
    clear: both;
    cursor: pointer;
  }

  .div_about_line {
    justify-content: center;
    display: flex;
    text-align: center;
    background: #fff1f3;
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
    border-top: 1px solid black;
    border-left: none;
    border-right: none;
    width: 400px;
    margin: 5px auto 15px auto;
    width: 350px;
  }
</style>