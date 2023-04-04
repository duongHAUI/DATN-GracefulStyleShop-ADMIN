import enumMISA from "@/assets/js/enum";
class sizeConfig {
    constructor() {
        this.tableName = 'Size';
        this.formName = enumMISA.formName.size;
        this.titleForm = "Thêm";
        this.search = false;
        this.columns = [
            {
                name : "SizeCode",
                title : "Mã kích cỡ",
                textAlign : "left",
                width : 150,
            },
            {
                name :"SizeNumber",
                title : "Số kích cỡ",
                textAlign : "left",
                width : 150,
            },
        ];
        this.placeholder = "Tìm kiếm theo size";
    }
  }
  export default sizeConfig;
  