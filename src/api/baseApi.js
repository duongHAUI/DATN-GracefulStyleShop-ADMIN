import axiosClient from "./axiosClient";
/**
 * Các API liên quan đến Employee
 * Author: NVDuong - 04/01/23
 */
class baseApi {
  constructor(table) {
    this.baseUrl = table + "/";
    /**
     * Lấy tất cả các phòng ban
     * Author: NVDuong - 04/01/23
     */
    /**
   * Lấy các nhân viên theo bộ lọc
   * Author: NVDuong - 04/01/2023
   */
    this.getByFilter =  (params) => {
      try {
        return axiosClient.post(this.baseUrl + "filter",params );
      } catch (error) {
        console.log(error);
      }
    },
    this.getAll = () => {
      try {
        return axiosClient.get(this.baseUrl);
      } catch (error) {
        console.log(error);
      }
    },
     /**
   * Lấy mã nhân viên mới
   * Author: NVDuong - 04/01/23
   */
  this.getNewCode = () => {
    try {
      return axiosClient.get(this.baseUrl + "GetNewCode");
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Lấy 1 nhân viên theo Id
   * Author: NVDuong - 04/01/2023
   */
  this.getById = (id) => {
    try {
      return axiosClient.get(this.baseUrl + id);
    } catch (error) {
      console.log(error);
    }
  },
      /**
       * Thêm phòng ban
       * Author: NVDuong - 04/01/23
       */
      this.create = (employee) => {
        try {
          return axiosClient.post(this.baseUrl, employee);
        } catch (error) {
          console.log(error);
        }
    },
      /**
       * Sửa phòng ban
       * Author: NVDuong - 04/01/23
       */
      this.update = (id, newEmployee) => {
        try {
          return axiosClient.put(this.baseUrl + id, newEmployee);
        } catch (error) {
          console.log(error);
        }
      },
      /**
       * Xóa phòng ban theo Id
       * Author: NVDuong - 04/01/23
       */
      this.remove = (ids) => {
        try {
          return axiosClient.post(this.baseUrl + "Delete-Records",ids);
        } catch (error) {
          console.log(error);
        }
      };
  }
}

export default baseApi;
