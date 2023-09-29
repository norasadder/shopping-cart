import "./CartItem.css";

export default function CartItem({ id, name, price, deleteCartItem }) {
  function handleDeleteItem() {
    deleteCartItem({ name: name, price: price, id: id });
  }
  return (
    <div className="cart-item-container">
      <img src={require("../images/cart.png")}></img>
      <p>{name}</p>

      <p>{price}</p>

      <button className="cart-item-delete" onClick={handleDeleteItem}>
        <img src={require("../images/delete.png")}></img>
      </button>
    </div>
  );
}
