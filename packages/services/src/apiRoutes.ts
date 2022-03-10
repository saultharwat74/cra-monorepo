// store id url
export const storeIdURL = (portal_type: "qr-portal" | "web-portal") =>
  `/api/${portal_type}/store-id`;
// store info url
export const storeURL = (
  portal_type: "qr-portal" | "web-portal",
  store_id: string
) => `/api/${portal_type}/store/${store_id}`;
// promotions url
export const promotionsURL = (store_id: string) =>
  `/api/web-portal/store/${store_id}/promotion`;
// all promotions url
export const allPromotionsURL = `/api/web-portal/customer/promotions`;
//  cities url
export const citiesURL = "/api/web-portal/store-city";
// districts url
export const districtsURL = `/api/web-portal/store-district`;
// sub districts url
export const subDistrictsURL = `/api/web-portal/store-sub-district`;
// pickup branches url
export const pickupBranchesURL = (store_id: string) =>
  `/api/web-portal/pickup/branches/${store_id}`;
// menus url
export const menuURL = `/api/web-portal/store/menu`;
// branch info url
export const branchInfoURL = `api/web-portal/branch`;
// portal clicks
export const portalClicksURL = (store_id: string) =>
  `api/web-portal/store/portal-clicks/${store_id}`;
// delivery branches
export const deliveryBranchesURL = `api/web-portal/delivery/branches`;
// user type
export const userTypeURL = `/api/web-portal/customer/user-type`;
// OTP
export const generateOtpURL = `/api/web-portal/customer/generate-otp`;
// OTP verification
export const OTPVerificationURL = "/api/web-portal/customer/verify-otp";
// user info
export const userInfoURL = "/api/web-portal/customer/user-info";

// gift list
export const giftsURL = (store_id: string) =>
  `/api/web-portal/customer/gift-list/${store_id}`;
// CUSTOMER DELIVERY ADDRESS
// get
export const getCustomerDeliveryAddressURL = `/api/web-portal/customer/last-delivery-address`;
// update
export const updateCustomerDeliveryAddressURL = (userAddressId: string) =>
  `/api/web-portal/customer/delivery-address/${userAddressId}`;
// add
export const addCustomerDeliveryAddressURL = `/api/web-portal/customer/delivery-address`;

// validatate customer promotion
export const validateCustomerPromotionURL = `/api/web-portal/customer/validate-promotion`;

// points
export const getPointsURL = "/api/web-portal/customer/order-points";

// order statuses
export const orderStatusesURL = "/api/web-portal/customer/order-status";

// create delivery order
export const createDeliveryOrderURL = "/api/web-portal/customer/order/delivery";
// create pickup order
export const createPickupOrderURL = "/api/web-portal/customer/order/pickup";

// cancel order
export const cancelOrderURL = `/api/web-portal/customer/cancel-order`;

// basket orders url
export const basketOrderURL = (branch_id: string) =>
  `/api/web-portal/orders/basket-order/${branch_id}`;

// order detail
export const currentOrderDetailsURL =
  "/api/web-portal/customer/current-order-details";

export const getPaymentCardsURL = (storeId: string) =>
  `/api/v2/web-portal/customer/online-payment/cards/${storeId}`;

export const getCardRegisterationData = `/api/web-portal/customer/online-payment/amazon/card-registeration-data`;

// ordering QR URLs
export const createOrderInBranch = "/api/qr-portal/customer/order/in-branch";
export const qrPortalBranchStatusURL = "/api/qr-portal/branch-status";
