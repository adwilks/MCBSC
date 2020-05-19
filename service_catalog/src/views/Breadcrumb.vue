<template>
  <v-breadcrumbs :items="breadcrumbs">
    <template v-slot:divider>
      <v-icon>{{ chevron }}</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
  import { mdiChevronRight } from '@mdi/js'

export default {
  data: () => ({
    chevron: mdiChevronRight
  }),
  computed:{
    breadcrumbs(){
      return this.$store.state.breadcrumbs
    }
  } 
}
</script>
