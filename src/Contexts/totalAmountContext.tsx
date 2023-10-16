import { createContext } from "react";
import { totalAmountContextType } from "../Types/Types";

export const totalAmountContext = createContext<totalAmountContextType>(
  {} as totalAmountContextType
);
