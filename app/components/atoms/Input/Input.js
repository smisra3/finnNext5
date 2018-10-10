// @flow
import type { Node } from 'react';
import camelCase from 'lodash/camelCase';
import styled from 'styled-components';
import styles from './Input.style';
import FieldError from '../FieldError/FieldError';

type Props = {
  className: string,
  id: string | number,
  labelContent?: string,
  inheritedStyles?: string,
  errorMessage?: string,
  maxLength?: number,
  onKeyUp?: Function,
  iconClickHandler?: Function,
  inputRef?: Function,
  type?: string,
  placeholder?: string,
  value?: string,
  required?: boolean,
  dataSlnmId?: string,
  onChange?: Function
};

const keyUpHandler = (event, maxLength) => {
  if (event.target.value.length >= parseInt(maxLength, 10)) {
    // eslint-disable-next-line
    event.target.value = event.target.value.substring(0, parseInt(maxLength, 10));
  }
};

const Input = ({
  className,
  id,
  labelContent,
  errorMessage,
  inheritedStyles,
  maxLength,
  onKeyUp,
  iconClickHandler,
  inputRef,
  type,
  placeholder,
  value,
  onChange,
  required,
  dataSlnmId,
  labelAddOnComponent,
  ...others
}: Props): Node => {
  return (
    <div className={className}>
      <div className="label-wrapper">
        <label htmlFor={id}>{labelContent}</label>
        {labelAddOnComponent ? (<div className="addOnComponentWrapper">{labelAddOnComponent}</div>) : null}
      </div>
      <div className="input-wrapper">
        <input
          id={id}
          maxLength={maxLength}
          type={type}
          onKeyUp={(event) => {
            keyUpHandler(event, maxLength);
            if (onKeyUp) onKeyUp(event);
          }}
          onChange={(event) => {
            if (onChange) onChange(event);
          }}
          onBlur={(event) => {
            if (onBlur) onBlur(event);
          }}
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          aria-invalid={errorMessage && errorMessage.length ? true : null}
          aria-required={required || null}
          data-slnm-id={camelCase(placeholder)}
          {...others}
        />
      </div>
      <FieldError errorMessage={errorMessage} dataSlnmId={dataSlnmId} />
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  labelContent: '',
  inheritedStyles: '',
  errorMessage: '',
  maxLength: 100,
  onKeyUp: () => { },
  iconClickHandler: () => { },
  inputRef: () => { },
  placeholder: '',
  value: '',
  required: false,
  dataSlnmId: 'InputField',
  onChange: () => { },
  onBlur: () => { },
  isParentSubmitted: false
};

export default styled(Input)`
  ${styles};
`;
export { Input as InputVanilla };
