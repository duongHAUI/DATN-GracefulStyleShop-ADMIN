<template>
  <div class="home">
    <div class="row">
      <div class="card">
        <div class="card-block">
          <div class="row align-items-center">
            <h4 class="text-c-yellow f-w-600">
              {{ $state.formatPrice(statisticDefault.Revenue) }}
            </h4>
          </div>
        </div>
        <div class="card-footer bg-c-green">
          <div class="align-items-center">
            <i class="fa-solid fa-dollar-sign"></i> Doanh thu
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <div class="row align-items-center">
            <h4 class="text-c-yellow f-w-600">
              {{ statisticDefault.OrderNumber }}
            </h4>
          </div>
        </div>
        <div class="card-footer bg-c-blue">
          <div class="align-items-center">
            <i class="fa-solid fa-receipt"></i>Đơn hàng
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <div class="row align-items-center">
            <h4 class="text-c-yellow f-w-600">
              {{ statisticDefault.ProductNumber }}
            </h4>
          </div>
        </div>
        <div class="card-footer bg-c-pink">
          <div class="align-items-center">
            <i class="fa-solid fa-shirt"></i>Sản phẩm
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <div class="row align-items-center">
            <h4 class="text-c-yellow f-w-600">
              {{ statisticDefault.CustomerNumber }}
            </h4>
          </div>
        </div>
        <div class="card-footer bg-c-yellow">
          <div class="align-items-center">
            <i class="fa-solid fa-users"></i> Khách hàng
          </div>
        </div>
      </div>
    </div>
    <div class="home-char">
      <!-- <div class="char-left">
        <VueApexCharts
          width="500"
          type="bar"
          :options="options1"
          :series="series1"
        ></VueApexCharts>
      </div> -->
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
    <!-- Đơn hàng -->
  </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
import statisticApi from "@/api/statisticApi";
export default {
  name: "MHome",
  components: {
    VueApexCharts,
  },
  created: async function () {
    this.$state.nameTable = "Home";
    let res = await new statisticApi().StatisticDefault();
    this.statisticDefault = res;

    res = await new statisticApi().SellingProductToMonthNow({
      Year: new Date().getFullYear(),
      Month: new Date().getMonth() + 1,
    });
    // eslint-disable-next-line no-debugger
    debugger
    res.forEach((product) => {
      this.options2.labels.push(product.ProductName);
    });
    const totalQuantity = res.reduce((acc, cur) => acc + cur.totalQuantity, 0);
    res.forEach((product) => {
      const percentage = (product.totalQuantity / totalQuantity) * 100;
      this.series2.push(percentage);
    });
  },
  data: function () {
    return {
      statisticDefault: {},
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
          text: "Doanh thu theo năm",
          floating: true,
          align: "center",
          style: {
            color: "#444",
          },
        },
      },
      series1: [
        {
          name: "Doanh thu",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 12, 12, 34, 66],
        },
      ],

      series2: [],
      options2: {
        chart: {
          width: 400,
          type: "donut",
        },
        labels: [],
        responsive: [
          {
            breakpoint: 2000,
            options: {
              chart: {
                width: 600,
              },
              legend: {
                position: "right",
              },
            },
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.m-main-content {
  background-color: rgba(117, 251, 206, 0.436) !important;
}
.home-char {
  margin-top: 24px;
  width: 100%;
}
.char-right{
  flex: 1
}
.char-left{
  flex: 1
}
@import url(./home.css);
</style>
