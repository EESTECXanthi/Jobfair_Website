<script lang="ts">
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  import Checkbox from "@smui/checkbox";
  import FormField from "@smui/form-field";

  let prominent = false;
  let dense = false;
  let secondaryColor = false;
</script>

<div class="nav_bar">
  <TopAppBar
    variant="static"
    class="nav_bar"
    {prominent}
    {dense}
    color={secondaryColor ? "secondary" : "primary"}
  >
    <Row>
      <Section>
        <IconButton class="material-icons">menu</IconButton>
        <Title>Static</Title>
      </Section>
      <Section align="end" toolbar>
        <IconButton class="material-icons" aria-label="Download"
          >file_download</IconButton
        >
        <IconButton class="material-icons" aria-label="Print this page"
          >print</IconButton
        >
        <IconButton class="material-icons" aria-label="Bookmark this page"
          >bookmark</IconButton
        >
      </Section>
    </Row>
  </TopAppBar>
</div>

<style>
  /* @media (max-width: 4800px) {
    .top-app-bar-container {
      margin-right: 0;
    }
  }

  .nav_bar {
    min-height: 100vh !important;
    max-height: 100vh;
  } */
</style>
