//Central Repository for Axios Calls to SharePoint Lists
//20190909 Unable to Query SharePoint List using ?$filter=substringof as documented..changing plan.
/* eslint-disable no-console */

import axios from "axios";
// important: SharePoint returns XML by default..we don't want XML we want JSON
axios.defaults.headers.common["accept"] = "application/json;odata=verbose"

export const axiosMixins = {
    methods: {
        //Query to filter Service Offerings by selected Service Line
        async getServiceOfferings(serviceLine) {
            try {
                this.$router.push('/ServiceLine')
                this.$store.commit('clearServiceOfferings');             
                this.$store.commit('addBreadcrumb', {
                    index: 1, 
                    link: {
                        'text': serviceLine,
                        'disabled': false,
                        'to': 'ServiceLine'
                    }
                });
                const res = await axios.get(`https://sharepoint.mcipac.usmc.mil/g6/internal/csb/_api/web/lists/getByTitle('Service Catalog')/items?$filter=Title eq '${serviceLine}'`)
                const data = res.data.d.results;
                console.log(data);
                for (let key in data) {
                    const offering = data[key];
                    this.$store.commit('addOffering', offering);
            }
            } catch (error) {
                console.log(error);
            }
        }, 
        async getServiceTypes(serviceOffering){
            try {
                this.$router.push('/Offering')
                this.$store.commit('clearServiceTypes');
                this.$store.commit('addBreadcrumb', {
                    index: 2,
                    link: {
                        'text': serviceOffering,
                        'disabled': false,
                        'to': 'Offering'
                    }
                });
                const res = await axios.get(`https://sharepoint.mcipac.usmc.mil/g6/internal/csb/_api/web/lists/getByTitle('Orderable Services')/items?$filter=Title eq '${serviceOffering}'`)
                const data = res.data.d.results;
                console.log(data)
                for (let key in data) {
                    const serviceType = data[key];
                    this.$store.commit('addServiceType', serviceType);
            }
            } catch (error) {
                console.log(error);
            }
        },
        getService(service){
            this.$router.push('/Service')
            this.$store.commit('addBreadcrumb', {
                index: 3,
                link: {
                    'text': service.oyxi,
                    'disabled': false,
                    'to': 'Service'
                }
            });
            this.$store.commit('setService', service);
        },
        async printServiceCatalog(){
            try {
                this.$router.push('/Print');
                //looping through and creating nested data structure
                const res = await axios.get(`https://sharepoint.mcipac.usmc.mil/g6/internal/csb/_api/web/lists/getByTitle('Service Catalog')/items?$Select=Title`)
                const data = res.data.d.results;
                for (let key in data) {
                    console.log(key);
                }
            } catch (error){
                console.log(error);
            }
        },
        async getSearchResults(){
            try {
                if(this.$store.state.searchResults.length === 0){
                    const res = await axios.get(`https://sharepoint.mcipac.usmc.mil/g6/internal/csb/_api/web/lists/getByTitle('Orderable Services')/items`);
                    const data = res.data.d.results;
                    console.log(data);
                    for (let key in data) {
                        const result = data[key];
                        this.$store.commit('addSearchResult', result);
                    }
                }
            } catch (error){
                console.log(error);
            }
        }
    },
    computed: {
        filteredSearchResults(){
                return this.$store.state.searchResults.filter(service => service.oyxi.toLowerCase().indexOf(this.$store.state.searchQuery.toLowerCase()) !== -1);
        }
    }
}