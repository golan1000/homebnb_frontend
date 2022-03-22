<script>
export default {
  props: [],
  emits: [],
  created() {
    console.log("userrrrr=", this.$store.getters.getUser);
  },
  data() {
    return {
      var1: "bla",
    };
  },
  methods: {
    doThing() {
      this.var1 = "bla";
      return "blabla";
    },
  },
  computed: {
    getCom() {
      return "blabla";
    },
  },
};
</script>

<template>
  <div>
    <h1>page 1</h1>
  </div>
</template>

<style></style>
