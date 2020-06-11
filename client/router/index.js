import Vue from 'vue';
import VueRouter from 'vue-router';
import Timer from '../pages/Timer';

Vue.use( VueRouter );

const routes = [
	{
		path: '/',
		component: Timer
	}
];

const router = new VueRouter( {
	mode: 'history',
	base: process.env.BASE_URL,
	routes
} );

export default router;
