import "./CartItem.css";
import { useContext } from "react";
import { CartItemsContext } from "../Contexts/cartItemsContext";
import { totalAmountContext } from "../Contexts/totalAmountContext";
import { cartItemType } from "../Types/Types";
const CartItem: React.FunctionComponent<{
  id: number;
  name: string;
  price: number;
}> = ({ id, name, price }) => {
  // export default function CartItem({ id, name, price }) {
  const { setCartItems } = useContext(CartItemsContext);
  const { setTotalAmount } = useContext(totalAmountContext);
  function deleteCartItem() {
    setCartItems((cartItems: cartItemType[]) =>
      cartItems.filter((item) => item.id !== id)
    );
    setTotalAmount((totalAmount) => totalAmount - price);
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
};

export default CartItem;
