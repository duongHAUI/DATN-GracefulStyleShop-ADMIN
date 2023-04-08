import enumMISA from "@/assets/js/enum";
class typeConfig {
    constructor() {
        this.tableName = 'Type';
        this.formName = enumMISA.formName.type;
        this.titleForm = "Thể loại";
        this.search = false;
        this.columns = [
            {
                name : "TypeCode",
                title : "Mã thể loại",
                textAlign : "left",
                width : 150,
            },
            {
                name :"TypeName",
                title : "Tên thể loại",
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
  export default typeConfig;
  