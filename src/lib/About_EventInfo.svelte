<script lang="ts">
  import calendar_icon from "../assets/img/icons/calendar.png";
  import location_icon from "../assets/img/icons/location.png";
  import building_icon from "../assets/img/icons/building.png";
</script>

<div class="div_about_card global_div_card">

  <p class="p_about_heading">Event Information</p>

  <hr class="hr_card_underline" />

  <div class="div_about_line">
    <img src={calendar_icon} class="img_icon" alt="Calendar Icon" />
    <p class="p_about">6-7 Μαΐου 2023</p>
  </div>

  <div class="div_about_line">
    <img src={location_icon} class="img_icon" alt="Location Icon" />
    <p class="p_about">Πανεπιστημιούπολη Ξάνθης</p>
  </div>

  <div class="div_about_line">
    <img src={building_icon} class="img_icon" alt="Location Icon" />
    <p class="p_about">Κτίριο ΗΜΜΥ</p>
  </div>

</div>

<style>
  .div_about_card {
    flex: 30%;
    border-color: #76202e;
    background: #fff1f3;
    border-width: 7px;
  }

  .p_about_heading {
    font-size: 40px;
    font-weight: bold;
    background: #fff1f3;
    color: black;
  }

  .p_about {
    font-size: 30px;
    padding: 5px;
    background: #fff1f3;
    color: black;
    clear: both;
  }

  .div_about_line {
    justify-content: center;
    display: flex;
    text-align: center;
    background: #fff1f3;
    padding: 5px;
  }

  .img_icon {
    margin: 7px 5px 0px 5px;
    border: none;
    width: 30px;
    height: 30px;
    clear: both;
  }

  .hr_card_underline {
    border-top: 1px solid black;
    border-left: none;
    border-right: none;
    width: 400px;
    margin: 5px auto 10px auto;
    width: 40%;
  }
</style>