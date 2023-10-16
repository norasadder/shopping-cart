import { Dispatch, SetStateAction } from "react";

export type cartItemType = {
  id: number;
  name: string;
  price: number;
};

export type cartItemsContextType = {
  cartItems: cartItemType[];
  setCartItems: Dispatch<SetStateAction<cartItemType[]>>;
};

export type totalAmountContextType = {
  totalAmount: number;
  setTotalAmount: Dispatch<SetStateAction<number>>;
};

export type itemIDContextType = {
  itemID: number;
  setItemID: Dispatch<SetStateAction<number>>;
};
