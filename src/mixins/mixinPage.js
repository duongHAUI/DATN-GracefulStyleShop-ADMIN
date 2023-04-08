export default {
    created() {
        // eslint-disable-next-line no-debugger
        debugger
        this.$state.form  =  this._data.formName;
        this.$state.titleForm =  this._data.titleForm;
        this.$state.isSaveForm =  false;
        this.$state.nameTable=  this._data.tableName;
        this.$state.level = this._data?.level;
        this.$state.parentName = this._data?.parentName;
        this.$state.parentPath = this._data?.parentPath;
    },
    data() {
        return {};
      },
      methods: {},
      watch:{}
  };
  