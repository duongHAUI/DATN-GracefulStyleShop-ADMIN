import MError from "@/views/MError.vue";
import MColor from "@/views/color/MColor.vue";
import MSize from "@/views/size/MSize.vue";
import MBrand from "@/views/brand/MBrand.vue";
import MType from "@/views/type/MType.vue";
import MProductVariant from "@/views/productvariant/MProductVariant.vue";
import MProduct from "@/views/product/MProduct.vue";
import MSupplier from "@/views/supplier/MSupplier.vue";
import MShipment from "@/views/shipment/MShipment.vue";
import MCustomer from "@/views/customer/MCustomer.vue";
import MAdmin from "@/views/admin/MAdmin.vue";

/**
 * Các routes của page
 */
const routes = [
  {
    path: "/products",
    component: MProduct,
  },
  {
    path: "/products/:id",
    component: MProductVariant,
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
    path: "/suppliers",
    component: MSupplier,
  },
  {
    path: "/shipments",
    component: MShipment,
  },
  {
    path: "/customers",
    component: MCustomer,
  },
  {
    path: "/admins",
    component: MAdmin,
  },
  {
    path: "/:pathMatch(.*)*",
    component: MError,
  },
];

export default routes;
