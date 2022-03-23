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
    save() {
      console.log("stay to save=", this.stayToEdit);
      // this.$store.dispatch({type:'save', stay:this.stayToEdit})
    },
  },
  created() {
    this.stays = [
      {
        _id: "10001546",
        name: "Ribeira Bla Duplex",
        type: "House",
        imgUrls: ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
        price: 80.0,
        summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
        capacity: 8,
        amenities: ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
        host: {
          _id: "51399391",
          fullname: "Davit Pok",
          imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
        },
        loc: {
          country: "Portugal",
          countryCode: "PT",
          address: "Porto, Portugal",
          lat: -8.61308,
          lng: 41.1413,
        },
        reviews: [
          {
            id: "madeId",
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
              _id: "u102",
              fullname: "user2",
              imgUrl: "/img/img2.jpg",
            },
          },
        ],
        likedByUsers: ["mini-user"], // for user-wishlist : use $in
      },
      {
        _id: "10016246",
        name: "Texas",
        type: "House",
        imgUrls: ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
        price: 80.0,
        summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
        capacity: 8,
        amenities: ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
        host: {
          _id: "51399391",
          fullname: "Davit Pok",
          imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
        },
        loc: {
          country: "Portugal",
          countryCode: "PT",
          address: "Porto, Portugal",
          lat: -8.61308,
          lng: 41.1413,
        },
        reviews: [
          {
            id: "madeId",
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
              _id: "u102",
              fullname: "user2",
              imgUrl: "/img/img2.jpg",
            },
          },
        ],
        likedByUsers: ["mini-user"], // for user-wishlist : use $in
      },
      {
        _id: "10006541",
        name: "Orlando",
        type: "House",
        imgUrls: ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
        price: 80.0,
        summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
        capacity: 8,
        amenities: ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
        host: {
          _id: "51399391",
          fullname: "Davit Pok",
          imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
        },
        loc: {
          country: "Portugal",
          countryCode: "PT",
          address: "Porto, Portugal",
          lat: -8.61308,
          lng: 41.1413,
        },
        reviews: [
          {
            id: "madeId",
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
              _id: "u102",
              fullname: "user2",
              imgUrl: "/img/img2.jpg",
            },
          },
        ],
        likedByUsers: ["mini-user"], // for user-wishlist : use $in
      },
    ];

    console.log("params=", this.$route.params);

    const { id } = this.$route.params;

    if (id) {
      var foundStay = this.stays.find((currStay) => currStay._id === id);

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

<template>
  <div class="about">
    <h1>This is an stay edit</h1>

    <input type="checkbox" id="toggle" />
    <label>Toggle</label>
    <div v-if="this.stayToEdit">
      Name:<input type="text" v-model="stayToEdit.name" /><br />
      Type:<input type="text" v-model="stayToEdit.type" /><br />
      Img url:<input type="text" v-model="stayToEdit.imgUrls[0]" /><br />
      Img:<img :src="stayToEdit.imgUrls[0]" /><br />
      Price:<input type="number" v-model="stayToEdit.price" /><br />
      Summary:<textarea type="text" v-model="stayToEdit.summary"></textarea>text<br />
      Capacity:<input type="number" v-model="stayToEdit.capacity" /><br />
      Amenities:<input type="text" v-model="stayToEdit.amenities" /><br />
      Host id:<input type="number" v-model="stayToEdit.host._id" /><br />
      Host fullname:<input type="text" v-model="stayToEdit.host.fullname" /><br />
      Host imgUrl:<input type="text" v-model="stayToEdit.host.imgUrl" /><br />
      loc country:<input type="text" v-model="stayToEdit.loc.country" /><br />
      loc countryCode:<input type="text" v-model="stayToEdit.loc.countryCode" /><br />
      loc address:<input type="text" v-model="stayToEdit.loc.address" /><br />
      loc lat:<input type="number" v-model="stayToEdit.loc.lat" /><br />
      loc lng:<input type="number" v-model="stayToEdit.loc.lng" /><br />
      reviews id:<input type="text" v-model="stayToEdit.reviews[0].id" /><br />
      reviews txt:<input type="text" v-model="stayToEdit.reviews[0].txt" /><br />
      reviews rate:<input type="text" v-model="stayToEdit.reviews[0].rate" /><br />
      reviews by id:<input type="text" v-model="stayToEdit.reviews[0].by._id" /><br />
      reviews by fullname:<input type="text" v-model="stayToEdit.reviews[0].by.fullname" /><br />
      reviews by imgUrl:<img :src="stayToEdit.reviews[0].by.imgUrl" /><br />

      <br />
      {{ stayToEdit }}

      <button @click.prevent="save">save</button>
    </div>
    <div v-else>{{ displayMsg }}</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
