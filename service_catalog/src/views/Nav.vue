<template>
  <div>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in items">
          <v-layout v-if="item.heading" :key="item.heading" align-center></v-layout>
          <v-list-item v-else :key="item.text" @click="getServiceOfferings(item.text)">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-toolbar-title class="ml-0 pl-4">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          <v-icon>{{ menu }}</v-icon>
        </v-app-bar-nav-icon>
        <span class="hidden-md-and-down">G6 Service Catalog</span>
      </v-toolbar-title>
      <v-spacer class="hidden-md-and-down"></v-spacer>
      <v-text-field
        flat
        solo-inverted
        hide-details
        label="Search"
        class="hidden-xs-and-down"
        v-model="search"
        @keyup.enter="updateSearchQuery(search)"
        @keyup.once="getSearchResults()"
      ></v-text-field>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" v-on:click="updateSearchQuery(search)">
            <v-icon>{{ searchIcon }}</v-icon>
          </v-btn>
        </template>
        <span>Search Services</span>
      </v-tooltip>
      <v-spacer class="hidden-md-and-down"></v-spacer>
            <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" v-on:click="printServiceCatalog()">
            <v-icon>{{ printer }}</v-icon>
          </v-btn>
        </template>
        <span>Print View(coming soon)</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" v-on:click="updateContentView('List')">
            <v-icon>{{ list }}</v-icon>
          </v-btn>
        </template>
        <span>List View</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" v-on:click="updateContentView('Tile')">
            <v-icon>{{ tile }}</v-icon>
          </v-btn>
        </template>
        <span>Tile View</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            href="https://sharepoint.mcipac.usmc.mil/g6"
            alt="Return to SharePoint"
            v-on="on"
          >
            <v-icon>{{exitApp}}</v-icon>
          </v-btn>
        </template>
        <span>Return to G6 SharePoint</span>
      </v-tooltip>
    </v-app-bar>
  </div>
</template>

<script>
import { axiosMixins } from "../mixins/axios";
import {
  mdiAccountBox,
  mdiAccessPointNetwork,
  mdiRadio,
  mdiPhone,
  mdiMenu,
  mdiViewList,
  mdiApps,
  mdiExitToApp,
  mdiMagnify, 
  mdiPrinter
} from "@mdi/js";
export default {
  data: () => ({
    dialog: false,
    drawer: true,
    search: "",
    searchIcon: mdiMagnify,
    menu: mdiMenu,
    list: mdiViewList,
    tile: mdiApps,
    exitApp: mdiExitToApp,
    printer: mdiPrinter,
    items: [
      { icon: mdiAccountBox, text: "End User Services" },
      { icon: mdiAccessPointNetwork, text: "Infastructure Services" },
      { icon: mdiRadio, text: "Land Mobile Radio" },
      { icon: mdiPhone, text: "Telephone Service Branch" }
    ]
  }),
  methods: {
    updateContentView(view) {
      this.$store.commit("updateContentView", view);
    }, 
    updateSearchQuery(query){
      this.$store.commit('addBreadcrumb', {
          index: 1,
          link: {
              'text': "Search",
              'disabled': false,
              'to': 'Search'
          }
      });
      this.$router.push('/Search');
      this.$store.commit('updateSearchQuery', query)
    }
  },
  mixins: [axiosMixins]
};
</script>