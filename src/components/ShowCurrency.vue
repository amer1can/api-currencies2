<template>
  <div class="cur-wrapper">
    <div v-if="this.$store.state.myCurrency === 0">
      <h2>No currency added</h2>
    </div>

    <div v-else class="cur-list d-flex flex-wrap">
        <CurCard v-for="(cur, idx) in this.$store.state.myCurrency" :key="idx" :currency="cur" />
    </div>
  </div>
</template>

<script>
import CurCard from "@/components/CurCard";
export default {
  name: "ShowCurrency",
  components: {CurCard},
  data() {
    return {
      api: '38db08c6c20c307a4a035a2c8fa14002142f5175',
    }
  },
  async mounted() {
    await this.getFromStorage()
  },
  methods: {
    async getFromStorage() {
      const valueArr = [];
      for (let key in localStorage) {
        if (!Object.prototype.hasOwnProperty.call(localStorage, key) || key.length > 5) {
          continue;
        }
        const value = localStorage.getItem(key)
        const dataParse = JSON.parse(value)
        valueArr.push(dataParse.name)
        this.$store.commit('addMyCurrency', dataParse)
      }
      await this.$store.dispatch('addAsyncGlobalCurrency', valueArr.join(','))
    }
  }
}
</script>

<style scoped>
</style>
