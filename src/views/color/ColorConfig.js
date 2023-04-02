
class colorConfig {
    constructor() {
        this.tableName = 'Color';
        this.titleForm = "Thêm màu";
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
  