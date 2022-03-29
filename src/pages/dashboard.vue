<template>
  <div class="dashboard-con">
    <div class="dashboard">
      <div class="dashboard-top-section">
        <div class="dashboard-data-con">
          <div class="dashboard-data data-rate">
            <h4 class="dashboard-data-rate-title">Rate</h4>
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
                <span class="dashboard-data-rate-count-number">0</span>
              </div>
            </div>
          </div>
          <div class="dashboard-data data-revenues">
            <h4 class="dashboard-data-revenues-title">Revenues</h4>
            <div class="dashboard-data-revenues-period-con">
              <div class="dashboard-data-revenues-period period-month">
                <span class="dashboard-data-revenues-period-month">Month</span>
                <span class="dashboard-data-revenues-period-month">$0</span>
              </div>
              <div class="dashboard-data-revenues-period period-year">
                <span class="dashboard-data-revenues-period-year-">Year</span>
                <span class="dashboard-data-revenues-period-year">$0</span>
              </div>
              <div class="dashboard-data-revenues-period period-total">
                <span class="dashboard-data-revenues-period-total">Total</span>
                <span class="dashboard-data-revenues-period-total">$0</span>
              </div>
            </div>
          </div>
          <div class="dashboard-data data-orders">
            <h4 class="dashboard-data-orders-title">Orders</h4>
            <div class="dashboard-data-orders-status-con">
              <div class="dashboard-data-orders-status-con-top">
                <div class="dashboard-data-orders-status">
                  <span class="dashboard-data-orders-status-title">Total</span>
                  <span class="dashboard-data-orders-status-number status-total"
                    >0</span
                  >
                </div>
                <div class="dashboard-data-orders-status">
                  <span class="dashboard-data-orders-status-title"
                    >Pending</span
                  >
                  <span
                    class="dashboard-data-orders-status-number status-pending"
                    >0</span
                  >
                </div>
              </div>
              <div class="dashboard-data-orders-status-con-bottom">
                <div class="dashboard-data-orders-status">
                  <span class="dashboard-data-orders-status-title"
                    >Approved</span
                  >
                  <span
                    class="dashboard-data-orders-status-number status-approved"
                    >0</span
                  >
                </div>
                <div class="dashboard-data-orders-status">
                  <span class="dashboard-data-orders-status-title"
                    >Declined</span
                  >
                  <span
                    class="dashboard-data-orders-status-number status-declined"
                    >0</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="dashboard-data data-guests">
            <h4 class="dashboard-data-guests-title">Guests</h4>
            <div class="dashboard-data-guests-status-con">
              <div class="dashboard-data-guests-status">
                <span class="dashboard-data-guests-status-title">Active</span>
                <span class="dashboard-data-guests-status-number status-total"
                  >0</span
                >
              </div>
              <div class="dashboard-data-guests-status">
                <span class="dashboard-data-guests-status-title">Past</span>
                <span class="dashboard-data-guests-status-number status-total"
                  >0</span
                >
              </div>
              <div class="dashboard-data-guests-status">
                <span class="dashboard-data-guests-status-title">Planned</span>
                <span class="dashboard-data-guests-status-number status-total"
                  >0</span
                >
              </div>
            </div>
            <h4 class="dashboard-data-guests-count"></h4>
          </div>
        </div>
      </div>
      <div class="dashboard-bottom-section">
        <div class="dashboard-summary">
          <button class="dashboard-summary-stays" @click="switchTable('stays')">
            <img
              src="../assets/backoffice-house.svg"
              alt="stays-img"
              class="dashboard-summary-stays-img backoffice-img"
            />
            <h4 class="dashboard-summary-stays-title">Stays</h4>
          </button>
          <button
            class="dashboard-summary-orders"
            @click="switchTable('orders')"
          >
            <img
              src="../assets/backoffice-list.svg"
              alt="orders-img"
              class="dashboard-summary-orders-img backoffice-img"
            />
            <h4 class="dashboard-summary-orders-title">Orders</h4>
          </button>
        </div>
        <div class="dashboard-details">
          <div
            v-if="currTable === 'orders'"
            class="dashboard-details-table orders-table"
          >
            <table>
              <th class="dashboard-details-th stays-table-avatar"></th>
              <th class="dashboard-details-th stays-table-guest">Guest Name</th>
              <th class="dashboard-details-th stays-table-stay">Stay Name</th>
              <th class="dashboard-details-th stays-table-check">
                Check In - Check Out
              </th>
              <th class="dashboard-details-th stays-table-status">Status</th>
              <th class="dashboard-details-th stays-table-revenue">Revenue</th>
              <th class="dashboard-details-th stays-table-actions">Actions</th>
              <tr class="dashboard-details-tr"></tr>
              <tr
                v-for="stay in staysForDisplay"
                :key="stay._id"
                class="dashboard-details-tr orders-table-content"
              >
                <td class="orders-table-content-guest">Ariel</td>
                <td class="orders-table-content-name">{{ stay.name }}</td>
                <td class="orders-table-content-date">01/01/2022-06/01/2022</td>
                <td class="orders-table-content-status">Approved</td>
                <td class="orders-table-content-revenue">${{ stay.price }}</td>
                <td class="orders-table-content-actions">Accept</td>
              </tr>
            </table>
          </div>
          <div v-else class="dashboard-details-table stays-table">
            <table>
              <th class="dashboard-details-th orders-table-avatar"></th>
              <th class="dashboard-details-th orders-table-name">Name</th>
              <th class="dashboard-details-th orders-table-price">Price</th>
              <th class="dashboard-details-th orders-table-address">Address</th>
              <th class="dashboard-details-th orders-table-actions">Actions</th>
              <tr
                v-for="stay in staysForDisplay"
                :key="stay._id"
                class="dashboard-details-tr orders-table-content"
              >
                <td class="orders-table-content-name">{{ stay.name }}</td>
                <td class="orders-table-content-guest">{{ stay.price }}</td>
                <td class="orders-table-content-date">
                  {{ stay.address.street }}
                </td>
                <td class="orders-table-content-status">Edit</td>
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
      currTable: "orders",
    };
  },
  methods: {
    switchTable(val) {
      if (val === "stays") this.currTable = "stays";
      else this.currTable = "orders";
    },
  },
  created() {
    this.loggedInUser = this.$store.getters.loggedinUser;
    console.log(this.loggedInUser);
    this.$store.dispatch({
      type: "loadStaysForBackOffice",
      user: this.loggedInUser,
    });
    this.staysForDisplay = this.$store.getters.getStaysForBackOffice;
    console.log(this.staysForDisplay);
  },
  computed: {
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
      else return "N/A";
    },
    //     const array1 = [1, 2, 3, 4];

    // // 0 + 1 + 2 + 3 + 4
    // const initialValue = 0;
    // const sumWithInitial = array1.reduce(
    //   (previousValue, currentValue) => previousValue + currentValue,
    //   initialValue
    // );

    // console.log(sumWithInitial);
    // // expected output: 10
  },
};
</script>

<style></style>
