<template>
  <div class="m__e-fixed-table">
    <table class="m__e-table">
      <tr class="m__e-table-row">
        <MTableColumn tag="th" className="col-fixed-left" v-if="$state.delete !== enumMISA.enumDelete.notAllowDelete">
          <MCheckBox
            id="check-all"
            @checkboxSelected="checkboxSelected"
            :checked="checkedAll"
          />
        </MTableColumn>
        <MTableColumn tag="th" textAlign="center" width="40px" padding="unset" className="col-fixed-left">
          STT
        </MTableColumn>
        <MTableColumn tag="th" className="col-fixed-left" v-if="$state.lock !== enumMISA.enumLock.notAllowLock">
        </MTableColumn>
        <MTableColumn
          tag="th"
          :width="column.width"
          :textAlign="column.textAlign"
          v-for="(column, index) in columns"
          :key="index"
          >{{ column.title }}</MTableColumn
        >
        <MTableColumn tag="th" className="col-fixed-right" v-if="$state.mode !== enumMISA.enumMode.view"
          >Chức năng</MTableColumn
        >
      </tr>
      <tr
        class="m__e-table-row"
        v-for="(row, index) in rows"
        :key="index"
        :class="{ active: rowsSelected.includes(row)}"
      >
        <MTableColumn className="col-fixed-left" v-if="$state.delete !== enumMISA.enumDelete.notAllowDelete">
          <MCheckBox
            :id="row[`${tableName}Id`]"
            :checked="rowsSelected.includes(row[`${tableName}Id`])"
            @checkboxSelected="checkboxSelected"
            :disabled="!row.IsActive"
          />
        </MTableColumn>
        <MTableColumn tag="td" textAlign="center">
          {{index + 1}}
        </MTableColumn>
        <MTableColumn tag="td" textAlign="center" className="cuser-pointer" v-if="$state.lock !== enumMISA.enumLock.notAllowLock">
          <i class="fas fa-lock-open" v-if="row.IsActive || row.IsActive === undefined" @click="lockUpRow(row)"></i>
          <i class="fas fa-lock" v-else @click="lockUpRow(row)"></i>
        </MTableColumn>
        <MTableColumn v-for="(column, index) in columns" :key="index" :textAlign="column.textAlign" 
        @dblclick="row.IsActive && updateRows(row[`${tableName}Id`])" :className="row.IsActive  == false ? 'locked-row' : ''"
        >
        {{
          formatColumn(column,row[column.name])
        }}
        </MTableColumn>  
        <MTableColumn className="col-fixed-right col-center" v-if="$state.mode !== enumMISA.enumMode.view" >
          <div
            class="m__e-table-col-function-btn"
            ref="btnFunctionMenu"
          >
            <span @click.prevent="row.IsActive && actionRow(row)">{{this.$state.level ? "Thêm" : "Sửa"}}</span>
            <div
              class="m__e-table-col-icon"
              v-click-outside="clickOutSideFunction"
              ref="btnFunction"
              :class="
                id === row[`${tableName}Id`] && isShowfunction ? 'active' : ''
              "
              @click="row.IsActive && showFunctionId($event, row[`${tableName}Id`])"
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
import common from "@/assets/js/common";
import MButton from "../button/MButton.vue";
import MCheckBox from "../checkbox/MCheckBox.vue";
import MPopUpWarn from "../pop-up/MPopUpWarn.vue";
import MTableColumn from "../table-column/MTableColumn.vue";
import enumMISA from "@/assets/js/enum";
import baseApi from "@/api/baseApi";
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
      checkedAll : false,
      enumMISA:enumMISA
    };
  },
  methods: {
    /**
     * Hiển thị list chức năng của 1 dòng
     
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
     */
    clickOutSideFunction(e) {
      const check = this.$refs.btnFunction.filter((x) => x.contains(e.target));
      if (
        !this.$refs.functionContextMenu.contains(e.target) &&
        check.length <= 0 &&
        this.isShowfunction
      ) {
        this.isShowfunction = false;
        this.itemId = null;
      }
    },
    /**
     * Hàm xử lý checkbox
     
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
     
     */
    confirmDeleteRow() {
      this.isPopUpDelete = true;
      this.isShowfunction = false;
    },
    /**
     * Hiển thị pop-up xác nhận xóa
     
     */
    deleteRow(){
      this.isPopUpDelete = false;
      this.$emit("delete",[this.id]);

    },
    updateRows(id){
      this.$state.idModel = id;
      this.$state.isShowForm = true;
    },
    actionRow(row){
      if(this.$state.form == enumMISA.formName.product){
        localStorage.setItem("parentName",row?.ProductName);
        this.$router.push("/products/"+row.ProductId);
      }else{
        this.updateRows(row[`${this.$state.tableName}Id`]);
      }
    },
    formatColumn(column,value){
      if(column.type == 'date'){
        return common.formatDate(value);
      }
      return value;
    },
    async lockUpRow(row){
      try {
        this.$state.isMask();
        const api = new baseApi(this.$state.tableName);
        await api.lockup([row[`${this.$state.tableName}Id`]]);
        this.$state.unMask();
        this.$emit("refresh");
      } catch (error) {
        this.$state.unMask();
      }
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
.locked-row{
  cursor: not-allowed !important ;
}
.cuser-pointer{
  cursor: pointer;
}
</style>
