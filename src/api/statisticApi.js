import axiosClient from "./axiosClient";

export class statisticApi {
  /**
   * Lấy các nhân viên theo bộ lọc
   */
  StatisticDefault = () => {
    try {
      return axiosClient.get("Statistic/statistic-default");
    } catch (error) {
      console.log(error);
    }
  };
}

export default statisticApi;
