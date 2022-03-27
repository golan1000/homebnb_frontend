<template>
  <div class="space-con">&nbsp;</div>
  <!-- <div class="float-top-stay">
    <button class="order-form-submit"><div>Check availability</div></button>
    <div class="top-stay-menu-left"></div>
  </div> -->
  <div v-if="stayToEdit" class="details-main-con">
    <div class="details-stay-name">
      <span>{{ stayToEdit.name }}</span
      ><br />
    </div>
    <br />

    <div class="details-stay-short-info">
      <div>
        ⭐<span>{{ stayToEdit.reviews[0].rate }}</span
        ><span class="details-stay-short-info-address">({{ stayToEdit.reviews.length }} reviews) </span>• <span class="details-stay-short-info-address">{{ stayToEdit.loc.address }} </span>
      </div>
      <div class="details-stay-short-info-right">
        <div>✉️<button class="share-btn">Share</button></div>
        <div>❤️<button class="save-btn">Save</button></div>
      </div>
    </div>
    <br />

    <div class="gallery-grid">
      <div class="sub-pic1-con">
        <img class="main-pic" src="../assets/img/staypics/1.jpg" />
      </div>
      <div class="sub-pic2-con">
        <img class="sub-pic2" src="../assets/img/staypics/2.jpg" />
      </div>
      <div class="sub-pic3-con">
        <img class="sub-pic1" src="../assets/img/staypics/3.jpg" />
      </div>
      <div class="sub-pic4-con">
        <img class="sub-pic3" src="../assets/img/staypics/4.jpg" />
      </div>
      <div class="sub-pic5-con">
        <img class="sub-pic4" src="../assets/img/staypics/5.jpg" />
      </div>
    </div>
    <br />

    <!-- <div class="gallery-grid">
        <img class="main-pic" :src="stayToEdit.imgUrls[0]" />
        <div class="sub-pic1-con">
          <img class="sub-pic1" :src="stayToEdit.imgUrls[0]" />
        </div>
        <img class="sub-pic2" :src="stayToEdit.imgUrls[0]" />
        <img class="sub-pic3" :src="stayToEdit.imgUrls[0]" />
        <img class="sub-pic4" :src="stayToEdit.imgUrls[0]" />
      </div> -->

    <div class="middle-con">
      <!-- section 1 -->
      <div class="middle-con-sec1">
        <div class="first-line">
          <div class="first-line-1">
            <span class="first-line-title">Entire rental unit hosted by Moran</span>
            <div class="spacer1">&nbsp;</div>
            <div class="first-line-2">3 guests1 bedroom1 bed1 bathroom</div>
          </div>
          <div class="avatar1"><el-avatar :size="57" src="https://i.pravatar.cc/150?img=1" /></div>
        </div>
        <hr />
        <div class="second-line">
          <div class="second-line-con1">
            <div class="second-line-1">🏠 Entire home</div>
            <div class="second-line-2">You’ll have the apartment to yourself.</div>
          </div>

          <div class="second-line-con2">
            <div class="second-line-3">🛰️ Great location</div>
            <div class="second-line-4">Recent guests gave the location a 5-star rating.</div>
          </div>

          <div class="second-line-con3">
            <div class="second-line-5">💫 Enhanced Clean</div>
            <div class="second-line-6">This host has committed to our 5-step enhanced cleaning process.</div>
          </div>

          <div class="second-line-con4">
            <div class="second-line-7">📅 Free cancellation up to 24 hours before check-in</div>
            <div class="second-line-8">feel free to be flexible</div>
          </div>
        </div>
        <hr />
        <div class="third-line">
          <div class="stay-desc-title">Stay description</div>
          <div class="stay-desc-info">Beautiful 3 bedroom architecturally designed villa, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern USA</div>
        </div>
        <hr />

        <div class="forth-line">
          <div class="forth-line-1">Amenities</div>

          <div class="forth-line-2 forth-line-flex1">
            <div class="amenities-item1">📺 &nbsp;&nbsp; TV</div>
            <div class="amenities-item2">🌐&nbsp;&nbsp;Wifi</div>
          </div>
          <div class="forth-line-3 forth-line-flex2">
            <div class="amenities-item1">🫕&nbsp;&nbsp;&nbsp;Kitchen</div>
            <div class="amenities-item2">🆒&nbsp;&nbsp;Air conditioning</div>
          </div>
          <div class="forth-line-4 forth-line-flex3">
            <div class="amenities-item1">🚬&nbsp;&nbsp;&nbsp;Smoking Allowed</div>
            <div class="amenities-item2">🐕&nbsp;&nbsp;Pets Allowed</div>
          </div>

          <button class="amenities-btn">Show all 9 amenities</button>
        </div>
      </div>

      <!-- section 2 -->
      <div class="middle-con-sec2">
        <div class="order-dialog-main-con">
          <div class="order-form-top-con">
            <div>
              <label class="order-form-price">$150</label>
              <label class="order-form-price">/</label>
              <label class="order-form-night">night</label>
            </div>

            <div>
              <label class="order-form-star">⭐</label>
              <label class="order-form-rate">4.5</label>
              <label class="order-form-rate">(33)</label>
            </div>
          </div>
          <div class="order-form-middle-con">
            <div class="order-dates">
              <button class="order-form-check-in-btn" @click="showCalendar">
                <div class="check">CHECK IN</div>
                <div class="add-dates">Add dates</div>
              </button>
              <button class="order-form-check-out-btn" @click="showCalendar">
                <div class="check">CHECK OUT</div>
                <div class="add-dates">Add dates</div>
              </button>
            </div>
            <div class="guest-modallll">
              <button class="order-form-guest-btn" @click="displayGuestModal">
                <div class="check">GUESTS</div>
                <div class="add-dates">Add guests</div>
              </button>
              <section v-if="IsGuestModalOpen" class="guests-modal">
                <div class="close-modal-btn" title="Close the modal" @click="displayGuestModal">X</div>
                <div class="adults guest-flex">
                  <div class="modal-txt">
                    Adults:
                    <input type="text" placeholder="Ages 13 or above" disabled />
                    <!-- <span class="span-input"> </span> -->
                  </div>
                  <div class="modal-btn">
                    <button class="btn" @click="addGuest('adult')">+</button>
                    <span>{{ filterBy.guests.adults }}</span>
                    <button class="btn" @click="removeGuest('adult')">-</button>
                  </div>
                </div>

                <div class="children guest-flex">
                  <div class="modal-txt">
                    Children:
                    <input type="text" placeholder="Ages 2-12" disabled />
                    <!-- <span class="span-input">Ages 2-12</span> -->
                  </div>
                  <div class="modal-btn">
                    <button class="btn" @click="addGuest('child')">+</button>
                    <span>{{ filterBy.guests.children }}</span>
                    <button class="btn" @click="removeGuest('child')">-</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div v-if="displayCalendar" class="date-modal">
            <div class="close-modal-btn" title="Close the modal" @click="displayCalendar = false">X</div>
            <v-date-picker v-model="range" is-range :columns="$screens({ default: 2, lg: 2 })" />
          </div>
          <button class="order-form-submit"><div>Check availability</div></button>
        </div>
      </div>
    </div>

    <hr />
    <div class="fifth-line">
      <div class="fifth-line-1">⭐4.5· 33 reviews</div>
      <div class="review-rates-main-con">
        <div class="rate-sec1">
          <div class="fifth-line-2">
            <div>Cleanliness</div>
            <div class="progress-span-flex">
              <div>
                <el-progress :percentage="50" color="black" stroke-width="4" text-inside="false" />
              </div>
              <div>&nbsp; 4.6</div>
            </div>
          </div>
          <div class="fifth-line-3">
            <div>Check-in</div>
            <div class="progress-span-flex">
              <div>
                <el-progress :percentage="50" color="black" stroke-width="4" text-inside="false" />
              </div>
              <div>&nbsp; 4.4</div>
            </div>
          </div>
          <div class="fifth-line-4">
            <div>Location</div>
            <div class="progress-span-flex">
              <div>
                <el-progress :percentage="50" color="black" stroke-width="4" text-inside="false" />
              </div>
              <div>&nbsp; 4.2</div>
            </div>
          </div>
        </div>
        <div class="rate-sec-middle">&nbsp;</div>
        <div class="rate-sec2">
          <div class="fifth-line-2">
            <div>Communication</div>
            <div class="progress-span-flex">
              <div>
                <el-progress :percentage="50" color="black" stroke-width="4" text-inside="false" />
              </div>
              <div>&nbsp; 4.5</div>
            </div>
          </div>
          <div class="fifth-line-3">
            <div>Accuracy</div>
            <div class="progress-span-flex">
              <div>
                <el-progress :percentage="50" color="black" stroke-width="4" text-inside="false" />
              </div>
              <div>&nbsp; 4.4</div>
            </div>
          </div>
          <div class="fifth-line-4">
            <div>Accessibility</div>
            <div class="progress-span-flex">
              <div>
                <el-progress :percentage="50" color="black" stroke-width="4" text-inside="false" />
              </div>
              <div>&nbsp; 4.2</div>
            </div>
          </div>
        </div>
      </div>

      <div class="fifth-line-5">
        <div class="review-users-con">
          <div class="review-users-con-left">
            <div class="review1-con review-layout">
              <div class="review-user-details">
                <div class="avatar1"><el-avatar :size="57" src="https://i.pravatar.cc/150?img=8" /></div>

                <div class="review-name">Erik Bole</div>
                <div>24.8.2013</div>
              </div>
              <div class="fifth-line-6">This villa is absolutely stunning with an incredible view. Check in and check out was very smooth and the host/agency are very well organized. Would absolutely recommend the place to anyone looking to have a relaxing time in costa brava amongst a very spectacular view directly from the house. The beach and town near the village are also very accessible to go during the day.</div>
            </div>
            <div class="review2-con review-layout">
              <div class="review-user-details">
                <div class="avatar1"><el-avatar :size="57" src="https://i.pravatar.cc/150?img=51" /></div>

                <div class="review-name">Erik Bole</div>
                <div>24.8.2013</div>
              </div>
              <div class="fifth-line-6">This villa is absolutely stunning with an incredible view. Check in and check out was very smooth and the host/agency are very well organized. Would absolutely recommend the place to anyone looking to have a relaxing time in costa brava amongst a very spectacular view directly from the house. The beach and town near the village are also very accessible to go during the day.</div>
            </div>
            <div class="review3-con review-layout">
              <div class="review-user-details">
                <div class="avatar1"><el-avatar :size="57" src="https://i.pravatar.cc/150?img=50" /></div>

                <div class="review-name">Erik Bole</div>
                <div>24.8.2013</div>
              </div>
              <div class="fifth-line-6">This villa is absolutely stunning with an incredible view. Check in and check out was very smooth and the host/agency are very well organized. Would absolutely recommend the place to anyone looking to have a relaxing time in costa brava amongst a very spectacular view directly from the house. The beach and town near the village are also very accessible to go during the day.</div>
            </div>
            <div class="review4-con review-layout">
              <div class="review-user-details">
                <div class="avatar1"><el-avatar :size="57" src="https://i.pravatar.cc/150?img=67" /></div>

                <div class="review-name">Erik Bole</div>
                <div>24.8.2013</div>
              </div>
              <div class="fifth-line-6">This villa is absolutely stunning with an incredible view. Check in and check out was very smooth and the host/agency are very well organized. Would absolutely recommend the place to anyone looking to have a relaxing time in costa brava amongst a very spectacular view directly from the house. The beach and town near the village are also very accessible to go during the day.</div>
            </div>
          </div>
          <div class="review-users-con-middle">&nbsp;</div>
          <div class="review-users-con-right">
            <div class="review1-con review-layout">
              <div class="review-user-details">
                <div class="avatar1"><el-avatar :size="57" src="https://i.pravatar.cc/150?img=43" /></div>

                <div class="review-name">Erik Bole</div>
                <div>24.8.2013</div>
              </div>
              <div class="fifth-line-6">This villa is absolutely stunning with an incredible view. Check in and check out was very smooth and the host/agency are very well organized. Would absolutely recommend the place to anyone looking to have a relaxing time in costa brava amongst a very spectacular view directly from the house. The beach and town near the village are also very accessible to go during the day.</div>
            </div>
            <div class="review2-con review-layout">
              <div class="review-user-details">
                <div class="avatar1"><el-avatar :size="57" src="https://i.pravatar.cc/150?img=60" /></div>

                <div class="review-name">Erik Bole</div>
                <div>24.8.2013</div>
              </div>
              <div class="fifth-line-6">This villa is absolutely stunning with an incredible view. Check in and check out was very smooth and the host/agency are very well organized. Would absolutely recommend the place to anyone looking to have a relaxing time in costa brava amongst a very spectacular view directly from the house. The beach and town near the village are also very accessible to go during the day.</div>
            </div>
            <div class="review3-con review-layout">
              <div class="review-user-details">
                <div class="avatar1"><el-avatar :size="57" src="https://i.pravatar.cc/150?img=43" /></div>

                <div class="review-name">Erik Bole</div>
                <div>24.8.2013</div>
              </div>
              <div class="fifth-line-6">This villa is absolutely stunning with an incredible view. Check in and check out was very smooth and the host/agency are very well organized. Would absolutely recommend the place to anyone looking to have a relaxing time in costa brava amongst a very spectacular view directly from the house. The beach and town near the village are also very accessible to go during the day.</div>
            </div>
            <div class="review4-con review-layout">
              <div class="review-user-details">
                <div class="avatar1"><el-avatar :size="57" src="https://i.pravatar.cc/150?img=52" /></div>

                <div class="review-name">Erik Bole</div>
                <div>24.8.2013</div>
              </div>
              <div class="fifth-line-6">This villa is absolutely stunning with an incredible view. Check in and check out was very smooth and the host/agency are very well organized. Would absolutely recommend the place to anyone looking to have a relaxing time in costa brava amongst a very spectacular view directly from the house. The beach and town near the village are also very accessible to go during the day.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="host-main-con">
      Host fullname: <span>{{ stayToEdit.host.fullname }}</span
      ><br />
      Host imgUrl: <span>{{ stayToEdit.host.imgUrl }}</span
      ><br />
    </div> -->

    <!-- <br />
    <br />
    <br />

    <div class="desc-main-con">
      <span style="font-size: 30px">Stay description:</span>
      <br />
      {{ stayToEdit.summary }}
    </div> -->

    <!-- <br />
    <br />
    <br />

    <div class="amenities-main-con">
      <span style="font-size: 30px">Amenities</span>
      <br />
      <span>{{ stayToEdit.amenities }}</span
      ><br />
    </div> -->

    <!-- <br />
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
    </div> -->
    <!-- 
    <br />
    <br />
    <br />
    <br /> -->
  </div>
  <!-- <br />
  <br />
  <br />
  <br />
  <br />
  <br /> -->
  <!-- <div v-if="this.stayToEdit">
    <pre> -->
  <!-- Name:            <span>{{stayToEdit.name}}</span><br /> -->
  <!-- Type:            <span>{{stayToEdit.type}}</span><br /> XXX -->
  <!-- Img url:         <span>{{stayToEdit.imgUrls[0]}}</span><br /> -->
  <!-- Img:<img :src="stayToEdit.imgUrls[0]" /><br /> -->
  <!-- Price:           <span>{{stayToEdit.price}}</span><br />XXX -->
  <!-- Summary:         <span>{{stayToEdit.summary}}</span><br /> -->
  <!-- Capacity:        <span>{{stayToEdit.capacity}}</span><br />XXX -->
  <!-- Amenities:       <span>{{stayToEdit.amenities}}</span><br /> -->
  <!-- Host id:         <span>{{stayToEdit.host._id}}</span><br />XXX -->
  <!-- Host fullname:   <span>{{stayToEdit.host.fullname}}</span><br /> -->

  <!-- loc country:     <span>{{stayToEdit.loc.country}}</span><br />XXX -->
  <!-- loc countryCode: <span>{{stayToEdit.loc.countryCode}}</span><br />XXX -->
  <!-- loc address:     <span>{{stayToEdit.loc.address}}</span><br /> -->
  <!-- loc lat:         <span>{{stayToEdit.loc.lat}}"</span><br />XXX -->
  <!-- loc lng:         <span>{{stayToEdit.loc.lng}}</span><br /> -->

  <!-- </pre> -->
  <!-- <br /> -->

  <!-- <button @click.prevent="update">Update</button> -->
  <!-- </div>
  <div v-else>{{ displayMsg }}</div> -->
</template>

<script>
export default {
  data() {
    return {
      range: {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 0, 5),
      },
      filterBy: {
        address: '',
        guests: {
          adults: 0,
          children: 0,
        },
      },
      IsGuestModalOpen: false,
      IsCalanderModalOpen: false,
      displayCalendar: false,
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
    showCalendar() {
      console.log('blaaa');
      this.displayCalendar = !this.displayCalendar;
    },
    displayGuestModal() {
      console.log('blaaaa21321321');
      this.IsGuestModalOpen = !this.IsGuestModalOpen;
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
.details-main-con {
  margin-top: 26px;
  /* margin 200px original */
  /* margin-left: 13vw;
  margin-right: 13vw; */
  margin-left: 13%;
  margin-right: 13%;
}
@media only screen and (min-width: 1000px) and (max-width: 1200px) and (orientation: landscape) {
  .details-main-con {
    margin-left: 10%;
    margin-right: 10%;
  }
}
@media only screen and (min-width: 800px) and (max-width: 1000px) and (orientation: landscape) {
  .details-main-con {
    margin-left: 5%;
    margin-right: 5%;
  }
}
@media only screen and (min-width: 500px) and (max-width: 800px) and (orientation: landscape) {
  .details-main-con {
    margin-left: 0;
    margin-right: 0;
  }
}
.order-dialog-main-con {
  position: sticky;
  top: 0px;
  padding: 25px;
  padding-top: 22px;
  width: 415px;
  height: 298px;
  border-radius: 10px;
  border: 1px solid gray;
}
.order-form-submit {
  position: absolute;
  z-index: -10;
  width: 366px;
  height: 64px;
  background: #e11a60;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 580;
  font-family: airbnb-regular, sans-serif;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
}
.order-form-top-con {
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
}
.details-stay-name {
  font-size: 23.5px;
  line-height: 27px;
  color: black;
  font-weight: 700;
}
.details-stay-short-info {
  color: black;
  font-size: 14px;
  line-height: 20px;
  /* font-weight: 700; */
  display: flex;
  justify-content: space-between;
}
.details-stay-short-info-address {
  color: gray;
  text-decoration: underline;
}
.details-stay-short-info-right {
  display: flex;
}
.middle-con {
  display: flex;
  width: 100%;
  height: 910px;
  margin-top: 52px;
  /* background-color: yellow; */
}
.middle-con-sec1 {
  width: 654px;
  /* height: 1875px; */
  /* background-color: blue; */
}
.middle-con-sec2 {
  display: flex;
  justify-content: flex-end;
  width: 466px;
  /* height: 1875px; */
  /* background-color: red; */
}
.order-form-calendar {
  /* display: none; */
}
.amenities-btn {
  border: 1px solid black;
  border-radius: 8px;

  font-weight: 500;
  font-size: 15px;
  width: 208px;
  height: 47px;
  color: black;
  background-color: white;
  /* font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif; */
}
.section-calendar {
  width: 100%;
  height: 284px;
}
.section-calendar-btn {
  color: black;
}
.section-calendar-btn:hover {
  background-color: lightgray;
}

.order-form-check-in-btn {
  text-align: left;
  height: 63px;
  /* width: 50%; */
  width: 179px;
  margin: 0px !important;
  border-radius: 10px 0 0 0 !important;
  border: 1px solid gray;
  border-bottom: none;
}
.order-form-check-out-btn {
  text-align: left;
  height: 63px;
  /* width: 50%; */
  width: 186px;
  margin: 0px !important;
  border-radius: 0 10px 0 0 !important;
  border: 1px solid gray;
  border-bottom: none;
  border-left: none;
}
.order-form-guest-btn {
  text-align: left !important;
  height: 55px;
  /* width: 100%; */
  /* background: purple; */
  width: 365px;
  border-radius: 0 0 10px 10px !important;
  border: 1px solid gray;
}
.order-dates {
  /* background: #000; */
}
.order-form-middle-con {
  width: 365px;
  margin-bottom: 15px;
}
.check {
  font-weight: bold;
  font-size: 10px;
}
.add-dates {
  /* font-weight: bold; */
  font-weight: 100;
  font-size: 14px;
}
.order-form-night {
  font-size: 18px;
}
.space-con {
  width: 100%;
  height: 65px;
  /* background-color: blue; */
}

.guest-flex {
  display: flex;
}
.guest-flex-column {
  display: flex;
  flex-direction: column;
}

.guests-modal {
  float: left;
  display: flex;
  flex-direction: column;
  line-height: 20px;
  top: 8.5rem;
  right: 18.75rem;
  width: 21.87rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 18%);
  z-index: 2;
  padding: 1.25rem;
  gap: 20px;
}
.close-modal-btn {
  justify-self: flex-end;
  cursor: pointer;
  margin: 0;
  padding: 0;
  align-self: flex-end;
}

.modal-txt {
  display: flex;
  flex-direction: column;
}
.modal-btn {
  display: flex;
  align-items: center;
}
span {
  margin: 0 6px;
}
.btn {
  border: 1px solid #b0b0b0;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  color: #717171;
  text-align: center;
}
input {
  background-color: transparent;
  border: none;
  box-shadow: none;
  margin: 0;
  line-height: 20px;
  outline: none;
}

.save-btn,
.share-btn {
  color: black;
  font-size: 16px;
  text-decoration: underline;
}
.date-modal {
  float: left;

  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
}
</style>
