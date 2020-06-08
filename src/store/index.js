import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use( Vuex );

const initialState = {
	duration: 30,
	time: '00:00'
};

export default new Vuex.Store( {
	state: initialState,
	mutations,
	getters,
	actions
} );
