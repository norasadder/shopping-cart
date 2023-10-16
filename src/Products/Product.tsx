import "./Product.css";
import { useContext } from "react";
import { CartItemsContext } from "../Contexts/cartItemsContext";
import { totalAmountContext } from "../Contexts/totalAmountContext";
import { itemIDContext } from "../Contexts/itemIDContext";
import { cartItemType } from "../Types/Types";

const Product: React.FunctionComponent<{
  name: string;
  price: number;
}> = ({ name, price }) => {
  // export default function Product({ name, price }) {
  const { setCartItems } = useContext(CartItemsContext);
  const { setTotalAmount } = useContext(totalAmountContext);
  const { itemID, setItemID } = useContext(itemIDContext);

  function addCartItem() {
    setCartItems((cartItems: cartItemType[]) => [
      ...cartItems,
      { id: itemID, name: name, price: price },
    ]);
    setTotalAmount((totalAmount) => totalAmount + price);
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
};

export default Product;
