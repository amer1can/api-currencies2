<template>
  <div class="add d-flex">
    <input type="text" class="form-control " placeholder="Enter message" v-model="mess">
    <button class="btn btn-info mx-2" @click="addMess">Send</button>
  </div>
</template>

<script>
export default {
  name: "AddMessage",
  data() {
    return {
      mess: '',
    }
  },
  methods: {
    addMess() {
      this.$store.commit("addMessage", this.mess)
      this.mess = ''
    }
  }
}
</script>

<style scoped>

</style>