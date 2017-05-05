let Vue = require('../node_modules/vue/dist/vue.js');
import VueRouter from '../node_modules/vue-router/dist/vue-router';


Vue.use(VueRouter);

import app from './pages/app.vue';
import signin from './pages/signin.vue';
import banc from './pages/banc.vue';

const routes = [ 
    { path: '/', name: 'signin', component: signin },
    { path: '/banc', name: 'banc', component: banc },
    { path: '/app', name: 'app', component: app }
];

const router = new VueRouter({
    routes
});

new Vue({
    router
}).$mount('#app');

