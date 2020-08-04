import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import VuexORMAxios from '@vuex-orm/plugin-axios';
import axios from "axios";
import mutations from '@store/mutations';
import actions from '@store/actions';
import getters from '@store/getters';
import timer from '@store/modules/timer';
import User from '@store/models/User';


//VuexORM database setting up

VuexORM.use( VuexORMAxios, {
	axios
} );

const database = new VuexORM.Database();

database.register( User );

const VuexORMPlugin = VuexORM.install( database );

//VuexORM database setting up. End


Vue.use( Vuex );

const initialState = {};

export default new Vuex.Store( {
	state: initialState,
	mutations,
	getters,
	actions,
	modules: {
		timer
	},
	plugins: [ VuexORMPlugin ]
} );






