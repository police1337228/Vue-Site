<template>
  <HomePage />
</template>

<script>
import HomePage from "./components/HomePage.vue";
export default {
  name: "App",
  components: {
    HomePage
  },
  data() {
    return {};
  },
  mounted() {
    $(".dropdown-toggle").on("mouseover", function(e) {
      let id = this.id;
      $(`[aria-labelledby=${id}]`).addClass("show");
    });
    $(`.dropdown-toggle`).on("mouseout", function(e) {
      let id = this.id;
      $(`[aria-labelledby=${id}]`).removeClass("show");
    });
  }
};
</script>

<style></style>
