<template>
  <div class="main">
    <username-form> </username-form>
    <div class="gifsContainer">
      <ul>
        <li v-for="gif in gifz" v-bind:key="gif.id" class="gif-list">
          <single-gif-comp :gif="gif" @clickedEvent="clickedEvent(gif)">
          </single-gif-comp>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import singleGifComp from "./singleGifComp";
import { fetchFunc } from "../clients/client.js";
import UsernameForm from "./UsernameForm.vue";

export default {
  components: { singleGifComp, UsernameForm },
  data() {
    return {
      username: "",
      gifz: [],
    };
  },
  async mounted() {
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
.gif-list {
  list-style: none;
  float: left;
  margin: 1rem;
}

.gifsContainer {
  display: grid;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
</style>
