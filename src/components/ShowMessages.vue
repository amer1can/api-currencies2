<template>
  <div class="messages mt-5">
    <div v-if="this.$store.state.messagesList.length === 0">
      <h2>No messages</h2>
    </div>

    <div v-else v-for="(mess, idx) in this.$store.state.messagesList" :key="idx">
      <div class="mess d-flex align-items-center text-white border border-dark border">
        <h4 class="mx-5">{{ idx + 1 }}</h4>
        <p>{{ mess }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ShowMessages",
  mounted() {
  }
}
</script>

<style scoped>
.mess {
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
}
</style>