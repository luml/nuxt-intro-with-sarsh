<template>
  <main>
    <p>Total 🌭 {{supply}}</p>
    <button @click="dispense">-</button>
    <button @click="restock">+</button>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Supplier',
  computed: {
    supply() {
      return this.$store.state.supply
    }
  },
  methods: {
    ...mapActions({
      dispense: 'dispense',
      restock: 'restock',
    })

    // dispense() {
    //   this.$store.dispense('dispense')
    // },
    // restock() {
    //   this.$store.dispatch('restock')
    // }
  }
};
</script>
