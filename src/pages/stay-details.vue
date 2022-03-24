<template>
  <div class="about">
    <h1>This is an stay edit</h1>

    <input type="checkbox" id="toggle" />
    <div v-if="this.stayToEdit">
      <pre>
          Name:            <span>{{stayToEdit.name}}</span><br />
          Type:            <span>{{stayToEdit.type}}</span><br />
          Img url:         <span>{{stayToEdit.imgUrls[0]}}</span><br />
          Img:<img :src="stayToEdit.imgUrls[0]" /><br />
          Price:           <span>{{stayToEdit.price}}</span><br />
          Summary:         <span>{{stayToEdit.summary}}</span><br />
          Capacity:        <span>{{stayToEdit.capacity}}</span><br />
          Amenities:       <span>{{stayToEdit.amenities}}</span><br />
          Host id:         <span>{{stayToEdit.host._id}}</span><br />
          Host fullname:   <span>{{stayToEdit.host.fullname}}</span><br />
          Host imgUrl:     <span>{{stayToEdit.host.imgUrl}}</span><br />
          loc country:     <span>{{stayToEdit.loc.country}}</span><br />
          loc countryCode: <span>{{stayToEdit.loc.countryCode}}</span><br />
          loc address:     <span>{{stayToEdit.loc.address}}</span><br />
          loc lat:         <span>{{stayToEdit.loc.lat}}"</span><br />
          loc lng:         <span>{{stayToEdit.loc.lng}}</span><br />
          reviews id:      <span>{{stayToEdit.reviews[0].id}}</span><br />
          reviews txt:     <span>{{stayToEdit.reviews[0].txt}}</span><br />
          reviews rate:    <span>{{stayToEdit.reviews[0].rate}}</span><br />
          reviews id:      <span>{{stayToEdit.reviews[0].by._id}}</span><br />
          reviews fullname:<span>{{stayToEdit.reviews[0].by.fullname}}</span><br />
          reviews imgUrl:  <img :src="stayToEdit.reviews[0].by.imgUrl" /><br />
      </pre>
      <br />

      <button @click.prevent="update">Update</button>
    </div>
    <div v-else>{{ displayMsg }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stays: null,
      stayToEdit: null,
      displayMsg: "Loading...",
    };
  },
  methods: {
    update() {
      console.log("stay to update=", this.stayToEdit);
      this.$store.dispatch({ type: "update", stayToUpdate: this.stayToEdit });
    },
  },
  async created() {
    console.log("params=", this.$route.params);

    const { id } = this.$route.params;

    if (id) {
      const foundStay = await this.$store.dispatch({ type: "getById", stayId: id });

      console.log("foundStay main=", foundStay);
      if (foundStay) {
        this.stayToEdit = JSON.parse(JSON.stringify(foundStay));

        console.log("found id=", this.stayToEdit);
      } else {
        console.log("no such id");
        this.displayMsg = "no such id";
      }
    }
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 120px;
}
/* #toggle {
  position: absolute;
} */
</style>
