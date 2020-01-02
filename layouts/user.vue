<template>
  <div class="user-section">
    <Header/>
    User Section
    <nuxt />
  </div>
</template>

<script>
import Header from "~/components/Header.vue"
export default {
  components:{
    Header
  },
};
</script>

<style>
.user-seciton {
  border: 1px solid grey;
}
</style>