<template>
  <v-container>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Service Offering</th>
          <th class="text-left">Service Description</th>
          <th class="text-left">Mission Priority</th>
          <th class="text-left">Service Hours</th>
          <th class="text-left">Service Targets</th>
        </tr>
      </thead>
      <tbody>
          <tr
            v-for="( offering, Id) in $store.state.serviceOfferings"
            :key="Id"
            @click="getServiceTypes(offering.Service_x0020_Offering)"
          >
            <td>{{ offering.Service_x0020_Offering }}</td>
            <td>{{ offering.Offering_x0020_Description }}</td>
            <td>{{ offering.Mission_x0020_Priority }}</td>
            <td>{{ offering.Service_x0020__x0020_Hours }}</td>
            <td>{{ offering.Service_x0020_Targets }}</td>
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

