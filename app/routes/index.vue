<template lang="html">
  <div class="index">
    <h1 class="welcome">Welcome to Ribbiter!</h1>
    <div class="login">
      <h2>
        <router-link :to="{ name: 'login' }">Login</router-link>
      </h2>
      <h4>
        <router-link :to="{ name: 'register' }">Not a member? Register</router-link>
      </h4>
    </div>
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
