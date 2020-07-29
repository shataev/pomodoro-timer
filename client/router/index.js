import Vue from 'vue';
import VueRouter from 'vue-router';
import Timer from '@pages/Timer';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Users from '@pages/Users';

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
	},
	{
		path: '/users',
		component: Users
	}
];

const router = new VueRouter( {
	mode: 'history',
	base: process.env.BASE_URL,
	routes
} );

export default router;
