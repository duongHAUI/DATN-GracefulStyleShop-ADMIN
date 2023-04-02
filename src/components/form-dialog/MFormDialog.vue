<template>
  <div v-if="isShow" class="m-pup-up-main">
    <div
      class="m-pop-up w-700"
      :style="{ padding: padding, minWidth: minWidth }"
    >
      <div class="m__e-form-header">
        <div class="m__e-form-title">
          {{ $state.titleForm }}
        </div>
      </div>
      <div class="m-form-dialog">
        <FormColor
          v-if="$state.form == formNameEnum.color"
          :ref="$state.nameTable"
          v-model="model"
        />
        <FormSize
          v-if="$state.form == formNameEnum.size"
          :ref="$state.nameTable"
          v-model="model"
        />
      </div>
      <div class="m__e-form-footer-btn">
        <div class="m__e-form-btn__left" @click="destroyForm()">
          <MButton
            typeBtn="close"
            :tabIndex="20"
            name="EndForm"
            ref="EndForm"
            @click="closeForm"
            >Hủy</MButton
          >
        </div>
        <div class="m__e-form-btn__right">
          <MButton
            margin="0 16px 0 0"
            typeBtn="close"
            :tabIndex="18"
            @click="onSubmitFormEmployee(actionButtonForm.save)"
            dataTip="Cất (Ctrl + S)"
            >Cất</MButton
          >
          <MButton
            :tabIndex="19"
            @click="onSubmitFormEmployee(actionButtonForm.addAndSave)"
            dataTip="Cất và thêm (Ctrl + Shift + S)"
            >Thêm và cất</MButton
          >
        </div>
      </div>
      <div
        class="m-pop-up-close"
        :class="iconCloseClass"
        :data-tip-icon="dataTipIcon"
        @click="closePopUp"
      ></div>
    </div>
  </div>
</template>
<script>
import MButton from "../button/MButton.vue";
import FormColor from "@/views/color/FormColor.vue";
import FormSize from "@/views/size/FormSize.vue";
import enumMISA from "@/assets/js/enum";
import baseApi from "@/api/baseApi";
export default {
  name: "MFormPopup",
  components: {
    MButton,
    FormColor,
    FormSize,
  },
  props: {
    submitForm: String,
    formData: Object,
    isShow: Boolean,
  },
  created() {},
  data() {
    return {
      formNameEnum: enumMISA.formName,
      model: {},
      baseApi: new baseApi(this.$state.nameTable),
      actionButtonForm: enumMISA.enumActionButtonForm, // Chức năng button form
    };
  },
  methods: {
    async getInfo() {
      // eslint-disable-next-line no-debugger
      debugger;
      const res = await this.baseApi.getById(this.$state.idModel);
      // eslint-disable-next-line no-debugger
      debugger;
      this.model = res;
    },
    async onSubmitFormEmployee(method) {
      // eslint-disable-next-line no-debugger
      debugger;
      this.isLoading = true;
      if (method) {
        console.log(method);
      }
      if (!this.checkValidateFormSubmit()) {
        return;
      }

      // kiểm tra là thêm hay sửa
      this.$state.idModel
        ? await this.baseApi.update(this.$state.idModel, this.model) // Gọi api Update
        : await this.baseApi.create(this.model); // Gọi api Create

      if (method == enumMISA.enumActionButtonForm.addAndSave) {
        this.model = {};
        this.$state.idModel = "";
      } else this.$state.isShowForm = false;

      this.isLoading = true;
    },
    /**
     * Hàm validate form true : không lỗi
     * Author : NVDuong (05/1/2023)
     */
    checkValidateFormSubmit() {
      for (const property in this.$refs[this.$state.nameTable].$refs) {
        this.$refs[this.$state.nameTable].$refs[property]?.checkValidate();
      }
      for (const property in this.$refs[this.$state.nameTable].$refs
        .errorMsgObject) {
        if (this.$refs[this.$state.nameTable].errorMsgObject[property]) {
          this.$refs[this.$state.nameTable].$refs[property].onFocus();
          return false;
        }
      }
      return true;
    },
    closeForm() {
      this.$state.isShowForm = false;
      this.$state.idModel = "";
      this.model = {};
    },
  },
  watch: {
    "$state.isShowForm": async function () {
      if (this.$state.isShowForm) {
        // eslint-disable-next-line no-debugger
        debugger;
        if (this.$state.idModel) {
          await this.getInfo();
        }
      }
    },
  },
};
</script>
