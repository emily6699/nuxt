<template>
<div>
   <!-- <Header/> -->
   <div>Please enter an Id and click the button</div>
</div>
 
</template>

<script>
import Header from "~/components/Header.vue"
export default {
  components:{
    Header
  },
  data() {
    return {
      userId: ""
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push("/users/" + this.userId);
    }
  }
  // layout: "user"
};
</script>

<style>
</style>