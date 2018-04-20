/* eslint-disable */
import Vue from 'vue';
import Row from './component/Row.vue';
// import Column from './component/Column.vue';

const Components = {
	Row
	// ,Column
}

Object.keys(Components).forEach(key => {
	Vue.component(key, Components[key])
})
