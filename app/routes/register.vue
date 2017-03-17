<template lang="html">
  <div class="register">
    <h1 class="register__header">Create an Account</h1>
    <form action="register" class="register__form">
      <div class="username form-section">
        <p>Username</p>
        <input type="text" placeholder="Username" class="register-input">
      </div>
      <div class="email form-section">
        <p>Email</p>
        <input type="text" placeholder="Email" class="register-input">
      </div>
      <div class="password form-section">
        <p>Password</p>
        <input type="text" placeholder="Password" class="register-input">
      </div>
      <div class="register__footer">
        <h2>Login</h2>
        <button type="Submit" class="submit-button">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
