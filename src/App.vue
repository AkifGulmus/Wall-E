<template>
  <div id="app">
    <gif-component></gif-component>
  </div>
</template>

<script>
import GifComponent from "./components/GifComponent";

export default {
  name: "app",
  components: { GifComponent },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
