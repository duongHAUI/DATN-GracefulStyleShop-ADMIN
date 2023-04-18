import enumMISA from "@/assets/js/enum";
class customerConfig {
    constructor() {
        this.tableName = 'Customer';
        this.titleForm = "Khách hàng";
        this.formName = enumMISA.formName.customer;
        this.mode  = enumMISA.enumMode.view;
        this.columns = [
            {
                name : "CustomerName",
                title : "Tên khách hàng",
                textAlign : "left",
                type : "text",
                width : 150,
            },
            {
                name : "Email",
                title : "Email",
                textAlign : "left",
                type : "text",
                width : 150,
            },
            {
                name : "Phone",
                title : "Số điện thoại",
                textAlign : "right",
                type : "number",
                width : 150,
            },
            {
                name : "CreatedAt",
                title : "Thời gian tạo",
                textAlign : "center",
                type : "date",
                width : 150,
            },
            {
                name : "ModifiedAt",
                title : "Thời gian sửa",
                textAlign : "center",
                type : "date",
                width : 150,
            },
        ];
        this.placeholder = "Tìm kiếm ";
    }
  }
  export default customerConfig;
  