import enumD from "@/assets/js/enum";
class productvariantConfig {
    constructor() {
        this.tableName = 'ProductVariant';
        this.titleForm = "Sản phẩm";
        this.formName = enumD.formName.productvariant;
        this.parentName = "Sản phẩm"
        this.parentPath = "/products"
        this.columns = [
            {
                name : "Quantity",
                title : "Số lượng",
                textAlign : "left",
                type : "text",
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
  