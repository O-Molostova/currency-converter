import type { Currency } from "../types/currency";

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  currencies: Currency[];
  id: string;
};

export const Select = ({ value, onChange, currencies, id }: SelectProps) => {
  return (
    <div>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
        {currencies.map((c) => (
          <option key={c.code} value={c.short_code}>
            {c.code} — {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};
