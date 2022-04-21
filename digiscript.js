(let cartButton = document.querySelector(".cart__checkout-button");
if (cartButton) {
  cartButton.addEventListener("click", (e) => {
    //fetch cart obj
    fetch("/cart.js")
      .then((res) => res.json())
      .then((cartObj) => {
        console.log("FABY  ", { cartObj });
        window.location.replace("https://cartapp.digitalcart.app/#e8a153371b");
      })
      .catch((err) => console.log(err));
  });
})()
