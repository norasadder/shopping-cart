import { createContext } from "react";
import { itemIDContextType } from "../Types/Types";

export const itemIDContext = createContext<itemIDContextType>(
  {} as itemIDContextType
);
