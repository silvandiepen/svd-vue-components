import settings from "../settings.json";
import vue from "vue";

let classNames;

export default {
  methods: {
    setClasses: function(props, _this) {
      let classNames = [];
      // If its just a single value;
      if (typeof props === "string") {
        classNames.push(props);
      } else if (typeof props == "object") {
        // Set the classes coming from $props
        if (props.backgroundColor) {
          classNames.push("bg-" + props.backgroundColor);
        }
        if (props.textColor) {
          classNames.push("color-" + props.textColor);
        }
        if (props.center !== undefined && props.center !== false) {
          classNames.push("center");
        }
      }
      // Return the whole shebang.
      return classNames;
    },
    setWidth: function(props, _this) {
      let classNames = [];
      for (let i = 0; i < settings.breakpoints.length; ++i) {
        if (props[settings.breakpoints[i]] != undefined) {
          let value = this.calcWidth(props[settings.breakpoints[i]]);
          classNames.push(settings.breakpoints[i] + "-" + value);
        }
      }
      return classNames;
    },
    /*
      Calculate the width and return a
    */
    calcWidth: function(bp) {
      let value = "";
      if (bp.split(":").length > 1) {
        value = this.getWidth(
          Math.round(bp.split(":")[0] / bp.split(":")[1] * 100) / 100
        );
      } else if (Number(bp) > 0) {
        value = this.getWidth(Math.round(Number(bp) * 100) / 100);
      } else if (bp in partials) {
        value = bp;
      } else {
        console.warn("${bp} is not a valid width.");
      }
      return value;
    },
    getWidth: function(value) {
      Object.keys(settings.partials).forEach(function(key) {
        if (value == settings.partials[key]) {
          value = key;
        }
      });
      return value;
    }
  }
};
