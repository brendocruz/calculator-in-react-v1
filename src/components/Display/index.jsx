import "./style.css";
import { GlobalContext } from "../../contexts/AppContext";
import { useContext, useEffect } from "react";

export function Display() {
	const context = useContext(GlobalContext);
	const { state } = context;

	return (
		<div className="display">
			{ state.operand2 || state.operand1 }
		</div>
	);
}
