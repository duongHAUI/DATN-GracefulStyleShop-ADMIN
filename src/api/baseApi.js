import axiosClient from "./axiosClient";
/**
 * Các API liên quan đến Employee
 */
class baseApi {
  constructor(table) {
    this.baseUrl = table + "/";
  }
  baseUrl = ""
  /**
   * Lấy các nhân viên theo bộ lọc
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
