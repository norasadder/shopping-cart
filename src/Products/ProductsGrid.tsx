import "./ProductsGrid.css";
import { useState } from "react";
import Product from "./Product";
import { cartItemType } from "../Types/Types";

import { itemIDContext } from "../Contexts/itemIDContext";

const ProductsGrid: React.FunctionComponent<{
  products: cartItemType[];
}> = ({ products }) => {
  // export default function ProductsGrid({ products }) {
  const [itemID, setItemID] = useState(0);
  return (
    <itemIDContext.Provider value={{ itemID, setItemID }}>
      <div className="products-container">
        {products.map((product) => (
          <Product {...product} key={product.name} />
        ))}
      </div>
    </itemIDContext.Provider>
  );
};

export default ProductsGrid;
