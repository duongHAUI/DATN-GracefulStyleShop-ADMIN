<template>
  <div class="home">
    <div class="row">
      <div class="card">
        <div class="card-block">
          <div class="row align-items-center">
            <div class="col-8">
              <h4 class="text-c-yellow f-w-600">$30200</h4>
              <h6 class="text-muted m-b-0">All Earnings</h6>
            </div>
            <div class="col-4 text-right">
              <i class="feather icon-bar-chart f-28"></i>
            </div>
          </div>
        </div>
        <div class="card-footer bg-c-yellow">
          <div class="row align-items-center">
            <div class="col-9">
              <p class="text-white m-b-0">% change</p>
            </div>
            <div class="col-3 text-right">
              <i class="feather icon-trending-up text-white f-16"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <div class="row align-items-center">
            <div class="col-8">
              <h4 class="text-c-yellow f-w-600">$30200</h4>
              <h6 class="text-muted m-b-0">Doanh thu</h6>
            </div>
            <div class="col-4 text-right">
              <i class="feather icon-bar-chart f-28"></i>
            </div>
          </div>
        </div>
        <div class="card-footer bg-c-green">
          <div class="row align-items-center">
            <div class="col-9">
              <p class="text-white m-b-0">% change</p>
            </div>
            <div class="col-3 text-right">
              <i class="feather icon-trending-up text-white f-16"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <div class="row align-items-center">
            <div class="col-8">
              <h4 class="text-c-yellow f-w-600">$30200</h4>
              <h6 class="text-muted m-b-0">Đơn hàng</h6>
            </div>
            <div class="col-4 text-right">
              <i class="feather icon-bar-chart f-28"></i>
            </div>
          </div>
        </div>
        <div class="card-footer bg-c-pink">
          <div class="row align-items-center">
            <div class="col-9">
              <p class="text-white m-b-0">Sản phẩm</p>
            </div>
            <div class="col-3 text-right">
              <i class="feather icon-trending-up text-white f-16"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <div class="row align-items-center">
            <div class="col-8">
              <h4 class="text-c-yellow f-w-600">$30200</h4>
              <h6 class="text-muted m-b-0">Khách hàng</h6>
            </div>
            <div class="col-4 text-right">
              <i class="feather icon-bar-chart f-28"></i>
            </div>
          </div>
        </div>
        <div class="card-footer bg-c-blue">
          <div class="row align-items-center">
            <div class="col-9">
              <p class="text-white m-b-0">% change</p>
            </div>
            <div class="col-3 text-right">
              <i class="feather icon-trending-up text-white f-16"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-char">
      <div class="char-left">
        <VueApexCharts
          width="500"
          type="bar"
          :options="options1"
          :series="series1"
        ></VueApexCharts>
      </div>
      <div class="char-right">
        <VueApexCharts
          width="500"
          type="donut"
          :options="options2"
          :series="series2"
        ></VueApexCharts>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  name: "MHome",
  components: {
    VueApexCharts,
  },
  created(){
    this.$state.nameTable = "Home";
  },
  data: function () {
    return {
      options1: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [
            "T1",
            "T2",
            "T3",
            "T4",
            "T5",
            "T6",
            "T7",
            "T8",
            "T9",
            "T10",
            "T11",
            "T12",
          ],
        },
        title: {
              text: 'Doanh thu theo năm',
              floating: true,
              align: 'center',
              style: {
                color: '#444'
              }
            }
      },
      series1: [
        {
          name: "Doanh thu",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 12, 12, 34, 66],
        },
      ],


      series2: [44, 55, 41, 17],
      options2: {
        chart: {
          width: 300,
          type: 'donut',
        },
        labels: ["Apple", "Samsung", "Tablet", "Xiaome"],
        responsive: [{
          breakpoint: 2000,
          options: {
            chart: {
              width: 400
            },
            legend: {
              position: 'right'
            }
          }
        }],
      },
    };
  },
};
</script>
<style>
@import url(./home.css);
.m-main-content{
  background-color: rgba(127, 255, 212, 0.436) !important;
}
</style>