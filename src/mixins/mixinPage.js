export default {
    created() {
        this.$state.form  =  this._data.formName;
        this.$state.titleForm =  this._data.titleForm;
        this.$state.isSaveForm =  false;
        this.$state.nameTable=  this._data.tableName;
    },
    data() {
        return {};
      },
      methods: {},
      watch:{}
  };
  