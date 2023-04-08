export default {
  data() {
    return {
      errorMsgObject : {}
    };
  },
  methods: {
    /**
     * Xử lý khi input message lỗi
     * Author : NVDuong (05/1/2023)
     */
    handleBindMessageInput(name, msgError) {
      this.errorMsgObject[name] = msgError;
    },
  },
  watch:{
    formData:{
      handler(newValue) {
        this.$emit("update:modelValue",newValue);
      },
      deep: true
    },
    modelValue:{
      handler(newValue){
        this.formData =  newValue;
      },
      deep: true
    }
  }
};
