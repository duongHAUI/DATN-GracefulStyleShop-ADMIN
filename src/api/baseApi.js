import axiosClient from "./axiosClient";
/**
 * Các API liên quan đến Employee
 * Author: NVDuong - 04/01/23
 */
class baseApi {
  constructor(table) {
    this.baseUrl = table + "/";
  }
  baseUrl = ""
  /**
   * Lấy các nhân viên theo bộ lọc
   * Author: NVDuong - 04/01/2023
   */
  getByFilter = (params) => {
    try {
      return axiosClient.post(this.baseUrl + "filter", params);
    } catch (error) {
      console.log(error);
    }
  };
  getAll = () => {
    try {
      return axiosClient.get(this.baseUrl);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Lấy mã nhân viên mới
   * Author: NVDuong - 04/01/23
   */
  getNewCode = () => {
    try {
      return axiosClient.get(this.baseUrl + "GetNewCode");
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Lấy 1 nhân viên theo Id
   * Author: NVDuong - 04/01/2023
   */
  getById = (id) => {
    try {
      return axiosClient.get(this.baseUrl + id);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Thêm phòng ban
   * Author: NVDuong - 04/01/23
   */
  create = (employee) => {
    try {
      return axiosClient.post(this.baseUrl, employee);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Sửa phòng ban
   * Author: NVDuong - 04/01/23
   */
  update = (id, newEmployee) => {
    try {
      return axiosClient.put(this.baseUrl + id, newEmployee);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Xóa phòng ban theo Id
   * Author: NVDuong - 04/01/23
   */
  remove = (ids) => {
    try {
      return axiosClient.post(this.baseUrl + "Delete-Records", ids);
    } catch (error) {
      console.log(error);
    }
  };
}

export default baseApi;
