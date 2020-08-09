<template>
  <div class="img-contain">
    <div class="overlay">
      <p class="overlay-text">I don't like this one</p>
      <button @click="toggleShow">Replace!</button>
    </div>
    <transition name="flip" mode="out-in">
      <slot v-if="!isShowing"></slot>
      <img
        v-else
        src="https://images.unsplash.com/flagged/photo-1563248101-a975e9a18cc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt="replace pic"
      />
    </transition>
  </div>
</template>

<script>
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
  }
}

</script>
