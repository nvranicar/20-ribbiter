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
              <form action="">
                <textarea rows="8"></textarea>
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
                <div class="ribbit">
                  <h3 class="handle">$ryan</h3>
                  <p>This is a tweet</p>
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
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
