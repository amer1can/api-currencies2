<template>
  <div class="wrapper">
    <AddCurrency />
    <hr>
    <ShowCurrency />
  </div>
</template>

<script>

import AddCurrency from "@/components/AddCurrency";
import ShowCurrency from "@/components/ShowCurrency";

export default {
  name: 'App',
  components: {
    ShowCurrency,
    AddCurrency
  },
  async beforeMount() {
    // //https://api.pancakeswap.info/api/v2/tokens
    // await fetch('https://currate.ru/api/?get=rates&pairs=USDRUB&key=4f4a64a15c7007c45ba1ffdeb13a2a8b')
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data)
    //     })
  }
}
</script>

<style>
body {
  background-color: #383838!important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0px;
  max-width: 1000px;
}
</style>
