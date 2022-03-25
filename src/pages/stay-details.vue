<template>
  <div class="about">
    <h1>This is an stay detail</h1>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="details-main-con">
      <div>
        <span style="font-size: 30px">{{ stayToEdit.name }}</span
        ><br />
      </div>

      <br />
      <br />
      <br />

      <div>
        rate: <span>{{ stayToEdit.reviews[0].rate }}</span> Address:{{ stayToEdit.loc.address }}
      </div>

      <br />
      <br />
      <br />

      <div class="gallery-grid">
        <img class="main-pic" :src="stayToEdit.imgUrls[0]" />
        <div class="sub-pic1-con">
          <img class="sub-pic1" :src="stayToEdit.imgUrls[0]" />
        </div>
        <img class="sub-pic2" :src="stayToEdit.imgUrls[0]" />
        <img class="sub-pic3" :src="stayToEdit.imgUrls[0]" />
        <img class="sub-pic4" :src="stayToEdit.imgUrls[0]" />
      </div>

      <br />
      <br />
      <br />

      <div class="host-main-con">
        Host fullname: <span>{{ stayToEdit.host.fullname }}</span
        ><br />
        Host imgUrl: <span>{{ stayToEdit.host.imgUrl }}</span
        ><br />
      </div>

      <br />
      <br />
      <br />

      <div class="desc-main-con">
        <span style="font-size: 30px">Stay description:</span>
        <br />
        {{ stayToEdit.summary }}
      </div>

      <br />
      <br />
      <br />

      <div class="amenities-main-con">
        <span style="font-size: 30px">Amenities</span>
        <br />
        <span>{{ stayToEdit.amenities }}</span
        ><br />
      </div>

      <br />
      <br />
      <br />

      <div class="reviews-main-con">
        <span style="font-size: 30px">Reviews</span>
        <br />
        <div class="review-con">
          reviews id: <span>{{ stayToEdit.reviews[0].id }}</span
          ><br />
          reviews txt: <span>{{ stayToEdit.reviews[0].txt }}</span
          ><br />
          reviews rate: <span>{{ stayToEdit.reviews[0].rate }}</span
          ><br />
          reviews id: <span>{{ stayToEdit.reviews[0].by._id }}</span
          ><br />
          reviews fullname:<span>{{ stayToEdit.reviews[0].by.fullname }}</span
          ><br />
          reviews imgUrl: <img :src="stayToEdit.reviews[0].by.imgUrl" /><br />
        </div>
      </div>
      <!-- </pre> -->

      <div class="order-dialog-main-con">
        <el-dialog v-model="dialogVisible" append-to-body="true" close-on-click-modal="false" modal="false" title="Order" width="30%" :before-close="handleClose">
          <el-form :model="form" label-width="120px">
            <el-form-item label="Check in">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Check out">
              <el-input v-model="form.name" />
            </el-form-item>
            <br />
            <el-form-item label="Guests">
              <el-input v-model="form.name" />
            </el-form-item>

            <!-- date -->
            <el-form-item label="Activity time">
              <el-col :span="11">
                <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
              </el-col>
              <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
              </el-col>
              <el-col :span="11">
                <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
              </el-col>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div v-if="this.stayToEdit">
      <pre>
          <!-- Name:            <span>{{stayToEdit.name}}</span><br /> -->
          Type:            <span>{{stayToEdit.type}}</span><br />
          <!-- Img url:         <span>{{stayToEdit.imgUrls[0]}}</span><br /> -->
          <!-- Img:<img :src="stayToEdit.imgUrls[0]" /><br /> -->
          Price:           <span>{{stayToEdit.price}}</span><br />
          <!-- Summary:         <span>{{stayToEdit.summary}}</span><br /> -->
          Capacity:        <span>{{stayToEdit.capacity}}</span><br />
          <!-- Amenities:       <span>{{stayToEdit.amenities}}</span><br /> -->
          Host id:         <span>{{stayToEdit.host._id}}</span><br />
          <!-- Host fullname:   <span>{{stayToEdit.host.fullname}}</span><br /> -->
          
          loc country:     <span>{{stayToEdit.loc.country}}</span><br />
          loc countryCode: <span>{{stayToEdit.loc.countryCode}}</span><br />
          <!-- loc address:     <span>{{stayToEdit.loc.address}}</span><br /> -->
          loc lat:         <span>{{stayToEdit.loc.lat}}"</span><br />
          loc lng:         <span>{{stayToEdit.loc.lng}}</span><br />

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
      displayMsg: 'Loading...',
      dialogVisible: true,
      form: {
        name: null,
      },
      modal: true,
    };
  },
  methods: {
    update() {
      console.log('stay to update=', this.stayToEdit);
      this.$store.dispatch({ type: 'update', stayToUpdate: this.stayToEdit });
    },
  },
  async created() {
    console.log('params=', this.$route.params);

    const { id } = this.$route.params;

    if (id) {
      const foundStay = await this.$store.dispatch({ type: 'getById', stayId: id });

      console.log('foundStay main=', foundStay);
      if (foundStay) {
        this.stayToEdit = JSON.parse(JSON.stringify(foundStay));

        console.log('found id=', this.stayToEdit);
      } else {
        console.log('no such id');
        this.displayMsg = 'no such id';
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
