import "./App.css";
import { useEffect, useState } from "react";
import { Select, Input } from "./components";
import { convertCurrency, fetchCurrencies } from "./api/api";
import type { Currency } from "./types/currency";

export const App = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    fetchCurrencies().then((curr) => {
      setCurrencies(curr);
      if (curr.length > 1) {
        setFrom(curr[0].short_code);
        setTo(curr[1].short_code);
      }
    });
  }, []);

  useEffect(() => {
    if (!from || !to || amount <= 0) {
      return;
    }

    convertCurrency(from, to, amount).then(setResult);
  }, [from, to, amount]);

  return (
    <div className="App">
      <h1 className="CurrencyTitle">Currency Converter</h1>

      <div className="CurrencyBlock">
        <div className="CurrencyFrom">
          <h2 className="CurrencyLabel">From currency</h2>
          <Select
            currencies={currencies}
            value={from}
            onChange={setFrom}
            id="from-currency"
          />
          <Input amount={amount} setAmount={setAmount} />
        </div>

        <div className="CurrencyTo">
          <h2 className="CurrencyLabel">To currency</h2>
          <Select
            currencies={currencies}
            value={to}
            onChange={setTo}
            id="to-currency"
          />
          <Input amount={result ?? 0} readonly />
        </div>
      </div>
    </div>
  );
};
