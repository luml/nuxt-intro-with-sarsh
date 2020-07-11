<template>
  <section class="container">
    <div id="app">
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="paul" value="Paul" v-model="checkedNames" />
      <label for="paul"> Paul</label>
      <input
        type="checkbox"
        id="george"
        value="George"
        v-model="checkedNames"
      />
      <label for="george"> George</label>
      <input type="checkbox" id="ringo" value="Ringo" v-model="checkedNames" />
      <label for="ringo"> Ringo</label>

      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      checkedNames: []
    };
  }
};
</script>
