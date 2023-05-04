import enumD from "@/assets/js/enum";
class orderConfig {
    constructor() {
        this.tableName = 'OrderDetail';
        this.titleForm = "Đơn hàng";
        this.formName = enumD.formName.orderdetail;
        this.columns = [
            {
                name : "OrderCode",
                title : "Mã đơn hàng",
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
                name : "Sold",
                title : "Đã bán",
                textAlign : "right",
                type   : "number",
                width : 150,
            },
            {
                name : "Quantity",
                title : "Lượng có",
                textAlign : "center",
                type : "number",
                width : 150,
            },
            {
                name : "PriceSale",
                title : "Giá bán",
                textAlign : "center",
                type : "number",
                width : 150,
            },
            {
                name : "Discount",
                title : "% giảm giá",
                textAlign : "center",
                type : "number",
                width : 150,
            },
            {
                name : "PublicDate",
                title : "Ngày ra mắt",
                textAlign : "center",
                type : "date",
                width : 150,
            },
            {
                name : "TypeName",
                title : "Thể loại",
                textAlign : "left",
                type : "text",
                width : 150,
            },
            {
                name : "BrandName",
                title : "Thương hiệu",
                textAlign : "left",
                type : "text",
                width : 150,
            },
        ];
        this.placeholder = "Tìm kiếm ";
    }
  }
  export default orderConfig;
  