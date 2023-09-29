import "./ProductsGrid.css";
import Product from "./Product";
export default function ProductsGrid({
  products,
  addCartItem,
  setItemID,
  itemID,
}) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product
          {...product}
          key={product.name}
          addCartItem={addCartItem}
          setItemID={setItemID}
          itemID={itemID}
        />
      ))}
    </div>
  );
}
