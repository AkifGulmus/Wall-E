<template>
  <div>
    <h1>Here are the gifs that you like!</h1>
    <li v-for="gifID in likedGifs" v-bind:key="gifID" class="gif-list-item">
      <div
        v-if="likedGifs[0].length > 0"
        :id="`imgdiv-${gifID}`"
        class="imgdiv"
        @click="clickEvent(gif)"
      >
        <img
          v-bind:src="
            `https://media1.giphy.com/media/${gifID}/200.gif?cid=2b41e85ddxiof572hp5smti8zbgpu9wwbz4qkl6imtq027xt&rid=200.gif`
          "
        />
      </div>
      <div v-if="likedGifs[0].length > 0" class="buttondiv">
        <button @click="unlikeGif(gifID)">Unlike this gif</button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
  },
  data() {
    return {
      likedGifsString: "",
      likedGifs: [],
    };
  },
  async created() {
    await fetch(`http://localhost:5000/${this.$props.username}`)
      .then((response) => response.json())
      .then((response) => {
        this.likedGifs = response.data;
      })
      .catch((error) => console.log(error));
  },

  methods: {
    clickEvent(gif) {
      this.$emit("clickedEvent", gif);
    },
    async unlikeGif(gifID) {
      await fetch(
        `http://localhost:5000/${this.$props.username}/gifs/${gifID}`,
        {
          method: "DELETE",
        }
      )
        .then((response) => response.json())
        .then((response) => {
          this.likedGifs = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
.gif-list-item {
  list-style: none;
  float: left;
  margin: 1rem;
}
</style>
