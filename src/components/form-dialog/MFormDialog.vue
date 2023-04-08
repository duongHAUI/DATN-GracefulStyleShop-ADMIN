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
        <FormBrand
          v-if="$state.form == formNameEnum.brand"
          :ref="$state.nameTable"
          v-model="model"
        />
        <FormType
          v-if="$state.form == formNameEnum.type"
          :ref="$state.nameTable"
          v-model="model"
        />
        <FormProduct
          v-if="$state.form == formNameEnum.product"
          :ref="$state.nameTable"
          v-model="model"
        />
        <FormProductVariant
          v-if="$state.form == formNameEnum.productvariant"
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
import fileApi from "@/api/fileApi";
import FormBrand from "@/views/brand/FormBrand.vue";
import FormProduct from "@/views/product/FormProduct.vue";
import FormProductVariant from "@/views/productvariant/FormProductVariant.vue";
import FormType from "@/views/type/FormType.vue";
export default {
  name: "MFormPopup",
  components: {
    MButton,
    FormColor,
    FormSize,
    FormBrand,
    FormProduct,
    FormType,
    FormProductVariant,
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
      const res = await this.baseApi.getById(this.$state.idModel);
      this.model = res;
    },
    async onSubmitFormEmployee(method) {
      // eslint-disable-next-line no-debugger
      debugger
      this.isLoading = true;
      if (method) {
        console.log(method);
      }
      if (!this.checkValidateFormSubmit()) {
        return;
      }

      // kiểm tra là thêm hay sửa
      var res = this.$state.idModel
        ? await this.baseApi.update(this.$state.idModel, this.model) // Gọi api Update
        : await this.baseApi.create(this.model); // Gọi api Create

      // Xử lý custom
      await this.insertOrUpdateCustom(res.Data);

      if (method != enumMISA.enumActionButtonForm.addAndSave) {
        this.$state.isShowForm = false;
      } 

      this.model = {};
      this.$state.idModel = "";
      this.$state.isSaveForm = true;
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
      for (const property in this.$refs[this.$state.nameTable].errorMsgObject) {
        if (this.$refs[this.$state.nameTable].errorMsgObject[property]) {
          this.$refs[this.$state.nameTable].$refs[property].onFocus();
          return false;
        }
      }
      return true;
    },
    closeForm() {
      // eslint-disable-next-line no-debugger
      debugger
      this.$state.isShowForm = false;
      this.$state.idModel = "";
      this.model = {};
    },

    async insertOrUpdateCustom(id) {
      try {
        if (this.$state.form == this.formNameEnum.product) {
          let formData = new FormData();
          for (let index = 0; index < this.model.Images.files.length; index++) {
            formData.append("Files[]", this.model.Images.files[index]);
          }
          formData.append("Images", [
            "c98155d9-2fe9-4a03-bda5-e44c9d78be5c",
            "2a3d331e-a8f3-47ce-b09d-b169231e2f75",
          ]);

          formData.append("ObjectId", id);
          const api = new fileApi();
          await api.insertImages(formData);
          this.model.Images = null;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    "$state.isShowForm": async function () {
      if (this.$state.isShowForm) {
        if (this.$state.idModel) {
          await this.getInfo();
        }
      }
    },
    "$state.nameTable": function () {
      this.baseApi = new baseApi(this.$state.nameTable);
    },
  },
};
</script>
