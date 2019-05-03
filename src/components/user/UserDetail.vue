<template >
  <div v-if="user">
    <h1>user id {{user.id}}</h1>
    <h1>user name {{user.name}}</h1>
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
  computed: {
      user(){
          return this.users.find(user =>{
              return this.$route.params.id == user.id
          })
      }
  }
};
</script>
