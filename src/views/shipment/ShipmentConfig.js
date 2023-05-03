import enumD from "@/assets/js/enum";
class shipmentConfig {
    constructor() {
        this.tableName = 'Shipment';
        this.titleForm = "Phương thức giao hàng";
        this.formName = enumD.formName.shipment;
        this.columns = [
            {
                name : "ShipmentCode",
                title : "Mã phương thức",
                textAlign : "left",
                type : "text",
                width : 150,
            },
            {
                name : "ShipmentName",
                title : "Tên phương thức",
                textAlign : "left",
                type : "text",
                width : 150,
            },
            {
                name : "DateReceive",
                title : "Thời gian nhận sau khoảng (ngày)",
                textAlign : "left",
                type : "text",
                width : 150,
            },
            {
                name : "PriceShip",
                title : "Phí ship",
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
        ];
        this.placeholder = "Tìm kiếm ";
    }
  }
  export default shipmentConfig;
  