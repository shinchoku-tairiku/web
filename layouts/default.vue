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

    <hr>

    <footer>
      <p>&copy; 進捗大陸 2017 - 2018</p>
    </footer>
  </b-container>
</div>
</template>

<script>
export default {
  data () {
    var current = new Date();
    var ny = new Date(current.getFullYear(), 0);
    return {
      progress: Math.round((current-ny)/1000/60/60/24/365*100),
    }
  },
  head () {
    return {
      title: "進捗大陸",
    }
  }
}
</script>
