<template>
  <section class="container">
    <div id="app">
      <div class="contain">
        <h2>Blog Posts</h2>
        <div class="new">
          <h3>Add a New Post</h3>
          <form @submit.prevent="submitForm">
            <input v-model="newTitle" placeholder="title" required />
            <input v-model="newAuthor" placeholder="author name" required />
            <select v-model="newLabel" required>
              <option disabled value="">Add a New label</option>
              <option>Science</option>
              <option>Math</option>
              <option>Poetry</option>
              <option>History</option>
            </select>
            <button type="submit">Add New Blog Post</button>
          </form>
        </div>

        <select v-model="selected">
          <option disabled value="">Filter with a label</option>
          <option>Science</option>
          <option>Math</option>
          <option>Poetry</option>
          <option>History</option>
        </select>

        <div v-for="post in filterBytpye" class="post" :key="post.title">
          <span class="label">{{ post.label }}</span>
          <p>{{ post.title }}</p>
          <small>{{ post.author }}</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      posts: [
        {
          author: "@vFitzgerald",
          title: "Quod Ducimus Omnis",
          label: "science"
        },
        {
          author: "@mPalmer",
          title: "Vero Eius Laboriosam Ex Repudiandae",
          label: "math"
        },
        {
          author: "@mDean",
          title: "Magnam Odit",
          label: "science"
        },
        {
          author: "@tCole",
          title: "Velit Mollitia Voluptates Assumenda",
          label: "science"
        },
        {
          author: "@jCooper",
          title: "Eum Commodi Cupiditate",
          label: "poetry"
        },
        {
          author: "@lLamb",
          title: "Amet",
          label: "history"
        },
        {
          author: "@fMartin",
          title: "Voluptatem Fuga Cum Asperiores Error",
          label: "science"
        },
        {
          author: "@eHayes",
          title: "Ipsa Consectetur Rerum Repellat Quia",
          label: "math"
        },
        {
          author: "@cCollier",
          title: "Dolor Nihil Delectus",
          label: "science"
        },
        {
          author: "@cBenson",
          title: "Labore Ipsum Ad Pariatur",
          label: "poetry"
        }
      ],
      newTitle: "",
      newAuthor: "",
      newLabel: ""
    };
  },
  methods: {
    submitForm() {
      this.posts.push({
        author: this.newTitle,
        title: this.newAuthor,
        label: this.newLabel
      });
      this.newTitle = "";
      this.newAuthor = "";
      this.newLabel = "";
    }
  },
  computed: {
    filterBytpye() {
      let reg = new RegExp(this.selected, "i");
      return this.posts.filter(el => el.label.match(reg));
    }
  }
};
</script>
