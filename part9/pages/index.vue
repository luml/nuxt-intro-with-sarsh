<template>
  <section class="container">
    <div id="app">
      <h3>Let's triggrt this here modal!</h3>
      <button @click="toggleShow">
        <span v-if="isShowing">Hide child</span>
        <span v-else>Show child</span>
      </button>
      <appChild v-id="isShowing" class="modal">
        <button @click="toggleShow">Close</button>
      </appChild>
    </div>
    <script type="text/x-template" id="childarea">
      <div>
      	<h2>Here I am!</h2>
      <slot></slot>
      </div>
    </script>
  </section>
</template>

<script>
const Child = {
  template: "#childarea"
};
export default {
  data() {
    return {
      isShowing: false
    };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  },
  components: {
    appChild: Child
  }
};
</script>

<style></style>
