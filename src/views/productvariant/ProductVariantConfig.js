import enumMISA from "@/assets/js/enum";
class productvariantConfig {
    constructor() {
        this.tableName = 'ProductVariant';
        this.titleForm = "Sản phẩm";
        this.formName = enumMISA.formName.productvariant;
        this.parentName = "Sản phẩm"
        this.parentPath = "/products"
        this.columns = [
            {
                name : "ProductName",
                title : "Mã sản phẩm",
                textAlign : "left",
                type : "text",
                width : 150,
            },
            {
                name : "Quantity",
                title : "Số lượng",
                textAlign : "left",
                type : "text",
                width : 150,
            },
            {
                name : "Price",
                title : "Giá tiền",
                textAlign : "left",
                type : "image",
                width : 150,
            },
            {
                name : "ColorName",
                title : "Màu",
                textAlign : "left",
                type : "number",
                width : 150,
            },
            {
                name : "SizeCode",
                title : "Kích thước",
                textAlign : "left",
                type : "number",
                width : 150,
            },
        ];
        this.placeholder = "Tìm kiếm ";
    }
  }
  export default productvariantConfig;
  