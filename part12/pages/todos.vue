<template>
  <ul>
    <li v-for="todo in todos" :key="todo.text">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button v-if="todo.done" @click="delete todo.text">Remove</button>
    </li>
    <li>
      <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
    </li>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    todos() {
      return this.$store.state.todos.list;
    }
  },
  methods: {
    addTodo(e) {
      this.$store.commit("todos/add", e.target.value);
      e.target.value = "";
    },
    ...mapMutations({
      toggle: "todos/toggle",
      delete: "todos/remove"
    })
    // delete(e) {
    //   this.$store.commit("todos/remove", {
    //     text: e.target.value,
    //     done: true
    //   });
    // }
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
