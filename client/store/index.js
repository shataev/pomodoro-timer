import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import timer from './timer/index';

Vue.use( Vuex );

const initialState = {};

export default new Vuex.Store( {
	state: initialState,
	mutations,
	getters,
	actions,
	modules: {
		timer
	}
} );






