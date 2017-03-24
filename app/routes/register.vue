<template lang="html">
  <div class="register">
    <div v-if="users.loading === 'error'" class="alert">
      <h2>There was an error with your registration.</h2>
    </div>
    <h1 class="register__header">Create an Account</h1>
    <form @submit.prevent="save" class="register__form">
      <div class="username form-section">
        <p>Username</p>
        <input type="text" placeholder="Username" class="register-input" v-model="formValues.username">
      </div>
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
          <router-link :to="{ name: 'login' }">Login</router-link>
        </h2>
        <button type="Submit" class="submit-button">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
import store from '../store';
import userResource from '../resources/user';
const create = userResource.actionCreators.create;

export default {
  data() {
    return {
      users: this.$select('users'),
      formValues: {
        username: '',
        email: '',
        password: '',
      }
    };
  },

  methods: {
    save() {
      store.dispatch(create(this.formValues))
        .then(() => {
          this.$router.push({ name: 'login' });
        }).catch(() => {});
    }
  },
};
</script>
