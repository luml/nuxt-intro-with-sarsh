<template>
  <div id="app">
    <h3>Hover us</h3>
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
  </div>
</template>

<script>
import appChild from "./../components/Child.vue";
export default {
  components: { appChild }
};
</script>
