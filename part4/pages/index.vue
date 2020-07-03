<template>
  <section class="container">
    <div
      id="app"
      :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
      @mousemove="xCoordinate"
    >
      <p>
        <button @click="increment">+</button>
        {{ counter }}
        <button @click="decrement">-</button>
      </p>
      <p>Pixels across: {{ x }}</p>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      counter: 0,
      x: 0
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    xCoordinate(e) {
      this.x = e.clientX;
    }
  }
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  padding: 15vmin;
  font-size: 30px;
  -webkit-transition: 0.2s background-color ease;
  transition: 0.2s background-color ease;
}
</style>
