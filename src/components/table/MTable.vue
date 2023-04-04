<template>
  <div class="m__e-fixed-table">
    <table class="m__e-table">
      <tr class="m__e-table-row">
        <MTableColumn tag="th" className="col-fixed-left">
          <MCheckBox
            id="check-all"
            @checkboxSelected="checkboxSelected"
            :checked="checkedAll"
          />
        </MTableColumn>
        <MTableColumn
          tag="th"
          :width="column.width"
          :textAlign="column.textAlign"
          v-for="(column, index) in columns"
          :key="index"
          >{{ column.title }}</MTableColumn
        >
        <MTableColumn tag="th" className="col-fixed-right"
          >Chức năng</MTableColumn
        >
      </tr>
      <tr
        class="m__e-table-row"
        v-for="(row, index) in rows"
        :key="index"
        :class="{ active: rowsSelected.includes(row) }"
        @dblclick="updateRows(row[`${tableName}Id`])"
      >
        <MTableColumn className="col-fixed-left">
          <MCheckBox
            :id="row[`${tableName}Id`]"
            :checked="rowsSelected.includes(row[`${tableName}Id`])"
            @checkboxSelected="checkboxSelected"
          />
        </MTableColumn>
        <MTableColumn v-for="(column, index) in columns" :key="index">{{
          row[column.name]
        }}</MTableColumn>
        <MTableColumn className="col-fixed-right col-center">
          <div
            class="m__e-table-col-function-btn"
            ref="btnFunctionMenu"
          >
            <span>Sửa</span>
            <div
              class="m__e-table-col-icon"
              v-click-outside="clickOutSideFunction"
              ref="btnFunction"
              :class="
                id === row[`${tableName}Id`] && isShowfunction ? 'active' : ''
              "
              @click="showFunctionId($event, row[`${tableName}Id`])"
            >
              <div class="icon-drop-page-blue"></div>
            </div>
          </div>
        </MTableColumn>
      </tr>
    </table>
    <div class="m__e-list-empty" v-if="rows.length == 0">
      <img
        src="@/assets/img/bg_report_nodata.76e50bd8.svg"
        alt="Không có dữ liệu"
      />
      <span>Không có dữ liệu</span>
    </div>
    <div
      class="m__e-table-col-function"
      :style="{
        top: `${functionTop}px `,
        left: `${functionLeft}px `,
      }"
      v-show="isShowfunction"
      ref="functionContextMenu"
    >
      <li>Nhân bản</li>
      <li @click="confirmDeleteRow">Xóa</li>
      <li data-tip="Tính năng chưa phát triển">Ngừng sử dụng</li>
    </div>
  </div>
  <!-- Pop-up thông báo khi xóa -->
  <MPopUpWarn :isShow="isPopUpDelete" @close-pop-up="isPopUpDelete = false">
    {{ `Bạn có thực sự muốn xóa không ?` }}
    <template #footer>
      <div class="warning__delete-btn">
        <div @click="isPopUpDelete = false">
          <MButton typeBtn="close">Không</MButton>
        </div>
        <div @click="deleteRow()">
          <MButton typeBtn="delete">Có</MButton>
        </div>
      </div>
    </template>
  </MPopUpWarn>
</template>
<script>
import MButton from "../button/MButton.vue";
import MCheckBox from "../checkbox/MCheckBox.vue";
import MPopUpWarn from "../pop-up/MPopUpWarn.vue";
import MTableColumn from "../table-column/MTableColumn.vue";
export default {
  name: "MTable",
  emits:["update:modelValue","delete"],
  components: {
    MPopUpWarn,
    MButton,
    MTableColumn,
    MCheckBox,
  },
  props: {
    columns: Object,
    rows: Object,
    tableName: String,
    modelValue : Array,
    isLoadding : Boolean,
  },
  created() {},
  data() {
    return {
      rowsSelected: [],
      id: undefined,
      isShowfunction: false,
      heightFunction: 0,// Chiều cao của list chức năng
      functionTop: 0, // Tọa dộ top của list chức năng
      functionLeft: 0, // Tọa dộ left của list chức năng
      isPopUpDelete : false,
      checkedAll : false
    };
  },
  methods: {
    /**
     * Hiển thị list chức năng của 1 dòng
     * Author : NVDuong (06/1/2023)
     */
    showFunctionId(event, id) {
      if (this.id == id) {
        this.isShowfunction = false;
        this.id = null;
      } else {
        this.id = id;
        this.isShowfunction = true;
        if (window.innerHeight - this.heightFunction * 1.5 < event.clientY) {
          this.functionTop = event.clientY - 15 - this.heightFunction;
          this.functionLeft = event.clientX - 100;
        } else {
          this.functionTop = event.clientY + 15;
          this.functionLeft = event.clientX - 100;
        }
      }
    },
    /**
     * Xử lý click out side cho list action
     * Author : NVDuong (24/2/2023)
     */
    clickOutSideFunction(e) {
      const check = this.$refs.btnFunction.filter((x) => x.contains(e.target));
      if (
        !this.$refs.functionContextMenu.contains(e.target) &&
        check.length <= 0 &&
        this.isShowfunction
      ) {
        this.isShowfunction = false;
        this.employeeId = null;
      }
    },
    /**
     * Hàm xử lý checkbox
     * Author : NVDuong (06/1/2023)
     */
    checkboxSelected(isChecked, id) {
      try {
        // Check all
        if (id === "check-all") {
          if (!isChecked) {
            // Kiểm tra khi bỏ check all
            this.rows
              .map((x) => x[`${this.tableName}Id`])
              .forEach((e) => {
                this.rowsSelected = this.rowsSelected.filter((x) => x != e);
              });
            this.checkedAll = false;
          } else {
            // Kiểm tra khi check all
            this.rowsSelected = this.rowsSelected.concat(
              this.rows.map((x) => x[`${this.tableName}Id`]).filter((x) => !this.rowsSelected.includes(x))
            );
            this.checkedAll = true;
          }
        } else {
          // Kiểm tra các item check
          if (!isChecked) {
            this.rowsSelected = this.rowsSelected.filter((x) => x !== id);
          } else {
            this.rowsSelected.push(id);
          }
          this.testCheckAll();
        }
        this.$emit("update:modelValue", this.rowsSelected);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hàm check tổng số phần tử trùng nhau của 2 mang
     * Author : NVDuong (06/1/2023)
     */
    testCheckAll() {
      // Kiểm tra coi có check all hay không
      var count = 0;
      // Đếm số phần tử check của page
      this.rows
        .map((x) => x[`${this.tableName}Id`])
        .forEach((e) => {
          if (this.rowsSelected.filter((x) => x == e).length > 0) count++;
        });

      // Kiểm tra để check
      if (this.rows.length > 0 && count == this.rows.length) {
        this.checkedAll = true;
      } else if (count < this.rows.length) {
        this.checkedAll = false;
      }
    },
    /**
     * Hiển thị pop-up xác nhận xóa
     * Author : NVDuong (06/1/2023)
     */
    confirmDeleteRow() {
      this.isPopUpDelete = true;
      this.isShowfunction = false;
    },
    /**
     * Hiển thị pop-up xác nhận xóa
     * Author : NVDuong (06/1/2023)
     */
    deleteRow(){
      this.isPopUpDelete = false;
      this.$emit("delete",[this.id]);

    },
    updateRows(id){
      this.$state.idModel = id;
      this.$state.isShowForm = true;
    }
  },
  watch:{
    modelValue : function(){
      if(this.modelValue.length == 0){
        this.rowsSelected = [];
        this.checkedAll = false;
      }
    }
  }
};
</script>

<style scoped>
</style>
