import enumMISA from "@/assets/js/enum";
class supplyConfig {
    constructor() {
        this.tableName = 'Supply';
        this.titleForm = "Thông tin nhập hàng";
        this.formName = enumMISA.formName.supply;
        this.mode = enumMISA.enumMode.view;
        this.lock = enumMISA.enumLock.notAllowLock;
        this.delete = enumMISA.enumDelete.notAllowDelete;
        this.columns = [
            {
                name : "ProductCode",
                title : "Mã sản phẩm",
                textAlign : "left",
                type : "text",
                width : 150,
            },
            {
                name : "ProductName",
                title : "Tên sản phẩm",
                textAlign : "left",
                type : "text",
                width : 150,
            },
            {
                name : "SizeCode",
                title : "Kích cỡ",
                textAlign : "left",
                type : "text",
                width : 150,
            },
            {
                name : "ColorName",
                title : "Màu sắc",
                textAlign : "left",
                type : "text",
                width : 150,
            },
            {
                name : "SupplyDate",
                title : "Ngày nhập",
                textAlign : "center",
                type : "date",
                width : 150,
            },
            {
                name : "Quantity",
                title : "Số lượng nhập",
                textAlign : "right",
                type : "number",
                width : 150,
            },
            {
                name : "PriceSupply",
                title : "Giá nhập",
                textAlign : "right",
                type : "number",
                width : 150,
            },
            {
                name : "SupplierName",
                title : "Nhà cung cấp",
                textAlign : "left",
                type : "text",
                width : 150,
            },
        ];
        this.placeholder = "Tìm kiếm ";
    }
  }
  export default supplyConfig;
  