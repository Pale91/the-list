import clsx from 'clsx';
import React, { HTMLInputTypeAttribute } from 'react';

const classNameByType: { [key: string]: string } = {
  text: 'input input-bordered',
  file: 'file-input file-input-bordered'
};

export default function Input({
  label,
  containerClassName,
  type,
  error,
  ...inputProps
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  containerClassName?: string;
  type?: React.HTMLInputTypeAttribute;
  error?: string;
}) {
  const inputClassName =
    classNameByType[type ?? 'text'] ?? classNameByType.text;

  return (
    <label className={clsx('form-control w-full max-w-xs', containerClassName)}>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        {...inputProps}
        type={type ?? 'text'}
        className={clsx(
          inputClassName,
          'w-full',
          error !== undefined && 'input-error',
          inputProps.className
        )}
      />
      {error && <span className="text-xs text-error">{error}</span>}
    </label>
  );
}
