<template>
  <section class="container">
    <div id="app">
      <h3>What is your favorite kind of taco?</h3>
      <p><input v-model="tacos" /></p>
      <p v-bind="tacos">{{ tacos }}</p>
      <span v-pre
        >This is good if I need to show the mustache view of {{ tacos }}</span
      >
      <pre>{{ $data }}</pre>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tacos: "I like Al Pastor tacos",
      documents: "It's good to read, start it with us",
      tips: "<code>heya</code>"
    };
  }
};
</script>
