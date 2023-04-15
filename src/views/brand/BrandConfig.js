import enumMISA from "@/assets/js/enum";
class brandConfig {
    constructor() {
        this.tableName = 'Brand';
        this.formName = enumMISA.formName.brand;
        this.titleForm = "Nhãn hiệu";
        this.columns = [
            {
                name : "BrandCode",
                title : "Mã thương hiệu",
                textAlign : "left",
                width : 150,
            },
            {
                name :"BrandName",
                title : "Tên thương hiệu",
                textAlign : "left",
                width : 150,
            },
            {
                name :"Description",
                title : "Mô tả",
                textAlign : "left",
                width : 150,
            },
        ];
        this.placeholder = "Tìm kiếm ";
    }
  }
  export default brandConfig;
  