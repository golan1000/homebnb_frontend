<template>
  <div class="carousel">
    <div class="carousel-inner">
      <carousel-item
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="`item-${index}`"
        :current-slide="currentSlide"
        :index="index"
      ></carousel-item>
    </div>
  </div>
</template>

<script>
import carouselItem from "./carousel-item.vue";

export default {
  props: ["slides"],
  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
    };
  },
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
  },
  mounted() {
    this.slideInterval = setInterval(() => {
      const index =
        this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
      this.setCurrentSlide(index);
    }, 3000);
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
  },
  components: {
    carouselItem,
  },
};
</script>

<style scoped>
.carousel {
    /* display: flex; */
    /* justify-content: center; */
}

.carousel-innner{
    /* position: relative; */
    /* height: 265px; */
    /* overflow: hidden; */
}
</style>