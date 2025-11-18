// Select total price element
const totalPrice = document.querySelector(".total");

// Select all products
const products = document.querySelectorAll(".card-body");

// Function to update total
function updateTotal() {
  let total = 0;
  document.querySelectorAll(".card-body").forEach((product) => {
    const price = Number(
      product.querySelector(".unit-price").textContent.replace("$", "").trim()
    );
    const qty = Number(product.querySelector(".quantity").textContent);
    total += price * qty;
  });

  totalPrice.textContent = total + " $";
}

// Loop through each product card
products.forEach((product) => {
  const plusBtn = product.querySelector(".fa-plus-circle");
  const minusBtn = product.querySelector(".fa-minus-circle");
  const quantity = product.querySelector(".quantity");
  const deleteBtn = product.querySelector(".fa-trash-alt");
  const heartBtn = product.querySelector(".fa-heart");

  // Increase quantity
  plusBtn.addEventListener("click", () => {
    quantity.textContent = Number(quantity.textContent) + 1;
    updateTotal();
  });

  // Decrease quantity
  minusBtn.addEventListener("click", () => {
    if (Number(quantity.textContent) > 0) {
      quantity.textContent = Number(quantity.textContent) - 1;
      updateTotal();
    }
  });

  // Delete product
  deleteBtn.addEventListener("click", () => {
    product.parentElement.remove();
    updateTotal();
  });

  // Like product (toggle heart color)
  heartBtn.addEventListener("click", () => {
    if (heartBtn.style.color === "red") {
      heartBtn.style.color = "black";
    } else {
      heartBtn.style.color = "red";
    }
  });
});
