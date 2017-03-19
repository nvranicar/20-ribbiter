<template lang="html">
  <div class="">

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
