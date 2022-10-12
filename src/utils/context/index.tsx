// react
import { createContext } from "react";


//** table data context */
export const TableContext = createContext<{
    data: any[] | null
}>({
    data: null,
});