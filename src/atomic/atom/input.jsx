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

const labelType = {
  custom: 'label-custom position-absolute z-ind-2',
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
  let labelClass = classType in labelType ? labelType[classType] : '';

  if (className && className !== '') {
    styleClass = `${styleClass} ${className}`;
  }

  if (type === 'textarea') {
    return (
      <div className="position-relative">
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
        <label className={labelClass}>{placeholder}</label>
      </div>
    );
  }
  return (
    <div className="position-relative">
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
      <label className={labelClass}>{placeholder}</label>
    </div>
  );
};

Input.defaultProps = {
  className: '',
  classType: 'custom',
  cols: 0,
  rows: 0,
  step: 1,
};
