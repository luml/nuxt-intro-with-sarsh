<template>
  <div class="wrapper">
    <div :style="{ display: isDispensing ? 'block' : 'none' }" class="loading-state">
      <Gears />
      <h2>Dispensing...</h2>
    </div>
    <div class="loading-state" :style="{ display: isRestocking ? 'block' : 'none' }"></div>
  </div>
</template>

<script>
import Gears from "./Gears.vue";
import Cart from "./Cart.vue";
import Chips from "./Chips.vue";
import Machine from './Machine.vue'
import { mapState, mapActions } from "vuex";

export default {
  name: "Vender",
  components: {
    Gears,
    Cart,
    Chips,
    Machine
  },
  computed: {
    ...mapState([
      "supply",
      "isRestocking",
      "isDispensing",
      "isCheckingMachine"
    ]),
    isInLoadingState() {
      return this.isRestocking || this.isDispensing || this.isCheckingMachine;
    }
  },
  methods: {
    ...mapActions({
      dispense: "dispense",
      restock: "fetchFromInventory"
    })
  }
};
</script>