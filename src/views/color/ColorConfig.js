import enumMISA from "@/assets/js/enum";
class colorConfig {
    constructor() {
        this.tableName = 'Color';
        this.titleForm = "Thêm";
        this.formName = enumMISA.formName.color;
        this.search = false;
        this.columns = [
            {
                name : "ColorCode",
                title : "Mã màu",
                textAlign : "center",
                width : 150,
            },
            {
                name :"ColorName",
                title : "Tên màu",
                textAlign : "left",
                width : 150,
            },
        ];
        this.placeholder = "Tìm kiếm theo màu";
    }
  }
  export default colorConfig;
  