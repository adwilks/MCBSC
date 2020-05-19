<template>
  <div>
      <app-list v-if="listView"></app-list>
      <app-tile v-if="tileView"></app-tile>
  </div>
</template>

<script>
import { viewMixins } from '../mixins/view.js'
import tile from './tile/Offerings.vue'
import list from './list/Offerings.vue'
export default {
	components: {
        appTile: tile,
        appList: list
    }, 
    mixins: [viewMixins]
};
</script>
