import axiosClient from "./axiosClient";
const baseUrl = "departments/";

/**
 * Các API liên quan đến Employee
 * Author: NVDuong - 04/01/23
 */
const useDepartment = {
    /**
     * Lấy tất cả các phòng ban
     * Author: NVDuong - 04/01/23
     */
    getAll: () => {
      try {
        return axiosClient.get(baseUrl);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Thêm phòng ban
     * Author: NVDuong - 04/01/23
     */
    createDep: (employee) => {
      try {
        return axiosClient.post(baseUrl, employee);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Sửa phòng ban
     * Author: NVDuong - 04/01/23
     */
    updateDep: (id, newEmployee) => {
      try {
        return axiosClient.put(baseUrl + id, newEmployee);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Xóa phòng ban theo Id
     * Author: NVDuong - 04/01/23
     */
    deleteDep: (id) => {
      try {
        return axiosClient.delete(baseUrl + id);
      } catch (error) {
        console.log(error);
      }
    },
  };
  
  export default useDepartment;