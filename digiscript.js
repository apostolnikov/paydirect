let cartButton = document.querySelector(".cart__checkout-button");
if (cartButton) {
  cartButton.addEventListener("click", (e) => {
    //fetch cart obj
    fetch("/cart.js")
      .then((res) => res.json())
      .then((cartObj) => {
        let f = document.createElement("form");
        f.action = "https://cartapp.digitalcart.app/";
        f.method = "post";
        f.target = "_parent";

        let i = document.createElement("input");
        i.type = "hidden";
        i.name = "digitalmarketCartData";
        i.id = "digitalmarketCartData";
        i.value = `${cartObj}`;
        f.appendChild(i);

        document.body.appendChild(f);
        f.submit();
      })
      .catch((err) => console.log(err));
  });
}
