import {reactive} from 'vue'

/**
 * các biến global
 * Author : NVDuong (10/1/2023)
 */
const state = reactive({
  form : 0,
  titleForm : "Màu",
  isSaveForm : false,
  nameTable: "Color",
  idModel : "",
  level : 0,
  parentName :"",
  parentPath  : "",
  isShowForm : false,
  isLoadding : false,
  /**
   * Mảng chứa các toast message
   * Author : NVDuong (10/1/2023)
   */
  toastMessage: [],
  /**
   * Biến to nhỏ Sidebar
   * Author : NVDuong (10/1/2023)
   */
  toggleSidebar : true,
  /**
   * Hàm hiển thị toast message
   * Author : NVDuong (10/1/2023)
   */
  addToastMessage: function (me, msg) {
    me.$state.toastMessage.unshift(msg);
    if (this.timeout) clearTimeout(this.timeout);
    setTimeout(() => {
     me.$state.toastMessage.splice(me.$state.toastMessage.length-1, 1);
     clearTimeout();
   }, 4000);
  },
  isMask(){
    this.isLoadding = true;
  },
  unMask(){
    this.isLoadding = false;
  }
});

export default {
  state
};
