import clsx from 'clsx';
import React, { HTMLInputTypeAttribute, forwardRef } from 'react';

const classNameByType: { [key: string]: string } = {
  text: 'input input-bordered',
  file: 'file-input file-input-bordered'
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerClassName?: string;
  type?: HTMLInputTypeAttribute;
  error?: string;
}

const Input = forwardRef(function Input(
  props: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const { label, containerClassName, type, error, ...inputProps } = props;

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
        ref={ref}
      />
      {error && <span className="text-xs text-error">{error}</span>}
    </label>
  );
});

export default Input;
