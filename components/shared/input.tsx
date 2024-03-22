import React from 'react';

export default function Input({
  label,
  type,
  ...inputProps
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  type?: React.HTMLInputTypeAttribute;
}) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        {...inputProps}
        type={type ?? 'text'}
        className="input input-bordered w-full max-w-xs"
      />
    </label>
  );
}
