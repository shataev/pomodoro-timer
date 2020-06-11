import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use( Vuex );

const initialState = {
	duration: 1,
	tomatoCount: 0
};

export default new Vuex.Store( {
	state: initialState,
	mutations,
	getters,
	actions
} );
