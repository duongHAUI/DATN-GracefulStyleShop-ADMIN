const constants = {
  /**
   * List item sidebar
   */
  SidebarMenu: [
    {
      text: "Sản phẩm",
      classIcon: "icon-overview",
      path : "/products",
      name:"Product"
    },
    {
      text: "Màu",
      classIcon: "icon-cash",
      path : "/colors",
      name:"Color"
    },
    {
      text: "Kích cỡ",
      classIcon: "icon-cash",
      path : "/sizes",
      name:"Size"
    },
    {
      text: "Thương hiệu",
      classIcon: "icon-cash",
      path : "/brands",
      name:"Brand"
    },
    {
      text: "Thể loại",
      classIcon: "icon-cash",
      path : "/types",
      name:"Type"
    },
    {
      text: "Nhà cung cấp",
      classIcon: "icon-cash",
      path : "/suppliers",
      name:"Supplier"
    },
  ],
  /**
   * List item pageSize
   */
  listNavigateNumber: [
    {
      id: 10,
      value: "10 bản ghi trên 1 trang",
    },
    {
      id: 20,
      value: "20 bản ghi trên 1 trang",
    },
    {
      id: 30,
      value: "30 bản ghi trên 1 trang",
    },
    {
      id: 50,
      value: "50 bản ghi trên 1 trang",
    },
    {
      id: 100,
      value: "100 bản ghi trên 1 trang",
    },
  ],
  /**
   * List item pageSize
   */
  listStatusFilterImport: [
    {
      id: 3,
      value: "Tất cả",
    },
    {
      id: 1,
      value: "Không hợp lệ",
    },
    {
      id: 2,
      value: "Hợp lệ",
    }
  ],
  /**
   * Regex
   */
  regexConstants: {
		EmployeeCode: /^NV-[0-9]{1,17}$/,
		Email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		PhoneNumber: /((09|03|07|08|05)+([0-9]{8})\b)/,
		PhoneNumberFixed: /((09|03|07|08|05)+([0-9]{8})\b)/,
	},
};

export default constants;