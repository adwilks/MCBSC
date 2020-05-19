import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // strict: true,
    state: {       
        content: {
            view: "List"
        },
        breadcrumbs: [{
            'text': 'Home',
            'disabled': false,
            'to': 'Home'
        }],
        searchQuery: null,
        serviceOfferings: [],
        serviceTypes: [], 
        searchResults: [], 
        service: {}
    },
    mutations:{
        updateContentView(state, contentView) {
            state.content.view = contentView;
        },
        updateClassView(state, contentClass) {
            state.content.class = contentClass;
        },
        addOffering(state, offering){
            state.serviceOfferings.push(offering);
        }, 
        clearServiceOfferings(state){
            state.serviceOfferings = [];
        }, 
        addServiceType(state, serviceType){
            state.serviceTypes.push(serviceType);
        },
        clearServiceTypes(state){
            state.serviceTypes = [];
        },
        addBreadcrumb(state, crumb){
            state.breadcrumbs.splice(crumb.index, (state.breadcrumbs.length - crumb.index));
            state.breadcrumbs.push(crumb.link);
        }, 
        addSearchResult(state, result){
            state.searchResults.push(result)
        }, 
        updateSearchQuery(state, query){
            state.searchQuery = query;
        },
        setService(state, service){
            state.service = service;
        }
    }
})
