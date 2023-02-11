import { useState } from "react";
import "./App.css";
import { ResultBox } from "./components/ResultBox";
import { leastCommonDenominator } from "./util";

function App() {
  const [lcd, changeLCD] = useState();
  const [fractions, changeFractions] = useState([]);
  const onFormSubmit = (e) => {
    e.preventDefault();
    const fractions = e.target.inputBox.value;
    const arrayEnteredFractions = fractions.split(",");
    const arrayDenominators = [];
    for (let row of arrayEnteredFractions) {
      arrayDenominators.push(row.split("/")[1]);
    }
    changeFractions(arrayEnteredFractions);
    changeLCD(leastCommonDenominator(arrayDenominators));
  };

  return (
    <div className="App">
      <form id="fractions-calulator" onSubmit={onFormSubmit}>
        <textarea
          type="text"
          id="input-box"
          name="inputBox"
          placeholder="Insert fractions separated by comma"
        />
        <input type="submit" className="btn submit" value="Calculate" />
        <input type="reset" className="btn clear" value="Clear" />
      </form>
      <div id="result-box">
        <p>Least common denominator is : {lcd}</p>
        <p>End result:</p>
        {lcd
          ? fractions.map((x) => <ResultBox fraction={x} lcd={lcd} />)
          : null}
      </div>
    </div>
  );
}

export default App;
