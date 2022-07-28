import { createContext, useEffect, useReducer } from "react";
import { globalState } from "./data";

export const GlobalContext = createContext();

const reducer = (state, action) => {
	if (action.type === "number")
		state.lastKey = action.payload 
	else if (action.type === "operation")
		state.operator = action.payload;

	return { ... state };
}

export const AppContext = (props) => {
	const [state, dispatch] = useReducer(reducer, globalState); 

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{ props.children }
		</GlobalContext.Provider>
	);
};
