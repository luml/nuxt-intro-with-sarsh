<template>
  <div id="app">
    <h4>Hover us</h4>
    <main>
      <appChild>
        <img
          src="https://images.unsplash.com/photo-1540057357560-ed0ed423cdcd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="first pic"
        />
      </appChild>
      <appChild>
        <img
          src="https://images.unsplash.com/photo-1520182205149-1e5e4e7329b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="second pic"
        />
      </appChild>
      <appChild>
        <img
          src="https://images.unsplash.com/photo-1501421018470-faf26f6b1bef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="third pic"
        />
      </appChild>
      <appChild>
        <img
          src="https://images.unsplash.com/photo-1521911528923-9c3838123490?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="fouth pic"
        />
      </appChild>
    </main>
    <div class="filter">
      <div class="calculator">
        <h2>Tip Calculator</h2>
        <p>
          <strong>Total: {{ customerTotal }}</strong>
        </p>
        <p>15%: {{ customerTotal | tip15 }}</p>
        <p>20%: {{ customerTotal | tip20 }}</p>
        <p>25%: {{ customerTotal | tip25 }}</p>
      </div>
      <div class="originNumber">
        <h2>Chained Filters</h2>
        <p><strong>Original number:</strong> {{ num }}</p>
        <p>plus5: {{ num | plus5 }}</p>
        <p>times2: {{ num | times2 }}</p>
        <p>plus5 then times2: {{ num | plus5 | times2 }}</p>
        <p>times2 then plus5: {{ num | times2 | plus5 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import appChild from "./../components/Child.vue";
export default {
  components: { appChild },
  data() {
    return {
      customerTotal: 35.43,
      num: 2
    };
  },
  filters: {
    tip15(value) {
      return (value * 0.15).toFixed(2);
    },
    tip20(value) {
      return (value * 0.2).toFixed(2);
    },
    tip25(value) {
      return value * (0.25).toFixed(2);
    },
    plus5(value) {
      return value + 5;
    },
    times2(value) {
      return value * 2;
    }
  }
};
</script>
