import "./ProductsGrid.css";
import { useState } from "react";
import Product from "./Product";

import { itemIDContext } from "../Contexts/itemIDContext";

export default function ProductsGrid({ products }) {
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
}
