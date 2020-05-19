<template>
  <v-content>
    <app-breadcrumb ></app-breadcrumb>
    <router-view></router-view>
  </v-content>
</template>

<script>
import Breadcrumb from "./Breadcrumb.vue";

export default {
  components: {
    appBreadcrumb: Breadcrumb,
  }
};
</script>

<style>
  td:hover { 
    cursor: pointer;
  }
  .v-card:hover {
    cursor: pointer;
    transform: scale(1.02);
  }

</style>