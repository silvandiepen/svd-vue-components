<template>
	<div :class="classNames">
		<slot></slot>
	</div>
</template>

<script>
import gridMethods from "../js/methods.js";

export default {
  props: ["center", "background-color", "text-color"],
  data() {
    return {
      classNames: ["row"]
    };
  },
  methods: gridMethods.methods,
  created() {
    this.classNames.push(this.setClasses(this.$props, this));
    this.classNames.push(this.setWidth(this.$props, this));
  }
};
</script>
