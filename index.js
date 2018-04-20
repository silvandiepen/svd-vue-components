import Vue from 'vue';
import Row from './grid/component/Row.vue';
import Column from './grid/component/Column.vue';
import Navigation from './navigation/Navigation.vue';
import NavItem from './navigation/NavItem.vue';
import NavGroup from './navigation/NavGroup.vue';

const Components = {
	Row,
	Column,
	Navigation,
	NavItem,
	NavGroup
};

Object.keys(Components).forEach(key => {
	Vue.component(key, Components[key]);
});
