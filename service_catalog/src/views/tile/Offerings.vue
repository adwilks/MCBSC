<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex md3 v-for="(offering,Id) in $store.state.serviceOfferings" v-bind:key="Id">
          <v-card @click="getServiceTypes(offering.Service_x0020_Offering)" class="v-card">
            <v-card-title class="headline">{{ offering.Service_x0020_Offering }}</v-card-title>
            <v-card-text>
              {{offering.Offering_x0020_Description}} <br>
            </v-card-text>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { axiosMixins } from '../../mixins/axios';
export default {
  mixins: [axiosMixins]
}
</script>

