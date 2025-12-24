
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

const product = products.find(p => p.id === productId);

if(product) {

  document.getElementById("productName").innerText = product.name;
  document.getElementById("productDescription").innerText = product.description;
  document.getElementById("productPrice").innerText = product.price;


  document.getElementById("mainImage").src = product.mainImage;
  document.getElementById("thumb1").src = product.mainImage;
} else {
  document.body.innerHTML = "<h2>Product Not Found</h2>";
}