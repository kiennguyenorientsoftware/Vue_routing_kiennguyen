<template>
  <div>
    <b-list-group>
      <b-list-group-item
        v-for="(user, index) in users"
        :key="index"
        :to="{path: `user/${user.id}`}"
      >{{user.username}}</b-list-group-item>
    </b-list-group>

    <hr>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.users = json;
      });
  },
  methods: {
    navigateToHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>