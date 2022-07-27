import "./style.css";
import { Button } from "../Button";

export function Calculator() {
	return (
		<div className="buttons-grid">
			<Button text="ON"  type="function"/>
			<Button text="MRC" type="function"/>
			<Button text="M-"  type="function"/>
			<Button text="M+"  type="function"/>

			<Button text="OFF" type="function"/>
			<Button text="√"   type="operation"/>
			<Button text="%"   type="operation"/>
			<Button text="÷"   type="operation"/>


			<Button text="7"   type="number"/>
			<Button text="8"   type="number"/>
			<Button text="9"   type="number"/>
			<Button text="×"   type="operation"/>

			<Button text="4"   type="number"/>
			<Button text="5"   type="number"/>
			<Button text="6"   type="number"/>
			<Button text="-"   type="operation"/>
		
			<Button text="1"   type="number"/>
			<Button text="2"   type="number"/>
			<Button text="3"   type="number"/>
			<Button text="+"   type="operation" styleClasses="button-double-size"/> 

			<Button text="0"   type="number"/>
			<Button text="."   type="separator"/>
			<Button text="="   type="operation"/>
		</div>
	);
}
