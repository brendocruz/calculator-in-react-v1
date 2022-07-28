import './style.css'
import {useContext} from 'react';
import { GlobalContext } from "../../contexts/AppContext";

export function Button({ text, type, styleClasses }) {
	const context = useContext(GlobalContext);
	const { dispatch } = context;

	return (
		<div onClick={() => {
			dispatch({ type, payload: text })
		}} className={"button-container " + styleClasses}>
			{text}
		</div>
	);
}
