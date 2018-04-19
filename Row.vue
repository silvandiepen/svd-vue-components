<template>
	<div :class="classNames">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		props: ['center','background-color','text-color'],
		data() {
			return{
				classNames: ['row']
			}
		},
		methods: {
			setClasses: function() {
				let self = this;
				if(this.$props.center !== undefined){
					self.classNames.push('center');
				}
				if(this.$props.backgroundColor){
					self.classNames.push('bg-'+this.$props.backgroundColor);
				}
				if(this.$props.textColor){
					self.classNames.push('color-'+this.$props.textColor);
				}
			}
		},
		created() {
			this.setClasses();
		}
	}
</script>
