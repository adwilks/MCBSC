<template>
  <v-container>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Service Type</th>
          <th class="text-left">Description</th>
          <th class="text-left">Status</th>
          <th class="text-left">Priority</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="( service, Id) in filteredSearchResults"
          :key="Id" @click="getService(service)"
        >
          <td>{{ service.oyxi }}</td>
          <td>{{ service.Description }}</td>
          <td>{{ service.qrgp }}</td>
          <td>{{ service.s4in }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
import { axiosMixins } from '../../mixins/axios';
export default {
	mixins: [axiosMixins],
};
</script>
