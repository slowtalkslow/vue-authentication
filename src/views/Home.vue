<template>
  <div class="home">
    <h1> ✨  Welcome ✨ </h1>
    <div v-if="!loggedIn">
      <button @click="signup" > Sign up to continue </button>
      <p @click="signin" > or sign in </p>
    </div>
  </div>
</template>

<script>
import { authComputed } from '../vuex/helper'

export default {
  computed: {
    ...authComputed
  },
  methods: {
    signup() {
      this.$router.push({
        name: 'register'
      })
    },
    signin() {
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-around;
}

h1 {
  font-size: 70px;
  font-weight: 700;
  color: #84cf6a;
  margin: 100px;
}

p {
  width: 240px;
  height: 40px;
  font-size: 15px;
  font-weight: 700;
  color: #84cf6a;
  display: inline-block;
  cursor: pointer;
}

button {
  width: 240px;
  height: 40px;
  border: none;
  border-radius: 8px;
  border-style: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  display: inline-block;
}
</style>
