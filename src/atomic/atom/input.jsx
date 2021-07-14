// @flow
import React from 'react';
import type { StatelessFunctionalComponent } from 'react';

type Props = {
  className?: string,
  classType?: string,
  cols?: number,
  onBlur?: () => void,
  onChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string | number,
  rows?: number,
  step?: number,
  type?: string,
  value: string | number | boolean,
};

const inputType = {
  custom: 'input-custom',
  error: 'input-custom input-error',
  success: 'input-custom input-success',
};

export const Input: StatelessFunctionalComponent<Props> = ({
  className,
  classType,
  cols,
  onBlur,
  onChange,
  placeholder,
  rows,
  step,
  type,
  value,
  ...props
}: Props) => {
  let styleClass = classType in inputType ? inputType[classType] : '';

  if (className && className !== '') {
    styleClass = `${styleClass} ${className}`;
  }

  if (type === 'textarea') {
    return (
      <textarea
        className={styleClass}
        cols={cols}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        step={step}
        type={type}
        value={value}
        {...props}
      />
    );
  }
  return (
    <input
      className={styleClass}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      step={step}
      type={type}
      value={value}
      {...props}
    />
  );
};

Input.defaultProps = {
  className: '',
  classType: 'custom',
  cols: 0,
  rows: 0,
  step: 1,
};
