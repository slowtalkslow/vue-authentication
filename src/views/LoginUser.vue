<template>
  <div>
    <form @submit.prevent="login">
      <div class="field">
        <label for="email"> Email </label>
        <input v-model="email" type="email" name="email">
      </div>
      <div class="field">
        <label for="password"> Password </label>
        <input v-model="password" type="password" name="password">
      </div>
      <div class="field">
        <button type="submit" name="button"> Login </button>
      </div>
      <p>{{ error }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push({ name: 'dashboard' })
      })
      .catch(err => {
        console.log(err)
        this.error = err.response.data.error
      })
    }
  }
}
</script>

<style scoped>

label {
  display: block;
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 5px;
}

input {
  border-radius: 8px;
  border: 1px solid transparent;
  background-color:  #f3f3f4;
  width: 400px;
  height: 40px;
  margin-bottom: 40px;
  font-size: 15px;
  font-weight: 700;
}

input:hover {
  border:solid 2px #84cf6a;
  box-shadow: 0px 0px 2px 2px #d4f2ca;
  background-color:  white;
}

button {
  width: 400px;
  height: 40px;
  margin: 20px;
  border: none;
  border-radius: 8px;
  border-style: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
}
</style>
