<template>
  <div>
    <div :id="`imgdiv-${gif.id}`" class="imgdiv" @click="clickEvent(gif)">
      <img
        v-bind:src="
          `https://media1.giphy.com/media/${gif.id}/200.gif?cid=2b41e85ddxiof572hp5smti8zbgpu9wwbz4qkl6imtq027xt&rid=200.gif`
        "
      />
    </div>
    <div class="buttondiv">
      <button @click="likeGif(gif)">Like this gif</button>
    </div>
  </div>
</template>

<script>
import state from "../store/username-state";
export default {
  props: ["gif"],
  methods: {
    clickEvent(gif) {
      this.$emit("clickedEvent", gif);
    },
    async likeGif(gif) {
      if (state.username.length < 1) alert("Please set a username first");
      await fetch(`http://localhost:5000/${state.username}`, {
        method: "POST",
        body: `${gif.id}`,
      });
    },
  },
};
</script>

<style>
.buttondiv {
  display: flex;
  justify-content: center;
}
</style>
