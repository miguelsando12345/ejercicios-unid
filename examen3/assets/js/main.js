function addToCart(item, price) {
  const noTax = price;
  const conTax = price * 1.16;

  cart.push({ item, noTax, conTax });
  document.getElementById(
    "cart-items"
  ).innerHTML += `<li>${item} - $${noTax} (IVA: $${conTax - noTax})</li>`;
  total += conTax; // Actualizar el total con IVA
  document.getElementById("total").textContent = total.toFixed(2);
}

function submitOrder() {
  const name = document.getElementById("customer-name").value;
  const address = document.getElementById("customer-address").value;
  if (name && address && cart.length > 0) {
    // Mostrar detalles del pedido en la interfaz en lugar de usar alert
    document.getElementById("order-name").textContent = "Nombre: " + name;
    document.getElementById("order-address").textContent =
      "Dirección: " + address;
    document.getElementById("order-summary").innerHTML = cart
      .map(
        (item) =>
          `<li>${item.item} - $${item.noTax} (IVA: $${
            item.conTax - item.noTax
          })</li>`
      )
      .join("");
    document.getElementById("order-total").textContent = total.toFixed(2);
    document.getElementById("order-details").style.display = "block"; // Mostrar detalles del pedido
  } else {
    alert(
      "Por favor, completa todos los campos y añade al menos un artículo al carrito."
    );
  }
}
