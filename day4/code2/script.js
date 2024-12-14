/** @format */

document
	.getElementById("category-filter")
	.addEventListener("change", (event) => {
		const filterValue = event.target.value.toLowerCase();
		const products = document.querySelectorAll(".product");
		products.forEach((product) => {
			const category = product.getAttribute("data-category").toLowerCase();
			if (filterValue === "all" || filterValue === category) {
				product.style.display = "block";
			} else {
				product.style.display = "none";
			}
		});
	});
// Add to Cart Logic
const cart = [];
document.querySelectorAll(".btn-add-to-cart").forEach((button) => {
	button.addEventListener("click", (event) => {
		const product = event.target.closest(".product");
		const productName = product.querySelector(".product-title").innerText;
		cart.push(productName);
		alert(`${productName} added to cart!`);
		console.log("Cart:", cart); // Check cart items in console
	});
});
