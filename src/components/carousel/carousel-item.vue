<template>
  <transition name="slide-in">
    <div class="carousel-item" v-show="currentSlide === index">
      <img class="carousel-item-img" :src="slide" />
    </div>
  </transition>
</template>

<script>
export default {
  props: ["slide", "currentSlide", "index"],
};
</script>

