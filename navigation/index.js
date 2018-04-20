/* eslint-disable */
import Vue from 'vue';
import Navigation from './component/Navigation.vue';
import NavItem from './component/NavItem.vue';
import NavGroup from './component/NavGroup.vue';

const Components = {
	Navigation,
	NavItem,
	NavGroup
}

Object.keys(Components).forEach(key => {
	Vue.component(key, Components[key])
})
