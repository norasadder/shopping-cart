import "./Product.css";
import { useContext } from "react";
import { CartItemsContext } from "../Contexts/cartItemsContext";
import { totalAmountContext } from "../Contexts/totalAmountContext";
import { itemIDContext } from "../Contexts/itemIDContext";

export default function Product({ name, price }) {
  const { setCartItems } = useContext(CartItemsContext);
  const { setTotalAmount } = useContext(totalAmountContext);
  const { itemID, setItemID } = useContext(itemIDContext);

  function addCartItem() {
    setCartItems((cartItems) => [
      ...cartItems,
      { id: itemID, name: name, price: price },
    ]);
    setTotalAmount((totalAmount) => totalAmount + parseInt(price));
    setItemID((itemID) => itemID + 1);
  }

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={require("../images/box.png")}></img>
      </div>
      <p className="product-name">{name}</p>
      <p className="product-price">{price}</p>
      <button className="add-to-cart-button" onClick={addCartItem}>
        Add To Cart
      </button>
    </div>
  );
}
