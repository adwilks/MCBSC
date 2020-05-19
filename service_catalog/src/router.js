import Vue from 'vue'
import Router from 'vue-router'
import Nav from './views/Nav.vue'
import Content from './views/Content.vue'
import Welcome from './views/Welcome.vue'
import Offerings from './views/Offerings.vue'
import Services from './views/Services.vue'
import Service from './views/Service.vue'
import Search from './views/Search.vue'
import Print from './views/Print.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/Print', name: 'Print', components:
      {
        default: Print
      }
    },
    {
      path: '',
      components: {
        'nav-bar': Nav,  
        default: Content
      },
      children: [
        { path: '/', name: 'Home', component: Welcome}, 
        { path: '/ServiceLine', name: 'ServiceLine', component: Offerings}, 
        { path: '/Offering', name: 'Offering', component: Services}, 
        { path: '/Search', name: 'Search', component: Search},
        { path: '/Service', name: 'Service', component: Service},
        { path: '*', name: 'Wildcard', component: Welcome},
      ]
    }
  
  ]
})
