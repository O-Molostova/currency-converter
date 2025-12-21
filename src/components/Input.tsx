type InputProps = {
  amount: number;
  setAmount?: (value: number) => void;
  readonly?: boolean;
};

export const Input = ({ amount, setAmount, readonly }: InputProps) => {
  return (
    <input
      type="number"
      value={amount}
      onChange={(e) => setAmount?.(Number(e.target.value))}
      min={0}
      readOnly={readonly}
    />
  );
};
