import { useState } from "react";

const ConverterForm = () => {
  const [amount, setAmount] = useState(null);

  return (
    <form>
      <label>Value</label>
      <input type="number">{amount}</input>

      <label>Currency</label>
      <input type="text"></input>

      <label>Currency to be converted</label>
      <input type="text"></input>

      <button type="submit">Convert</button>
    </form>
  );
};

export default ConverterForm;
