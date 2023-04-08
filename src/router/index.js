import {createRouter, createWebHistory, routerKey} from 'vue-router';

import Home from '../components/Home';
import Metal from '../components/Metal';
import Rent from '../components/Rent';
import Netz from '../components/Netz';
import Specs from '../components/Specs';
import Contact from '../components/Contact';
import Downloads from '../components/Downloads';
import Motors from '../components/Motors';
import EndYear from '../components/EndYear';

const routes=[
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/metal',
        name: 'Metal',
        component: Metal
    },
    {
        path: '/rent',
        name: 'Rent',
        component: Rent
    },
    {
        path: '/netz',
        name: 'Netz',
        component: Netz
    },
    {
        path: '/specs',
        name: 'Specs',
        component: Specs
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/form14.htm',
        name: 'Downloads',
        component: Downloads
    },
    {
        path: '/motors',
        name: 'Motors',
        component: Motors
    },
    {
        path: '/end-year',
        name: 'EndYear',
        component: EndYear
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;