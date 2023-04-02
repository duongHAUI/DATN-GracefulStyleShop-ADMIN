import axiosClient from "./axiosClient";
const baseUrl = "employees/";

/**
 * Các API liên quan đến Employee
 * Author: NVDuong - 04/01/2023
 */
const useEmpoyee = {
  /**
   * Lấy tất cả các nhân viên
   * Author: NVDuong - 04/01/2023
   */
  getAllEmp: () => {
    try {
      return axiosClient.get(baseUrl);
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Lấy các nhân viên theo bộ lọc
   * Author: NVDuong - 04/01/2023
   */
  getEmpByFilter: (params) => {
    try {
      return axiosClient.post(baseUrl + "filter",params );
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Lấy mã nhân viên mới
   * Author: NVDuong - 04/01/23
   */
  getNewEmpCode: () => {
    try {
      return axiosClient.get(baseUrl + "NewEmployeeCode");
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Lấy 1 nhân viên theo Id
   * Author: NVDuong - 04/01/2023
   */
  getEmpById: (id) => {
    try {
      return axiosClient.get(baseUrl + id);
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Thêm nhân viên
   * Author: NVDuong - 04/01/2023
   */
  createEmp: (employee) => {
    try {
      return axiosClient.post(baseUrl, employee);
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Sửa nhân viên
   * Author: NVDuong - 04/01/2023
   */
  updateEmp: (id, newEmployee) => {
    try {
      return axiosClient.put(baseUrl + id, newEmployee);
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Xóa nhân viên theo Id
   * Author: NVDuong - 04/01/2023
   */
  deleteEmp: (id) => {
    try {
      return axiosClient.delete(baseUrl + id);
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Xóa nhiều nhân viên theo list Id
   * Author: NVDuong - 04/01/2023
   */
  deleteEmployees: (listId) => {
    try {
      return axiosClient.post(baseUrl + "Delete-Records",listId);
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Export nhân viên
   * Author: NVDuong - 11/02/2023
   */
  ExportEmp: (filter) => {
    try {
      return axiosClient({
        method: 'POST',
        url: baseUrl+'ExportExcel',
        responseType : 'blob',
        data : filter
      })
    } catch (error) {
      console.log(error);
    }
  },
  
  /**
   * Export file validate nhân viên
   * Author: NVDuong - 11/02/2023
   */
  FileImportValidate: (data) => {
    try {
      return axiosClient({
        method: 'POST',
        url: baseUrl+'FileImportValidate',
        responseType : 'blob',
        data : {employees : data}
      })
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Xuất file template mẫu import
   * Author: NVDuong - 11/02/2023
   */
  templateImport: () => {
    try {
      return axiosClient({
        method: 'GET',
        url: baseUrl+'FileImportEmployeeTemplate',
        responseType : 'blob',
      })
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Xuất file template mẫu import
   * Author: NVDuong - 11/02/2023
   */
  checkValidateDataImport: (fileForm) => {
    try {
      return axiosClient({
        method: 'POST',
        url: baseUrl+'ValidateDataImport',
        headers:{
          'Content-Type' : "multipart/form-data"
        },
        data : fileForm
      })
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Nhập file check validate file
   * Author: NVDuong - 15/02/2023
   */
  checkValidateFileImport : (fileForm) =>{
    try {
      // return axiosClient.post(baseUrl + "CheckBasicFileImport",fileForm);
      return axiosClient({
        method: 'POST',
        url: baseUrl+'CheckBasicFileImport',
        headers:{
          'Content-Type' : "multipart/form-data"
        },
        data : fileForm
      });
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Nhập file check validate file
   * Author: NVDuong - 15/02/2023
   */
  ImportExcel : (listEmployee) =>{
    try {
      // return axiosClient.post(baseUrl + "CheckBasicFileImport",fileForm);
      return axiosClient({
        method: 'POST',
        url: baseUrl+'ImportExcel',
        data : listEmployee
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export default useEmpoyee;