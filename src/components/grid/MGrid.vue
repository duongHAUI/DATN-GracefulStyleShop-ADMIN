<template>
  <div class="m-main-content-header">
    <div class="m-main-content-title">{{data.titleForm}}</div>
    <div class="m-main-content-btn-add">
      <div @click="onShowForm">
        <MButton>Thêm</MButton>
      </div>
      <div
        class="m-main-content-btn-import"
        v-if="data.isImport"
        @click="toggleActionImport"
        v-click-outside="() => (isShowActionImport = false)"
      >
        <div class="icon-drop-page-white"></div>
        <ul class="m-main-content-btn-import__action" v-if="isShowActionImport">
          <li @click="redirectPageImport()">Nhập từ Excel</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="m-main-content-table">
    <div class="content-table__btn">
      <div class="content-table-btn__left">
        
        <div class="flex-center" >
          <FolderRoutes />
        <div
          v-show="isShowActionprocessMutiple"
          class="content-table-btn__left-block"
        > 
          <div class="series-selected">
            Đã chọn <span>{{ rowsSelected.length }}</span>
          </div>
          <div class="series-unchecked">Bỏ chọn</div>
          <div class="action__delete-mutiple" @click="isPopUpDelete = true">
            Xóa
          </div>
        </div>
        </div>
      </div>
      <div class="content-table__btn-right">
        <MInput
          :placeholder="data.placeholder"
          classIcon="icon-search"
          @change-input="searchData"
          width="220px"
          marginBottom="0px"
          v-if="data?.search == false"
        />
        <div
          class="content-table__refesh icon-refesh"
          @click="refresh()"
          data-tip="Lấy lại dữ liệu"
        ></div>
        <div
          class="content-table__refesh icon-export"
          @click="exportEmployee"
          data-tip-left="Xuất excel (Ctrl + P)"
        ></div>
      </div>
    </div>
    <MTable
      :rows="rows"
      :columns="data.columns"
      :tableName="data.tableName"
      @delete="deleteRowTable"
      v-model="rowsSelected"
      :isLoadding="isLoadding"
    />
    <div class="content-navigation">
      <div class="content-navigation__total">
        Tổng số: <span>{{ rows.length || 0 }}</span> bản ghi
      </div>
      <div class="content-navigation__page">
        <div style="margintop: -5px">
          <MCombobox
            :data="listPaginate"
            v-model="pageSize"
            propName="value"
            propValue="id"
            icon="icon-drop-page-black"
            :locationList="1"
            :isReadonly="true"
          />
        </div>
        <MPaginate :pageCount="totalPageNumber" @change="eventHandlePaginate" />
      </div>
    </div>
    <!-- Pop-up thông báo khi xóa -->
    <MPopUpWarn :isShow="isPopUpDelete" @close-pop-up="isPopUpDelete = false">
      {{ `Bạn có thực sự muốn xóa ${rowsSelected.length} bản ghi không ?` }}
      <template #footer>
        <div class="warning__delete-btn">
          <div @click="isPopUpDelete = false">
            <MButton typeBtn="close">Không</MButton>
          </div>
          <div @click="deleteRowTable(rowsSelected)">
            <MButton typeBtn="delete">Có</MButton>
          </div>
        </div>
      </template>
    </MPopUpWarn>
  </div>
</template>
<script>
import constants from "@/assets/js/constants";
import MButton from "../button/MButton.vue";
import MCombobox from "../combobox/MCombobox.vue";
import MInput from "../input/MInput.vue";
import MPaginate from "../pagination/MPaginate.vue";
import MTable from "../table/MTable.vue";
import baseApi from "@/api/baseApi";
import MPopUpWarn from "../pop-up/MPopUpWarn.vue";
import FolderRoutes from '../folder/FolderRoutes.vue';
export default {
  name: "MGrid",
  components: {
    MTable,
    MInput,
    MButton,
    MPaginate,
    MCombobox,
    MPopUpWarn,
    FolderRoutes
  },
  props: {
    data: Object,
  },
  created() {
    this.baseApi = new baseApi(this.data.tableName);
    this.getData();
    this.$state.title = this.data.titleForm;
    this.$state.tableName = this.data.tableName;
  },
  data() {
    return {
      listPaginate: constants.listNavigateNumber,
      pageSize: 20,
      pageNumber: 1,
      textSearch: "",
      rows: [],
      totalRecord: 0,
      isShowActionprocessMutiple: false,
      rowsSelected: [],
      isPopUpDelete: false,
    };
  },
  methods: {
    /**
     * Hàm lấy danh sách
     */
    async getData() {
      try {
        this.$state.isMask();
        const res = await this.baseApi.getByFilter(this.params);
        this.rows = res.Data;
        this.totalRecord = res.Total;
        this.$state.unMask();
      } catch (error) {
        this.$state.unMask();
        console.log("Lỗi lấy dữ liệu", error);
      }
    },
    /**
     * Hàm r
     */
    async refresh() {
      try {
        this.$state.isMask();
        // Xét thời gian tìm kiếm 0,5s
        setTimeout(async () => {
          this.pageNumber = 1;
          await this.getData();
        }, 500); // delay
      } catch (error) {
        console.log("Lỗi refresh data : ", error);
      }
    },
    /**
     * Hàm search
     */
    async searchData(event) {
      try {
        if (this.timeout) clearTimeout(this.timeout);
        // Xét thời gian tìm kiếm 0,5s
        this.timeout = setTimeout(async () => {
          this.$state.isMask();
          this.textSearch = event.target.value || "";
          this.pageNumber = 1;
          await this.getData();
        }, 500); // delay
      } catch (error) {
        console.log("Lỗi search data : ", error);
      }
    },
    /**
     * Bắt sự kiện thay đổi trang
     * Author : NVDuong (06/1/2023)
     */
    async eventHandlePaginate(pageNumber) {
      this.$state.isMask();
      this.pageNumber = pageNumber;
      setTimeout(async () => {
        await this.getData();
      }, 500); // delay
    },
    /**
     * Xóa dữ liệu
     */
    async deleteRowTable(ids) {
      try {
        this.isPopUpDelete = false;
        this.$state.isMask();
        await this.baseApi.remove(ids);
        this.rowsSelected = [];
        this.refresh();
      } catch (error) {
        this.$state.unMask();
        console.log(error);
      }
    },
    onShowForm(){
      // eslint-disable-next-line no-debugger
      debugger
      this.$state.isShowForm = true;
    }
  },
  computed: {
    /**
     * Get param filter data
     * Author : NVDuong (06/1/2023)
     */
    params() {
      return {
        pageSize: this.pageSize,
        pageNumber: this.pageNumber,
        textSearch: this.textSearch,
        parentId : this.$route.params.id
      };
    },
    /**
     * Tính tổng số trang
     * Author : NVDuong (06/1/2023)
     */
    totalPageNumber() {
      return Math.ceil(this.totalRecord / this.pageSize);
    },
  },
  watch: {
    rowsSelected: function () {
      if (this.rowsSelected.length > 0) {
        this.isShowActionprocessMutiple = true;
      } else {
        this.isShowActionprocessMutiple = false;
      }
    },
    '$state.isShowForm' : function(){
      if(this.$state.isSaveForm){
        this.refresh();
        this.$state.isSaveForm = false;
      }
    }
  },
};
</script>
<style scoped>
.flex-center{
  display: flex;
  align-items: center;
}
</style>
