import { Minus, Plus } from 'lucide-react';

type QuantityStepperProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  label: string;
};

export function QuantityStepper({ value, min = 1, max = 99, onChange, label }: QuantityStepperProps) {
  const update = (nextValue: number) => onChange(Math.min(max, Math.max(min, nextValue)));

  return (
    <div className="quantity-control" aria-label={label}>
      <button type="button" aria-label="Decrease quantity" onClick={() => update(value - 1)} disabled={value <= min}>
        <Minus size={15} />
      </button>
      <input
        aria-label={label}
        min={min}
        max={max}
        type="number"
        value={value}
        onChange={(event) => update(Number(event.target.value) || min)}
      />
      <button type="button" aria-label="Increase quantity" onClick={() => update(value + 1)} disabled={value >= max}>
        <Plus size={15} />
      </button>
    </div>
  );
}
