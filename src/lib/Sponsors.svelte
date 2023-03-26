<script lang="ts">
  import Line from "./Line.svelte";

  class Sponsor {
    name: string;
  }
  let sponsors: Sponsor[] = [new Sponsor()];
</script>

<Line id={"sponsors"} name={"Sponsors"} />

<style>
</style>
