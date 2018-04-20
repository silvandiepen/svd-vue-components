/* eslint-disable */
import Vue from 'vue';
import Navigation from './Navigation.vue';
import NavItem from './NavItem.vue';
import NavGroup from './NavGroup.vue';

const Components = {
	Navigation,
	NavItem,
	NavGroup
}

Object.keys(Components).forEach(key => {
	Vue.component(key, Components[key])
})
