<template>
  <div>
    <li v-for="gif in gifz" v-bind:key="gif.id" class="gif-list-item">
      <single-gif-comp :gif="gif" @clickedEvent="clickedEvent(gif)">
      </single-gif-comp>
    </li>
  </div>
</template>

<script>
import singleGifComp from "./singleGifComp";
import { fetchFunc } from "../clients/client.js";

export default {
  components: { singleGifComp },
  data() {
    return {
      gifz: [],
    };
  },
  async beforeCreate() {
    this.gifz = await fetchFunc();
  },
  methods: {
    clickedEvent: (gif) => {
      window.location.href = `${gif.url}`;
    },
  },
};
</script>

<style>
li {
  list-style: none;
  float: left;
  margin: 10px;
}
</style>
