/**
 * Các msg thông báo
 * Author : NVDuong (9/1/2023)
 */
const resources = {
  vi: {
    /**
     * msg validate form nhan vien
     * Author : NVDuong (9/1/2023)
     */
    FORM_MESSAGE: {
      SUCCESS: {
        ADD: "Thêm mới nhân viên thành công!",
        EDIT: "Sửa nhân viên thành công!",
        DELETE: "Xóa nhân viên thành công",
      },
      ERROR: {
        NOT_EMPTY: (name) => `${name} không được để trống.`,
        UNIQUE: (name) => `${name} đã tồn tại.`,
        ADULT: (name) => `${name} không hợp lệ.`,
        HAS_FORMAT: (name) => `${name} chưa đúng định dạng.`,
        MAX_LENGTH: (name, length) =>
          `${name} không được vượt quá ${length} ký tự.`,
        INVALID: (name) => `${name} không hợp lệ.`,
        NOT_EXIST: (name) => `${name} không tồn tại.`,
      },
    },
    /**
     * Tên trường của input
     * Author : NVDuong (9/1/2023)
     */
    FORM_FIELD: {
      EmployeeCode: "Mã nhân viên",
      FullName: "Tên nhân viên",
      DepartmentId: "Đơn vị",
      PositionName: "Chức danh",
      DateOfBirth: "Ngày sinh",
      IdentityNumber: "Số chứng minh",
      IdentityDate: "Ngày cấp",
      IdentityPlace: "Nơi cấp",
      Address: "Địa chỉ",
      PhoneNumber: "Số điện thoại",
      PhoneNumberFixed: "Số điện thoại cố định",
      Email: "Email",
      BankAccount: "Số tài khoản",
      BankName: "Tên ngân hàng",
      BankBranchName: "Chi nhánh ngân hàng",
    },
    /**
     * Các thông báo toast-msg
     * Author : NVDuong (9/1/2023)
     */

    TOAST_MESSAGE: {
      SUCCESS: function (name) {
        var message = {
          messageType: "Thành công!",
          messageContent: `${name} thành công.`,
          colorMsg: "green",
          classIcon: "icon-success-small",
        };
        return message;
      },
      ERROR: function (name) {
        var message = {
          messageType: "Lỗi!",
          messageContent: `${name}`,
          colorMsg: "red",
          classIcon: "icon-error-round-small",
        };
        return message;
      },
    },
    /**
     * Tên file
     * Author : NVDuong (9/1/2023)
     */
    nameFile: {
      templateImport: "Mau_danh_muc_nhan_vien.xlsx",
      fileExport: "Danh_sach_nhan_vien.xlsx",
      fileImportValidate:"Kết quả kiểm tra.xlsx"  
    },
    /**
     * Trạng thái dòng import
     * Author : NVDuong (9/1/2023)
     */
    statusRowImport: {
      valid: "Hợp lệ.",
      invalid: "Không hợp lệ.",
    },
    /**
     * Tiêu đề chức năng
     * Author : NVDuong (9/1/2023)
     */
    ACTION: {
      ADD: "Thêm",
      EDIT: "Sửa",
      DELETE: "Xóa",
    },
    /**
     * Các thông báo lỗi api
     * Author : NVDuong (9/1/2023)
     */
    errorMessageAPI:{
      ERROR_NETWORK: "Có lỗi phản hồi từ máy chủ vui lòng thử lại sau.",
      ERROR_AUTHENTICATE: "Bạn không có quyền.",
      ERROR_SERVER: "Lỗi máy chủ vui lòng thử lại.",
      ERROR_CLENT: "Có lỗi vui lòng thử lại sau.",
    },
    messageImport: {
      fileNotSelected: "Bạn chưa chọn tệp dữ liệu. Vui lòng kiểm tra lại." ,    
    }
  },
  /**
   * Các rules validate
   * Author : NVDuong (9/1/2023)
   */
  FORM_RULES: {
    NOT_EMPTY: "NOT_EMPTY",
    HAS_FORMAT: "HAS_FORMAT",
    UNIQUE: "UNIQUE",
    ADULT: "ADULT",
    MAX_LENGTH: "MAX_LENGTH",
  },
};
export default resources;
