const originalPrice = document.getElementById("originalPrice");
const discountPercent = document.getElementById("discountPercent");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

function calculateDiscount() {
  const price = parseFloat(originalPrice.value);
  const discount = parseFloat(discountPercent.value);

  if (isNaN(price) || price <= 0) {
    result.textContent = "Masukkan harga asli yang valid!";
    return;
  }

  if (isNaN(discount) || discount < 0 || discount > 100) {
    result.textContent = "Masukkan persen diskon yang valid (0-100)!";
    return;
  }

  const discountedPrice = price - (price * discount) / 100;

  result.textContent = `Harga setelah diskon: Rp ${discountedPrice.toFixed(2)}`;
}

calculateBtn.addEventListener("click", calculateDiscount);
