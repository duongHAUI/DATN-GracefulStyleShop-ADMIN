import enumMISA from "@/assets/js/enum";
class productConfig {
    constructor() {
        this.tableName = 'Product';
        this.titleForm = "Thêm";
        this.formName = enumMISA.formName.product;
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
                name : "Image",
                title : "Ảnh minh họa",
                textAlign : "center",
                type : "image",
                width : 150,
            },
            {
                name : "Sold",
                title : "Đã bán",
                textAlign : "right",
                type : "number",
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
                type : "image",
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
  export default productConfig;
  