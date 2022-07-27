import './style.css'

export function Button({ text, type, styleClasses }) {
	return (
		<div onClick={() => { console.log(1) }} className={"button-container " + styleClasses}>
			{text}
		</div>
	);
}
