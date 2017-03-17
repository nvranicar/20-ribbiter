<template lang="html">
  <div class="">
    <div class="nav">
      <div class="nav__left">
        <h2 class="logo">Ribbeter</h2>
      </div>
      <div class="nav__right">
        <h2 class="nav-buttons">
          <span>Ribbets</span>
          <span>Frogs</span>
          <span>Login</span>
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
