import React,{ useState } from "react";
import ReactDOM from "react-dom/client";
import { Checkbox} from '@beniyamgebremed/custom-library';
import "./index.css";

const App = () =>{
  
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = ()=>{
    setIsChecked(!isChecked)
  }

  return(
  <div className="container">
    <Checkbox {...{label:"accept", checked:{isChecked}, onChange:{handleCheckboxChange}}}/>
    {isChecked && <div>You are accepted</div>}
    
  </div>
)};
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)