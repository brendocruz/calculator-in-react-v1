import "./style.css";
import { GlobalContext } from "../../contexts/AppContext";
import { useContext, useEffect } from "react";

export function Display() {
	const context = useContext(GlobalContext);
	const { state } = context;

	useEffect(() => {
		state.operand1 = state.operand1 + state.lastKey;
	}, [state]);

	return (
		<div className="display">
			{ state.operand1 }
		</div>
	);
}
