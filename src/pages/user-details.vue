<template>
  <div class="user-details">
    <h1>
      ID: <span>{{ user._id }}</span>
    </h1>
    <h2>
      full name: <span>{{ user.fullname }}</span>
    </h2>
    <h2>
      User name: <span>{{ user.username }}</span>
    </h2>
    <div class="img-container">
      <img :src="user.imgUrl" alt="user-img" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        _id: 'u101',
        fullname: 'User 1',
        imgUrl: '/img/img1.jpg',
        username: 'user1',
      },
    }
  },
}
</script>
<style scoped>
.user-details {
  margin: 0 auto;
}
span {
  color: #ff385c;
}
</style>
