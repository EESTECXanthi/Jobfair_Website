<script lang="ts">
  import Line from "./Line.svelte";

  class Sponsor {
    name: string;
  }
  let sponsors: Sponsor[] = [new Sponsor()];
</script>

<Line id={"sponsors"} name={"JobFair Sponsors"} />

<p>Coming soon!</p>

<style>
  p {
    font-size: 30px;
    padding: 5px;
    background: #fff1f3;
    color: black;
    font-family: "Roboto", sans-serif;
    text-align: center;
    margin: 0px auto 5vh auto;
    border-style: solid;
    border-width: 4px;
    border-radius: 20px;
    border-color: #76202e;
    width: 250px;
  }
</style>
