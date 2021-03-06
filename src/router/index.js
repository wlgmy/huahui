import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import { createListView } from '../views/CreateListView'
// import ItemView from '../views/ItemView.vue'
// import UserView from '../views/UserView.vue'
import HomeView from '../views/Home.vue'
import CaseListView from '../views/CaseList.vue'
import Product from '../views/Product.vue'
import Aboutus from '../views/Aboutus.vue'
import Cooperation from '../views/Cooperation.vue'
import Solution from '../views/Solution.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    // { path: '/top/:page(\\d+)?', component: createListView('top') },
    // { path: '/new/:page(\\d+)?', component: createListView('new') },
    // { path: '/show/:page(\\d+)?', component: createListView('show') },
    // { path: '/ask/:page(\\d+)?', component: createListView('ask') },
    // { path: '/job/:page(\\d+)?', component: createListView('job') },
    // { path: '/item/:id(\\d+)', component: ItemView },
    // { path: '/user/:id', component: UserView },
    // { path: '/', redirect: '/top' },
      { path: '', component: HomeView, name: 'home' },
      { path: '/home', component: HomeView, name: 'home' },
      { path: '/caselist', component: CaseListView, name: 'case' },
      { path: '/product', component: Product, name: 'product' },
      { path: '/aboutus', component: Aboutus, name: 'aboutus' },
      { path: '/cooperation', component: Cooperation, name: 'cooperation' },
      { path: '/solution', component: Solution, name: 'solution' }
  ]
})
