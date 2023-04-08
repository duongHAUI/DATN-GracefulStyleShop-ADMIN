import axiosClient from "./axiosClient";

export class fileApi {
  /**
   * Lấy các nhân viên theo bộ lọc
   * Author: NVDuong - 04/01/2023
   */
  insertImages = (params) => {
    try {
      return axiosClient.post("/File", params, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default fileApi;
