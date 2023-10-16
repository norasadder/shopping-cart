import "./Cart.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartItemsContext } from "../Contexts/cartItemsContext";
import { totalAmountContext } from "../Contexts/totalAmountContext";

const Cart: React.FunctionComponent<{
  setCheckout: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setCheckout }) => {
  // export default function Cart({ setCheckout }) {
  const { cartItems } = useContext(CartItemsContext);
  const { totalAmount } = useContext(totalAmountContext);
  function handleCheckout() {
    if (cartItems.length != 0) setCheckout(true);
  }

  return (
    <div className="cart-container">
      <p className="cart-header"> Items in your cart</p>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem {...item} />
        ))}
      </div>
      <div className="total-amount-container">
        <div className="total-amount-values">
          <p> Total Amount :</p>
          <p>{totalAmount}</p>
        </div>

        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
