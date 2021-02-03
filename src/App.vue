<template>
  <div id="app">
    <gif-component></gif-component>
    <single-gif-comp />
  </div>
</template>

<script>
import GifComponent from "./components/GifComponent";
import singleGifComp from "./components/singleGifComp.vue";

export default {
  name: "app",
  components: { GifComponent, singleGifComp },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
