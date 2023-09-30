import "./CartItem.css";
import { useContext } from "react";
import { CartItemsContext } from "../Contexts/cartItemsContext";
import { totalAmountContext } from "../Contexts/totalAmountContext";

export default function CartItem({ id, name, price }) {
  const { setCartItems } = useContext(CartItemsContext);
  const { setTotalAmount } = useContext(totalAmountContext);
  function deleteCartItem() {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
    setTotalAmount((totalAmount) => totalAmount - parseInt(price));
  }

  return (
    <div className="cart-item-container">
      <img src={require("../images/cart.png")}></img>
      <p>{name}</p>

      <p>{price}</p>

      <button className="cart-item-delete" onClick={deleteCartItem}>
        <img src={require("../images/delete.png")}></img>
      </button>
    </div>
  );
}
