import clsx from 'clsx';
import React from 'react';

export default function Input({
  label,
  containerClassName,
  type,
  ...inputProps
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  containerClassName?: string;
  type?: React.HTMLInputTypeAttribute;
}) {
  return (
    <label className={clsx('form-control w-full max-w-xs', containerClassName)}>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        {...inputProps}
        type={type ?? 'text'}
        className="input input-bordered w-full"
      />
    </label>
  );
}
