import EmployeeList from "@/views/employee/employee-list/EmployeeList.vue";
import MError from "@/views/MError.vue";
import EmployeeImport from "@/views/employee/employee-import/EmployeeImport.vue";
import MColor from "@/views/color/MColor.vue";

/**
 * Các routes của page
 * Author : NVDuong (9/1/2023)
 */
const routes = [
  {
    path: "",
    component: EmployeeList,
  },
  {
    path: "/colors",
    component: MColor,
  },
  {
    path: "/app/employee",
    component: EmployeeList,
  },
  {
    path: "/app/import-employee",
    component: EmployeeImport,
  },
  {
    path: "/:pathMatch(.*)*",
    component: MError,
  },
];

export default routes;
