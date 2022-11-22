import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'countries',
    component: () => import(/* webpackChunkName: 'list' */ '../views/CountriesList.vue'),
    children: [
      {
        path: ':code',
        name: 'details',
        component: () => import(/* webpackChunkName: 'details' */ '../views/CountriesDetails.vue')
      },
    ]
  }
];

//CUANDO HAGAMOS BUILD DEPLOY NECESITAMOS SI O SI AGREGAR EL PROJECT NAME EN CREATEWEBHISTORY
const router = createRouter({
  history: createWebHistory('/lab-vue-wiki-countries/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;