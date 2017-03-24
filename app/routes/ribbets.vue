<template lang="html">
  <div class="">
    <div class="section">
      <div class="container">
        <div class="users-header">
          <h2>Recent Ribbits</h2>
        </div>
        <div class="grid">
          <div class="new-ribbit">
            <div class="card">
              <div class="card__heading">
                <h2>New Ribbit</h2>
              </div>
              <p>What's Going On?</p>
              <form @submit.prevent="save">
                <textarea rows="8" v-model="formValues.body"></textarea>
                <div class="card__footer">
                  <button class="clear">Clear</button>
                  <button type="submit" class="submit-button">Save</button>
                </div>
              </form>
            </div>
          </div>
          <div class="ribbits">
            <div class="card">
              <div class="card__heading">
                <h2>See What's Happening!</h2>
              </div>
              <div class="ribbits-content">
                <div class="ribbit">
                  <button class="load-ribbits">Load New Ribbits</button>
                </div>
                <div class="ribbit" v-for="ribbit in posts.items" v-bind:ribbit="post">
                  <h3 class="handle">${{post.username}}</h3>
                  <p>{{post.body}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postResource from '../resources/post';
import store from '../store';

export default {
  data() {
    return {
      posts: this.$select('posts'),
      formValues: {
        body: '',
      }
    };
  },

  methods: {
    mounted() {
      store.dispatch(postResource.findAll());
    },

    save() {
      store.dispatch(postResource.actionCreators.create(this.formValues))
        .then(() => {
          this.formValues = {};
        });
    }
  },
};
</script>
