<template>
  <section class="container">
    <div id="app">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/vue-post-photo.jpg"
        class="main-photo"
      />
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/vue-main-profile.jpg"
        class="main-profile"
      />
      <div class="main-info">
        <span class="name">Julianne Delfina</span>
        <h3>"It's lovely after it rains"</h3>
      </div>
      <hr />
      <ul>
        <li
          is="individualComment"
          v-for="comment in comments"
          v-bind:commentpost="comment"
          :key="comment"
        ></li>
      </ul>
      <input
        v-model="newComment"
        v-on:keyup.enter="addComment"
        placeholder="Add a comment"
      />
    </div>
  </section>
</template>

<script>
import individualComment from "./../components/individual-comment.vue";
export default {
  components: {
    individualComment
  },
  data() {
    return {
      newComment: "",
      comments: ["Looks great Julianne!", "I love the sea", "Where are you at?"]
    };
  },
  methods: {
    addComment: function() {
      this.comments.push(this.newComment);
      this.newComment = "";
    }
  }
};
</script>

<style></style>
