<template lang="html">
  <div class="">
    <div class="section">
      <div class="container">
        <div class="users-header">
          <h2>Users</h2>
        </div>
        <div class="grid">
          <div class="grid__item" v-for="frog in users" v-bind:user="frog">
            <div class="card">
              <div class="card__left">
                <img src="http://fillmurray.com/200/200" alt="" class="card-pic">
              </div>
              <div class="card__text">
                <h2>{{user.username}}</h2>
                <p class="handle">{{user.email}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userResource from '../resources/user';
import store from '../store';

export default {
  data() {
    return {
      users: this.$select('users'),
    };
  },

  methods: {
    mounted() {
      store.dispatch(userResource.findAll());
    }
  },
};
</script>
