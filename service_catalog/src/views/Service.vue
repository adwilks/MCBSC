<template>
<v-container>
    <h1 class="text-center display-2">{{ service.oyxi }} </h1>
      <div class="text-right">
        <v-chip label large color="primary" class="ma-2"> Priority: {{service.s4in}} </v-chip>
        <v-chip label large color="secondary" class="ma-2"> Status: {{service.qrgp}}</v-chip>
      </div>
      <v-textarea label="Description" auto-grow readonly="true" :value="service.Description">
      </v-textarea>
      <v-textarea label="Features" auto-grow readonly="true" :value="service.Features">
      </v-textarea>
      <v-textarea label="Configurable Parameters" auto-grow readonly="true" :value="service.Configurable_x0020_Parameters">
      </v-textarea>
      <!-- <p>Customer Units:</p>
      <p>Approval Level:</p>
      <p>Configurable Parameters:</p>
      <p>Assignment Queues: </p> -->
  </v-container>
</template>

<script>
    export default {
    computed: {
        service(){
            return this.$store.state.service
        }
    }
};
</script>