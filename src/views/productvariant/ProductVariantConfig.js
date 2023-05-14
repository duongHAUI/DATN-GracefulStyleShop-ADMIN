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
                textAlign : "right",
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
                name : "SizeNumber",
                title : "Kích cỡ",
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
            {
                name : " ",
                title : " ",
                textAlign : "center",
                type : "text",
                width : 400,
            },
            
        ];
        this.placeholder = "Tìm kiếm ";
    }
  }
  export default productvariantConfig;
  