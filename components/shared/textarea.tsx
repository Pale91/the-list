import clsx from 'clsx';
import React from 'react';

export function Textarea({
  label,
  containerClassName,
  error,
  ...textareaProps
}: {
  label: string;
  containerClassName?: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className={clsx('form-control', containerClassName)}>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <textarea
        {...textareaProps}
        className={clsx(
          'textarea textarea-bordered w-full',
          error !== undefined && 'textarea-error',
          textareaProps.className
        )}
      ></textarea>
      {error && <span className="text-xs text-error">{error}</span>}
    </label>
  );
}
