<template>
  <section class="container">
    <div>
      <h1 class="title">
        PIZZA TIME
      </h1>
      <h2 class="subtitle">
        An attempt to smash a nuxt app with azure functionality using progressive web application enhancements...with pizza?
      </h2>
    </div>
    <pizzas :pizzas="$store.state.pizzas"></pizzas>
  </section>
</template>

<script>
import Pizzas from "~/components/pizzas.vue";
import store from "~/store";

export default {
  components: {
    Pizzas
  },
  async fetch({ store, params }) {
    await store.dispatch("GET_PIZZAS");
  }
};
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
}
</style>
