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
                  <span class="dashboard-data-rate-average-number">0</span>
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
          <button class="dashboard-summary-stays">
            <img
              src="../assets/backoffice-house.svg"
              alt="stays-img"
              class="dashboard-summary-stays-img backoffice-img"
            />
            <h4 class="dashboard-summary-stays-title">Stays</h4>
          </button>
          <button class="dashboard-summary-orders">
            <img
              src="../assets/backoffice-list.svg"
              alt="orders-img"
              class="dashboard-summary-orders-img backoffice-img"
            />
            <h4 class="dashboard-summary-orders-title">Orders</h4>
          </button>
        </div>
        <div class="dashboard-details">
          <div class="dashboard-details-table stays-table">
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
              <tr class="dashboard-details-tr stays-table-content"></tr>
            </table>
          </div>
          <div class="dashboard-details-table orders-table">
            <table>
              <th class="dashboard-details-th orders-table-avatar"></th>
              <th class="dashboard-details-th orders-table-name">Name</th>
              <th class="dashboard-details-th orders-table-price">Price</th>
              <th class="dashboard-details-th orders-table-address">Address</th>
              <th class="dashboard-details-th orders-table-actions">Actions</th>
              <tr class="dashboard-details-tr"></tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
