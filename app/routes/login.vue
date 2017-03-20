<template lang="html">
  <div class="register">
    <!-- <div v-if="users.loading === 'error'" class="alert">
      <h2>There was an error with your login.</h2>
    </div> -->
    <h1 class="register__header">Login</h1>
    <form @submit.prevent="save" class="register__form">
      <div class="email form-section">
        <p>Email</p>
        <input type="text" placeholder="Email" class="register-input" v-model="formValues.email">
      </div>
      <div class="password form-section">
        <p>Password</p>
        <input type="text" placeholder="Password" class="register-input" v-model="formValues.password">
      </div>
      <div class="register__footer">
        <h2>
          <router-link :to="{ name: 'register' }">Register</router-link>
        </h2>
        <button type="Submit" class="submit-button">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      formValues: {
        email: '',
        password: '',
      }
    };
  },

  methods: {
    save() {
      fetch('http://localhost:3333/login', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(this.formValues)
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(res.json());
      }).then((data) => {
        localStorage.jwt = data.token;
      }).catch((err) => {
        this.error = true;
      });
    }
  },
};
</script>
