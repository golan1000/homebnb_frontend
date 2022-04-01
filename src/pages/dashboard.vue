<template>
  <div class="dashboard-con">
    <div class="dashboard">
      <div class="dashboard-top-section">
        <div class="dashboard-data-con">
          <div class="dashboard-data data-rate">
            <h4 class="dashboard-data-rate-title data-title">Rating</h4>
            <div class="dashboard-data-rate-content">
              <div class="dashboard-data-rate-average">
                <span class="dashboard-data-rate-average-title">Average</span>
                <div class="dashboard-data-rate-average-content">
                  <img
                    src="../assets/star.svg"
                    alt="star image"
                    class="dashboard-data-rate-img"
                  />
                  <span class="dashboard-data-rate-average-number">{{
                    setAvgRating
                  }}</span>
                </div>
              </div>
              <div class="dashboard-data-rate-count">
                <span class="dashboard-data-rate-count-title">Reviews</span>
                <span class="dashboard-data-rate-count-number">{{
                  setReviewsCount
                }}</span>
              </div>
            </div>
          </div>
          <div class="dashboard-data data-orders">
            <h4 class="dashboard-data-orders-title data-title">Orders</h4>
            <div class="dashboard-data-orders-status-con">
              <!-- <div class="dashboard-data-orders-status-con-top"> -->
              <!-- <div class="dashboard-data-orders-status">
                  <span class="dashboard-data-orders-status-title">Total</span>
                  <span
                    class="dashboard-data-orders-status-number status-total"
                    >{{ ordersForDisplay.length }}</span
                  >
                </div> -->
              <!-- </div> -->
              <!-- <div class="dashboard-data-orders-status-con-bottom"> -->
              <div class="dashboard-data-orders-status">
                <span class="dashboard-data-orders-status-title">Approved</span>
                <span
                  class="dashboard-data-orders-status-number status-approved"
                  >{{ ordersApproved }}</span
                >
              </div>
              <div class="dashboard-data-orders-status">
                <span class="dashboard-data-orders-status-title">Pending</span>
                <span
                  class="dashboard-data-orders-status-number status-pending"
                  >{{ ordersPending }}</span
                >
              </div>
              <div class="dashboard-data-orders-status">
                <span class="dashboard-data-orders-status-title">Declined</span>
                <span
                  class="dashboard-data-orders-status-number status-declined"
                  >{{ ordersDeclined }}</span
                >
              </div>
            </div>
            <!-- </div> -->
          </div>
          <div class="dashboard-data data-guests">
            <h4 class="dashboard-data-guests-title data-title">Guests</h4>
            <div class="dashboard-data-guests-status-con">
              <div class="dashboard-data-guests-status">
                <span class="dashboard-data-guests-status-title">Past</span>
                <span
                  class="dashboard-data-guests-status-number status-total"
                  >{{ guestsPast }}</span
                >
              </div>
              <div class="dashboard-data-guests-status">
                <span class="dashboard-data-guests-status-title">Present</span>
                <span
                  class="dashboard-data-guests-status-number status-total"
                  >{{ guestsPresent }}</span
                >
              </div>
              <div class="dashboard-data-guests-status">
                <span class="dashboard-data-guests-status-title">Future</span>
                <span
                  class="dashboard-data-guests-status-number status-total"
                  >{{ guestsFuture }}</span
                >
              </div>
            </div>
            <h4 class="dashboard-data-guests-count"></h4>
          </div>
          <div class="dashboard-data data-revenues">
            <h4 class="dashboard-data-revenues-title data-title">Revenues</h4>
            <div class="dashboard-data-revenues-period-con">
              <div class="dashboard-data-revenues-period period-month">
                <span class="dashboard-data-revenues-period-month-title"
                  ><span class="span-this">this</span>Month</span
                >
                <span class="dashboard-data-revenues-period-month-num">{{
                  revenueMonth
                }}</span>
              </div>
              <div class="dashboard-data-revenues-period period-year">
                <span class="dashboard-data-revenues-period-year-title"
                  ><span class="span-this">this</span>Year</span
                >
                <span class="dashboard-data-revenues-period-year-num">{{
                  revenueYear
                }}</span>
              </div>
              <!-- <div class="dashboard-data-revenues-period period-total">
                <span class="dashboard-data-revenues-period-total">Total</span>
                <span class="dashboard-data-revenues-period-total">{{
                  revenueTotal
                }}</span>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard-bottom-section">
        <div class="dashboard-summary">
          <button
            class="dashboard-summary-orders"
            :class="{ focused: currTable === 'orders' }"
            @click="switchTable('orders')"
          >
            <img
              src="../assets/backoffice-list.svg"
              alt="orders-img"
              class="dashboard-summary-orders-img backoffice-img"
            />
            <h4 class="dashboard-summary-orders-title">Orders</h4>
          </button>
          <button
            class="dashboard-summary-stays"
            :class="{ focused: currTable === 'stays' }"
            @click="switchTable('stays')"
          >
            <img
              src="../assets/backoffice-house.svg"
              alt="stays-img"
              class="dashboard-summary-stays-img backoffice-img"
            />
            <h4 class="dashboard-summary-stays-title">Stays</h4>
          </button>
        </div>
        <div class="dashboard-details">
          <div
            v-if="currTable === 'orders'"
            class="dashboard-details-table orders-table"
          >
            <table>
              <th class="dashboard-details-orders-th orders-table-pic"></th>
              <th class="dashboard-details-orders-th orders-table-guest">
                Guest Name
              </th>
              <th class="dashboard-details-orders-th orders-table-stay">
                Stay Name
              </th>
              <th class="dashboard-details-orders-th orders-table-check">
                Check In - Check Out
              </th>
              <th class="dashboard-details-orders-th orders-table-created">
                Created At
              </th>
              <th class="dashboard-details-orders-th orders-table-revenue">
                Revenue
              </th>
              <th class="dashboard-details-orders-th orders-table-status">
                Status
              </th>
              <th class="dashboard-details-orders-th orders-table-actions">
                Actions
              </th>
              <tr class="dashboard-details-orders-tr"></tr>
              <tr
                v-for="order in ordersForDisplay"
                :key="order._id"
                class="dashboard-details-tr orders-table-content"
              >
                <td class="orders-table-content-pic">:)</td>
                <td class="orders-table-content-guest">
                  {{ order.buyer.fullname }}
                </td>
                <td class="orders-table-content-stay">{{ order.stay.name }}</td>
                <td class="orders-table-content-check">
                  {{ order.startDate }} - {{ order.endDate }}
                </td>
                <td class="orders-table-content-created">
                  ${{ order.createdAt }}
                </td>
                <td class="orders-table-content-revenue">
                  ${{ order.totalPrice }}
                </td>
                <td
                  class="orders-table-content-status"
                  :style="{
                    color:
                      order.status === 'pending'
                        ? 'rgb(215 176 64)'
                        : order.status === 'Approved'
                        ? '#1ab11a'
                        : '#df1616',
                  }"
                >
                  {{ order.status }}
                </td>
                <td class="orders-table-content-actions">
                  <div
                    v-if="order.status === 'Declined'"
                    class="orders-table-content-actions-approve"
                    @click="onUpadeOrderStatus(order._id, 'Approved')"
                  >
                    Approve
                  </div>
                  <div
                    v-if="order.status === 'Approved'"
                    class="orders-table-content-actions-decline"
                    @click="onUpadeOrderStatus(order._id, 'Declined')"
                  >
                    Decline
                  </div>
                  <div
                    v-if="order.status === 'pending'"
                    class="orders-table-content-actions-inner"
                  >
                    <div
                      class="orders-table-content-actions-approve"
                      @click="onUpadeOrderStatus(order._id, 'Approved')"
                    >
                      Approve
                    </div>
                    <div
                      class="orders-table-content-actions-decline"
                      @click="onUpadeOrderStatus(order._id, 'Declined')"
                    >
                      Decline
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div v-else class="dashboard-details-table stays-table">
            <table>
              <th class="dashboard-details-stays-th stays-table-pic"></th>
              <th class="dashboard-details-stays-th stays-table-name">Name</th>
              <th class="dashboard-details-stays-th stays-table-address">
                Address
              </th>
              <th class="dashboard-details-stays-th stays-table-price">
                Price
              </th>
              <th class="dashboard-details-stays-th stays-table-actions">
                Actions
              </th>
              <tr
                v-for="stay in staysForDisplay"
                :key="stay._id"
                class="dashboard-details-tr stays-table-content"
              >
                <td class="stays-table-content-pic">
                  <img
                    class="backoffice-stay-img"
                    :src="`data/Images/${stay.imgUrls[0]}`"
                    alt="backoffice-stay-pic"
                  />
                </td>
                <td class="stays-table-content-name">{{ stay.name }}</td>
                <td class="stays-table-content-address">
                  {{ stay.address.street }}
                </td>
                <td class="stays-table-content-price">${{ stay.price }}</td>
                <td class="stays-table-content-actions">
                  <div class="stays-table-content-actions-inner">
                    <img
                      class="img-edit"
                      src="../assets/edit.svg"
                      alt="img-edit"
                    />
                    Edit
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedInUser: {},
      staysForDisplay: [],
      ordersForDisplay: [],
      currTable: 'orders',
      currMonth: null,
      currYear: null,
      currDay: null,
      guestsPast: 0,
      guestsPresent: 0,
      guestsFuture: 0,
      ordersApproved: 0,
      ordersDeclined: 0,
      ordersPending: 0,
      revenueMonth: 0,
      revenueYear: 0,
      revenueTotal: 0,
    };
  },
  methods: {
    switchTable(val) {
      if (val === 'stays') this.currTable = 'stays';
      else this.currTable = 'orders';
    },
    async onUpadeOrderStatus(orderId, status) {
      console.log(orderId, status);
      try {
        const order = this.ordersForDisplay.find(
          (order) => order._id === orderId
        );
        console.log(order);
        order.status = status;
        const updatedOrder = await this.$store.dispatch({
          type: 'updateOrder',
          order,
          user: this.loggedInUser,
        });
        this.ordersForDisplay = this.$store.getters.getOrders;
        console.log(this.ordersForDisplay);
        console.log('order updated', updatedOrder);
      } catch (err) {
        console.log('cold not change order status');
      }
    },
  },
  async created() {
    try {
      this.loggedInUser = await this.$store.getters.getLoggedUser;
      console.log(this.loggedInUser);
      await this.$store.dispatch({
        type: 'loadStaysForBackOffice',
        user: this.loggedInUser,
      });
      this.staysForDisplay = await this.$store.getters.getStaysForBackOffice;
      console.log(this.staysForDisplay);
      await this.$store.dispatch({
        type: 'loadOrders',
        user: this.loggedInUser,
      });
      this.ordersForDisplay = await this.$store.getters.getOrders;
      console.log(this.ordersForDisplay);
      this.setCurrDates;
      this.setCurrGuests;
      this.setCurrOrdersData;
      this.setCurrRevenues;
      this.date;
    } catch (err) {
      console.log('err', err);
    }
  },
  computed: {
    // firstCapitalLetter(str) {
    //     var firstLetter = str.slice(0, 1).toUpperCase()
    //     var newStr = firstLetter + str.substring(1)
    //     return newStr
    // },
    setAvgRating() {
      if (this.staysForDisplay.length > 1) {
        let avg = this.staysForDisplay.reduce(
          (previousValue, currentValue) =>
            previousValue + currentValue.reviewScores.rating,
          0
        );
        avg /= this.staysForDisplay.length;
        return avg;
      } else if (this.staysForDisplay.length === 1)
        return this.staysForDisplay[0].reviewScores.rating;
      else return 'N/A';
    },
    setReviewsCount() {
      if (this.staysForDisplay.length > 1) {
        let count = this.staysForDisplay.reduce(
          (previousValue, currentValue) =>
            previousValue + currentValue.reviews.length,
          0
        );
        return count;
      } else if (this.staysForDisplay.length === 1)
        return this.staysForDisplay[0].reviews.length;
      else return 'N/A';
    },
    setCurrDates() {
      let date = new Date();
      this.currMonth = date.getMonth() + 1;
      this.currYear = date.getFullYear();
      this.currDay = date.getDate();
      console.log(this.currMonth);
      console.log(this.currYear);
      console.log(this.currDay);
    },
    date() {
      console.log(date.Parse(this.ordersForDisplay[2].startDate));
    },
    setCurrGuests() {
      if (!this.ordersForDisplay.length) return;
      console.log(this.ordersForDisplay.length);
      for (var i = 0; i < this.ordersForDisplay.length; i++) {
        const startDate = new Date(this.ordersForDisplay[i].startDate * 1000);
        console.log(startDate);
        const startMonth = startDate.getMonth() + 1;
        console.log(startMonth);
        const startYear = startDate.getFullYear();
        console.log(startYear);
        const startDay = startDate.getDate();
        console.log(startDay);
        const endDate = new Date(this.ordersForDisplay[i].endDate * 1000);
        console.log(endDate);
        const endMonth = endDate.getMonth() + 1;
        console.log(endMonth);
        const endYear = endDate.getFullYear();
        console.log(endYear);
        const endDay = endDate.getDate();
        console.log(endDay);
        if (endYear < this.currYear) {
          this.guestsPast++;
          continue;
        }
        if (startYear > this.currYear) {
          this.guestsFuture++;
          continue;
        }
        if (endMonth < this.currMonth) {
          this.guestsPast++;
          continue;
        }
        if (startMonth > this.currMonth) {
          this.guestsFuture++;
          continue;
        }
        if (endDay < this.currDay) {
          this.guestsPast++;
          continue;
        }
        if (startDay > this.currDay) {
          this.guestsFuture++;
          continue;
        }
        if (
          startDay === this.currDay ||
          endDay === this.currDay ||
          (startDay < this.currDay && endDay > this.currDay)
        ) {
          this.guestsPresent++;
          continue;
        }
      }
    },
    setCurrOrdersData() {
      if (!this.ordersForDisplay.length) return;
      for (var i = 0; i < this.ordersForDisplay.length; i++) {
        if (this.ordersForDisplay[i].status === 'pending') this.ordersPending++;
        if (this.ordersForDisplay[i].status === 'Declined')
          this.ordersDeclined++;
        if (this.ordersForDisplay[i].status === 'Approved')
          this.ordersApproved++;
      }
    },
    setCurrRevenues() {
      if (!this.ordersForDisplay.length) return;
      for (var i = 0; i < this.ordersForDisplay.length; i++) {
        const startDate = new Date(this.ordersForDisplay[i].startDate * 1000);
        const startMonth = startDate.getMonth() + 1;
        const startYear = startDate.getFullYear();
        if (startYear === this.currYear) {
          this.revenueYear += this.ordersForDisplay[i].totalPrice;
          if (startMonth === this.currMonth) {
            this.revenueMonth += this.ordersForDisplay[i].totalPrice;
          }
        }
        this.revenueTotal += this.ordersForDisplay[i].totalPrice;
      }
    },
    setStatus(status) {
      if (status === 'Decline') {
      }
    },
  },
  watch: {
    ordersForDisplay: {
      handler() {
        this.$store.dispatch({
          type: 'loadOrders',
          user: this.loggedInUser,
        });
      },
    },
  },
};
</script>

<style></style>

watch: { // whenever question changes, this function will run
question(newQuestion, oldQuestion) { if (newQuestion.indexOf('?') > -1) {
this.getAnswer() } } },
