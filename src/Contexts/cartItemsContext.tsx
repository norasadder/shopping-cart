import { createContext } from "react";
import { cartItemsContextType } from "../Types/Types";

export const CartItemsContext = createContext<cartItemsContextType>(
  {} as cartItemsContextType
);
