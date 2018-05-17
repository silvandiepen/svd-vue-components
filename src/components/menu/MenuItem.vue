<template>
	<li :class="module + '__item ' + classNames.item">
		<a v-if="smooth && !to" :class="module + '__link ' + classNames.link" :href="theLink" v-smooth-scroll>
			<span :class="module + '__text ' + classNames.text">
				{{text}}
			</span>
		</a>
		<a v-if="!smooth && !to" :class="module + '__link ' + classNames.link" :href="theLink">
			<span :class="module + '__text ' + classNames.text">
				{{text}}
			</span>
		</a>
		<nuxt-link v-if="to" :class="module + '__link ' + classNames.link" :to="theLink">
			<span :class="module + '__text ' + classNames.text">
				{{text}}
			</span>
		</nuxt-link>
		<slot></slot>
	</li>
</template>

<script>
import Vue from "vue";
import vueSmoothScroll from "vue-smooth-scroll";
Vue.use(vueSmoothScroll);

export default {
  name: "menu-item",
  props: ["mod", "text", "link", "to", "smooth"],
  data() {
    return {
      module: "nav",
      theLink: "#",
      smoothScroll: false,
      classNames: {
        item: [],
        link: [],
        text: []
      }
    };
  },
  created() {
    if (this.$parent.$parent.$attrs.module) {
      this.module = this.$parent.$parent.$attrs.module;
    }
    if (this.$props.link) {
      this.theLink = this.$props.link;
    }
    if (this.$props.to) {
      this.theLink = this.$props.to;
    }
    if (this.$props.smooth) {
      this.smoothScroll = true;
    }
  }
};
</script>
