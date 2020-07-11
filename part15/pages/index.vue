<template>
  <section class="container">
    <div id="app">
      <span v-for="option of options" :key="option.value">
        <input
          :id="option.vlaue"
          :value="option.value"
          v-model="checkedNames"
          type="checkbox"
        />
        <label for="option.value">{{ option.value }}</label>
      </span>

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
      checkedNames: [],
      options: [
        { value: "John" },
        { value: "Paul" },
        { value: "George" },
        { value: "Ringo" }
      ]
    };
  }
};
</script>
