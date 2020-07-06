<template>
  <div id="childarea">
    <div class="img-contain">
      <div class="overlay">
        <p class="overlay-text">I don't like this one</p>
        <button @click="toggleShow">Replace!</button>
      </div>
      <transition
        name="flip"
        mode="out-in"
        @beforeLeave="beforeLeave(el)"
        @leave="leave(el, done)"
        @beforeEnter="beforeEnter(el)"
        @enter="enter(el, done)"
      >
        <slot v-if="!isShowing"></slot>
        <img
          v-else
          src="https://images.unsplash.com/flagged/photo-1563248101-a975e9a18cc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="replace pic"
        />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  transition: {
    name: "flip",
    mode: "out-in",
    css: false,
    beforeLeave(el) {
      console.log("about before leave");
      console.log(el);
    },
    leave(el, done) {
      console.log("about leave");
      done();
    },
    beforeEnter(el) {
      console.log("about before enter");
    },
    enter(el, done) {
      console.log("about enter");
      done();
    }
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
