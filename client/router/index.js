import Vue from 'vue';
import VueRouter from 'vue-router';
import Timer from '../pages/Timer';
import Login from '../pages/Login';
import Register from '../pages/Register';

Vue.use( VueRouter );

const routes = [
	{
		path: '/',
		component: Timer
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/register',
		component: Register
	}
];

const router = new VueRouter( {
	mode: 'history',
	base: process.env.BASE_URL,
	routes
} );

export default router;
