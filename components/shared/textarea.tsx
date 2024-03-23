import clsx from 'clsx';
import React from 'react';

export function Textarea({
  label,
  containerClassName,
  ...textareaProps
}: {
  label: string;
  containerClassName?: string;
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
          textareaProps.className
        )}
      ></textarea>
    </label>
  );
}
