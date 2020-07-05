<template>
  <section class="container">
    <div id="app">
      <h3>Let's triggrt this here modal!</h3>
      <button @click="toggleShow">
        <span v-if="isShowing">Hide child</span>
        <span v-else>Show child</span>
      </button>
      <appChild v-if="isShowing" class="modal">
        <button @click="toggleShow">Close</button>
      </appChild>
    </div>
  </section>
</template>

<script>
import appChild from "./../components/Child.vue";
export default {
  components: {
    appChild
  },
  data() {
    return {
      isShowing: false
    };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  }
};
</script>

<style></style>
