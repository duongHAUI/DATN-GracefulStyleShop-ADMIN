<template>
  <div class="form-submit">
    <div class="m__e-form">
      <div class="form__row" style="width: 100%">
        <MInput
            textField="Số lượng"
            v-model="formData.Quantity"
            :required="true"
            ref="Quantity"
            name="Quantity"
            :tabIndex="1"
            dis
            :errorMsg="errorMsgObject?.Quantity"
            :rules="[rules.NOT_EMPTY, `${rules.MAX_LENGTH}|20`]"
            @message-error-input="handleBindMessageInput"
          />
      </div>
      <div class="form__col" style="width: 100%">
        
        <div class="form__row" style="width: 100%">
        <div class="form__row f-bw" style="width: 48%">
          <MCombobox
            :data="listColor"
            v-model="formData.ColorId"
            ref="ColorId"
            propName="ColorName"
            propValue="ColorId"
            :rules="[rules.NOT_EMPTY]"
            name="ColorId"
            textField="Màu"
            :tabIndex="3"
            :required="true"
            :errorMsg="errorMsgObjectInput?.ColorId"
            @message-error-input="handleBindMessageInput"
          />
          
        </div>
        <div class="form__col" style="width: 48%">
            <MCombobox
              :data="listSize"
              v-model="formData.SizeId"
              ref="SizeId"
              propName="SizeCode"
              propValue="SizeId"
              :rules="[rules.NOT_EMPTY]"
              name="SizeId"
              textField="Kích cỡ"
              :tabIndex="4"
              :required="true"
              :errorMsg="errorMsgObjectInput?.SizeId"
              @message-error-input="handleBindMessageInput"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MInput from "@/components/input/MInput.vue";
import resources from "@/assets/js/resource";
import mixinForm from "@/mixins/mixinForm.js";
import MCombobox from "@/components/combobox/MCombobox.vue";
import baseApi from "@/api/baseApi";
export default {
  name: "FormColor",
  emits: ["update:modelValue"],
  components: {
    MInput,
    MCombobox
  },
  mixins: [mixinForm],
  created: async function () {
    this.listColor = await this.getDataCombobox("Color");
    this.listSize = await this.getDataCombobox("Size");
    this.formData.ProductId = this.$route.params.id;
  },
  props: {
    modelValue: Object,
  },
  data() {
    return {
      isShow: true,
      rules: resources.FORM_RULES, // Rules validate
      formData: {},
      errorMsgObject: {},
      listColor: [],
      listSize: [],
      api: baseApi,
    };
  },
  methods: {
    async getDataCombobox(tableName) {
      this.api = new baseApi(tableName);
      let res = await this.api.getByFilter({ pageSize: 100, numberPage: 1 });
      return res.Data;
    },
  },
};
</script>
<style scoped>
.m-pop-up{
  min-width: 1500px !important;
}
</style>
