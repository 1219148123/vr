<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {},
  data() {
    return {
      newsMsg: ""
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:8081/api/address/addressMng")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.data);
      });
  }
};
</script>
