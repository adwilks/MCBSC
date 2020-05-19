<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex md3 v-for="(service,Id) in filteredSearchResults" v-bind:key="Id">
        <v-card class="v-card" @click="getService(service)">
          <v-card-title class="headline">{{ service.oyxi }}</v-card-title>
          <v-card-text>
            {{ service.Description }} <br>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { axiosMixins } from '../../mixins/axios';
export default {
  mixins: [axiosMixins], 
}
</script>

