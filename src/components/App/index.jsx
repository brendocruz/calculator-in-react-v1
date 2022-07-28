import "./style.css";
import { Calculator } from "../Calculator";
import { AppContext } from "../../contexts/AppContext";

function App() {
  return (
	  <AppContext>
		  <Calculator />
	  </AppContext>
  );
}

export default App;
