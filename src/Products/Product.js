import "./Product.css";

export default function Product({
  name,
  price,
  addCartItem,
  setItemID,
  itemID,
}) {
  function handleAddToCart() {
    addCartItem({ id: itemID, name: name, price: price });
    setItemID((itemID) => itemID + 1);
  }
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={require("../images/box.png")}></img>
      </div>
      <p className="product-name">{name}</p>
      <p className="product-price">{price}</p>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
}
