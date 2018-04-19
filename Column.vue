<template>
	<div :class="classNames">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		props: ['small','medium','large','xlarge','xxlarge','background-color','text-color'],
		data() {
			return{
				classNames: ['column'],
				breakpoints: ['small','medium','large','xlarge','xxlarge']
			}
		},
		methods: {
			setClasses: function(className = null) {
				let self = this;
				if(className !== null){
					self.classNames.push(className);
				}
				if(this.$props.backgroundColor){
					self.classNames.push('bg-'+this.$props.backgroundColor);
				}
				if(this.$props.textColor){
					self.classNames.push('color-'+this.$props.textColor);
				}
			},
			setBreakpoints: function(){
				let self = this;
				for (let i = 0; i < this.breakpoints.length; ++i) {
					if(self.$props[self.breakpoints[i]] != undefined){
						let value = self.calcBreakpoint(self.$props[self.breakpoints[i]]);
						this.setClasses(self.breakpoints[i]+'-' + value);
					}
				}
			},
			calcBreakpoint(bp){
				let value = '';
				let partials = {
					'full': 1,
					'half': 0.5,
					'third': 0.33,
					'quarter': 0.25,
					'fifth': 0.2,
					'sixth': 0.16,
					'two-third': 0.67,
					'three-quarter': 0.75,
				}
				if(bp.split(':').length > 1){
					value = Math.round(( bp.split(':')[0] / bp.split(':')[1] ) * 100) / 100;
				} else if(Number(bp) > 0) {
					value = Math.round(Number(bp) * 100) / 100;
				}
				Object.keys(partials).forEach(function(key) {
						if(value == partials[key]){
							value = key;
						}
				});
				return value;
			}
		},
		created() {
			this.setClasses();
			this.setBreakpoints();
		}
	}
</script>
