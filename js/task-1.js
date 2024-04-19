function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
  return;
}

makeTransaction(2, 2000);
