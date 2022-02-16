<template>
  <div v-if="!currency" class="waiting">
    <img src="../assets/waiting.gif" alt="">
  </div>
  <div v-else class="cur-card text-white">
    <div class="cur-head d-flex justify-content-between align-items-center">
      <img :src="getLogo" class="cur-logo">
      <h2><span class="cur-rank">#{{ getRank }}</span>{{ currency.name }}</h2>
      <button class="btn btn-danger cur-del" @click="deleteCur(currency.name)">x</button>
    </div>

    <h1>{{ currency.value }}</h1>
    <hr>
    <h6>Add date: {{ currency.addDate }}</h6>
    <h6>USD: ${{ multiple }}</h6>
  </div>
</template>

<script>
export default {
  name: "CurCard",
  props: ['currency'],
  data() {
    return {
    }
  },
  computed: {
    multiple() {
      if (this.currency) {
        let globCur = this.$store.state.globalCurrency.find(elem => elem.currency === this.currency.name)
        return (globCur?.price * this.currency.value).toFixed(3)
      } else return 0
    },
    getLogo() {
      if (this.currency) {
        const logo = this.$store.state.globalCurrency.find(elem => elem.currency === this.currency.name)
        return logo?.logo_url
      }
      return 0
    },
    getRank() {
      if (this.currency) {
        const rank = this.$store.state.globalCurrency.find(elem => elem.currency === this.currency.name)
        return rank?.rank
      }
      return 0
    }
  },
  methods: {
    deleteCur(cur) {
      let findInd = this.$store.state.myCurrency.findIndex(elem => elem.name === cur)
      this.$store.state.myCurrency.splice(findInd,1)
      findInd = this.$store.state.globalCurrency.findIndex(elem => elem.id === cur)
      this.$store.state.globalCurrency.splice(findInd,1)
      delete localStorage[cur]
    }
  }
}
</script>

<style scoped>
.cur-card {
  margin: 10px;
  padding: 10px;
  border: 1px solid lightpink;
  border-radius: 15px;
  flex-basis: 30%;
}
.cur-card:hover .cur-del{
  visibility: visible;
  opacity: 1;
  transition: all 0.3s ease-in-out;
}
.cur-head img {
  width: 30px;
  height: 30px;
}
.cur-head h2 {
  margin-right: 5px;
}
.cur-rank {
  margin-right: 5px;
  font-size: 14px;
  color: coral;
}
.cur-del {
  visibility: hidden;
  opacity: 0;
  position: relative;
  top: -10px;
  padding: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid white;
  transition: all 0.3s ease-in-out;
}
</style>
