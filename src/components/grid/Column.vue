<template>
	<div :class="classNames">
		<slot></slot>
	</div>
</template>

<script>
import gridMethods from './methods.js';

export default{
  name: 'column',
	props: ['small','medium','large','xlarge','xxlarge','background-color','text-color'],
	data() {
		return{
			classNames: ['column'],
		}
	},
	methods: gridMethods.methods,
	created() {
		if(this.$props.small == undefined){
			this.classNames.push('small-full');
		}
		this.classNames.push(this.setClasses(this.$props,this));
		this.classNames.push(this.setWidth(this.$props,this));
	}
}
</script>
