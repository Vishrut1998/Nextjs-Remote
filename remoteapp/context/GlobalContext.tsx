import { createContext } from "react";

const AppContext = createContext<undefined | string | any>(undefined);

export default AppContext