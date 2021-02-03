<template>
  <div>
    <div :id="`imgdiv-${gif.id}`" class="imgdiv" @click="clickEvent(gif)">
      <img
        v-bind:src="
          `https://media1.giphy.com/media/${gif.id}/200.gif?cid=2b41e85ddxiof572hp5smti8zbgpu9wwbz4qkl6imtq027xt&rid=200.gif`
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["gif"],
  methods: {
    clickEvent(gif) {
      this.$emit("clickedEvent", gif);
    },
  },
};
</script>

<style></style>
