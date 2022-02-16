<template>
  <div class="add-cur-wrap">
    <div class="d-flex">
      <input class="form-control mx-1" type="text" placeholder="Currency" v-model="cur">
      <input class="form-control mx-1" type="number" placeholder="Value" v-model="val">
    </div>
    <button class="btn btn-dark mt-2 w-100" @click="addCurrency(cur.toUpperCase(), val)">Add currency</button>
  </div>
</template>

<script>
export default {
  name: "AddCurrency",
  data() {
    return {
      cur: '',
      val: '',
    }
  },
  mounted() {
  },
  computed: {
    checkName() {
      return (2 <= this.cur.length <= 5)
    },
    checkValue() {
      return this.val !== 0
    }
  },
  methods: {
    addCurrency(cur, val) {
      //проверяем что данные введены правильно
      if ((2 <= cur.length <= 5) && val !== 0) {
        //проверяем что валюта есть в API базе и еще нет на странице
        if (this.checkIfCurrencyHasGlobal(cur) && !this.checkCurrencyLocal(cur)) {
          const data = {
            name: cur,
            value: val,
            addDate: this.getDate(),
          }
          this.$store.commit('addCurrency', data)
          this.cur = ''
          this.val = ''

          //пишем в localStorage
          const dataToJson = JSON.stringify(data)
          localStorage.setItem(cur, dataToJson)

        } else if (this.checkCurrencyLocal(cur)) {
          alert('Already have this currency!')
        } else if (!this.checkIfCurrencyHasGlobal(cur)) {
          alert('Can\'t fetch this currency!')
        }
      }
    },
    getDate() {
      const date = new Date();
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return `${day}/${month}/${year}`
    },
    async checkIfCurrencyHasGlobal(cur) {
      const api = "38db08c6c20c307a4a035a2c8fa14002142f5175"
      try {
        await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${api}&ids=${cur}&interval=1d,30d`)
            .then(response => response.json())
            .then(data => {
              if (data.length === 0){
                return false
              }
              this.$store.dispatch('addAsyncGlobalCurrency', cur)
              return true
            })
      } catch(err) {
        console.log('CheckErr', err)
      }
    },
    checkCurrencyLocal(cur) {
      return this.$store.state.myCurrency.find(elem => elem.name === cur)
    }
  }
}
</script>

<style scoped>
.add-cur-wrap {
  max-width: 200px;
}
</style>
