<template>
<div>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">進捗大陸</b-navbar-brand>
  </b-navbar>

  <b-jumbotron bg-variant="secondary" text-variant="white" border-variant="dark" :fluid="true">
    <template slot="header">
      進捗大陸
    </template>
    <template slot="lead">
      進捗は、そこにあります
    </template>
    <b-progress :value="progress" variant="success" striped :animated="true" class="mb-2"></b-progress>
  </b-jumbotron>

  <b-container>
    <nuxt/>
  </b-container>

  <hr>

  <footer>
    <p>&copy; 進捗大陸 2017 - 2018</p>
  </footer>
</div>
</template>

<script>
export default {
  data () {
    return {
      progress: 60,
    }
  },
  head () {
    return {
      title: "進捗大陸",
    }
  }
}
</script>
