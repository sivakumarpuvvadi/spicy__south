// Coupon.js

export function getCouponCode(couponCode, totalAmount) {
  let couponDiscountPercentage = 0;

  switch (couponCode.toUpperCase()) {
    case "SIVA10":
      couponDiscountPercentage = 10;
      break;
    case "SIVA20":
      couponDiscountPercentage = 20;
      break;
    case "SIVA30":
      couponDiscountPercentage = 30;
      break;
    default:
      couponDiscountPercentage = 0;
  }

  const couponDiscountAmount =
    (totalAmount * couponDiscountPercentage) / 100;

  return {
    isValid: couponDiscountPercentage > 0,
    couponPercentage: couponDiscountPercentage,
    couponAmount: couponDiscountAmount,
  };
}
