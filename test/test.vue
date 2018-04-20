<template>
  <div id="app">
    <row>
      <column small="full">This is a "full" column</column>
      <column small="1">This is a 1 (full) column</column>
      <column small="1:2">This is a 1:2 (half) column</column>
      <column small="half">This is a "half" column</column>
    </row>

  </div>
</template>

<script>
import Vue from 'vue';
module.exports = {
  data: {
    message: 'Hello Vue!'
  }
}
</script>

<style scoped>

  .row{ border: 1px solid red; padding: 1rem; }
  .column{ border: 1px solid blue; padding: 1rem; }

</style>
