<template>
  <section>
    <div v-for="(pizza, i) in pizzas" :key="`pizza-${i}`">
      <h2>{{pizza.name}}</h2>
      <h3>Size: {{pizza.size}}</h3>
      <h4>Toppings:</h4>
      <ul>
        <li v-for="(topping, i) in pizza.toppings" :key="`topping-${i}`">
          {{topping}}
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: row;

  div {
    margin: 25px;
  }
}
</style>

<script>
export default {
  props: ["pizzas"]
};
</script>
