<template>
  <div class="usernameMainClass">
    <ul class="formContainer">
      <li>
        <div>
          <label for="username">Username:</label>
          <input v-model="username" name="username" />
        </div>
      </li>
      <li>
        <button id="buttonID" @click="setUsername(username)">
          Set Username
        </button>
      </li>
    </ul>
    <div id="routerID" @click="goToPersonalPage">
      Click here to go to {{ username }}'s liked gifs
    </div>
  </div>
</template>

<script>
import state from "../store/username-state";
export default {
  methods: {
    async setUsername(username) {
      state.username = username;
      await fetch(`http://localhost:5000/${state.username}`, {
        method: "POST",
      });
    },
    goToPersonalPage() {
      if (state.username.length < 1) alert("Please set a username first");
      else this.$router.push(`/user/${state.username}`);
    },
  },
  data() {
    return {
      username: "",
    };
  },
};
</script>

<style>
li {
  list-style: none;
}
.usernameMainClass {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formContainer {
  display: flex;
}

#buttonID {
  margin-left: 1rem;
  flex: 0 1 auto;
}
</style>
