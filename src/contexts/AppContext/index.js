import { createContext, useState } from "react";
import { globalState } from "./data";

export const GlobalContext = createContext();

const reducer = (state, action) => {

}

export const AppContext = (props) => {
	const [state, dispatch] = useState(reducer, globalState);

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{ props.children }
		</GlobalContext.Provider>
	);
};
