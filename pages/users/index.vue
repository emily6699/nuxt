<template>
  <div>Please enter an Id and click the button</div>
</template>

<script>
export default {
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