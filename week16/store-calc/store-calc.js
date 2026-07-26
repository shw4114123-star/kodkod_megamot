


export function calculateDiscount(price, percent) {
  if (typeof price !== "number" || typeof percent !== "number") throw new Error("the args must be numbers")
  if (percent === 0) return price;
  const finallyPrice = price - ((price * percent) / 100)
  return finallyPrice;
}


export function applyTax(price, taxRate) {
  if (typeof price !== "number" || typeof taxRate !== "number") throw new Error("the args must be numbers")
  if (price === 0) return price;
  const finallyPrice = price + (price * (taxRate / 100))
  return finallyPrice;
}

export function calculateCartTotal(items) {
  if (items.length === 0) throw new Error("the list is empty");
  let sumAll = 0
  for (const item of items) {
    const sum = item["price"] * item["quantity"]
    sumAll += sum
  }
  return sumAll;
}

export function validatePrice(price) {
  if (typeof price !== "number") throw new Error("the price must be a number")
  if (price < 0) throw new Error("the price must be larger that 0")
  if (price === 0) return "free item";
  if (price > 0) return true;
}


export function formatPrice(amount) {
  if (typeof amount !== "number") throw new Error("the price must be a number")
  return `₪${amount.toFixed(2) }`;
}







