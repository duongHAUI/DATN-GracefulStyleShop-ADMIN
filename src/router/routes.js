import MError from "@/views/MError.vue";
import MColor from "@/views/color/MColor.vue";
import MSize from "@/views/size/MSize.vue";
import MBrand from "@/views/brand/MBrand.vue";
import MType from "@/views/type/MType.vue";
import MProduct from "@/views/product/MProduct.vue";

/**
 * Các routes của page
 * Author : NVDuong (9/1/2023)
 */
const routes = [
  {
    path: "/products",
    component: MProduct,
  },
  {
    path: "/colors",
    component: MColor,
  },
  {
    path: "/sizes",
    component: MSize,
  },
  {
    path: "/brands",
    component: MBrand,
  },
  {
    path: "/types",
    component: MType,
  },
  {
    path: "/:pathMatch(.*)*",
    component: MError,
  },
];

export default routes;
