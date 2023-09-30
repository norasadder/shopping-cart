import "./Cart.css";
import CartItem from "./CartItem";
export default function Cart({
  cartItems,
  total,
  deleteCartItem,
  setCheckout,
}) {
  function handleCheckout() {
    if (cartItems.length != 0) setCheckout(true);
  }

  return (
    <div className="cart-container">
      <p className="cart-header"> Items in your cart</p>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem {...item} deleteCartItem={deleteCartItem} />
        ))}
      </div>
      <div className="total-amount-container">
        <div className="total-amount-values">
          <p> Total Amount :</p>
          <p>{total}</p>
        </div>

        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}
