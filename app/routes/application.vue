<template lang="html">
  <div class="">
    <div class="nav">
      <div class="nav__left">
        <h2 class="logo">
          <router-link :to="{ name: 'index' }">Ribbeter</router-link>
        </h2>
      </div>
      <div class="nav__right">
        <h2 class="nav-buttons">
          <span>
            <router-link :to="{ name: 'ribbets' }">Ribbets</router-link>
          </span>
          <span>
            <router-link :to="{ name: 'users' }">Frogs</router-link>
          </span>
          <span>
            <router-link :to="{ name: 'login' }">Login</router-link>
          </span>
        </h2>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <router-view></router-view>
      </div>
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
