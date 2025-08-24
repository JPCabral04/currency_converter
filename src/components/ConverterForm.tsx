import { useEffect, useState } from "react";
import api from "../api";

const ConverterForm = () => {
  const [amount, setAmount] = useState("");
  const [rates, setRates] = useState<Record<string, number>>({});

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  useEffect(() => {
    api()
      .then((data) => {
        if (data && data.rates) {
          setRates(data.rates);
        }
      })
      .catch((error) => console.error("Fail to search data"));
  }, []);

  function handleConvert(event: React.FormEvent) {
    event.preventDefault();

    const amountInBaseCurrency = Number(amount) / rates[fromCurrency];
    const result = amountInBaseCurrency * rates[toCurrency];

    setConvertedAmount(result);
  }

  function handleSwapCurrency() {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  }

  return (
    <form>
      <label>Value</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      ></input>

      <label>From Currency</label>
      <select
        name="fromCurrency"
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {Object.keys(rates).map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>

      <button onClick={handleSwapCurrency}></button>

      <label>To Currency</label>
      <select
        name="toCurrency"
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {Object.keys(rates).map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>

      <button onClick={handleConvert} type="submit">
        Convert
      </button>

      {convertedAmount !== null && (
        <p>
          Resultado: {convertedAmount.toFixed(2)} {toCurrency}
        </p>
      )}
    </form>
  );
};

export default ConverterForm;
