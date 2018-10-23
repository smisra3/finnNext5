// @flow
import React, { PureComponent } from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import styles from './CheckBox.style';

type Props = {
  className: string,
  id: string | number,
  label?: string | Node,
  hideLabel: boolean,
  isChecked?: boolean,
  inheritedStyles?: string,
  onChecked: boolean => void,
  imageUrl?: string,
  onFocus?: (SyntheticEvent<>) => void,
  onBlur?: (SyntheticEvent<>) => void,
  labelOnly?: boolean,
  disabled?: boolean,
  readOnly?: boolean,
  isCustom?: boolean,
  checkedClass?: string,
  uncheckedClass?: string,
  dataSlnmId?: string,
  inputAriaLabel: string,
};

type State = {
  isFocused: boolean,
};

class CheckBox extends PureComponent<Props, State> {
  static defaultProps = {
    label: null,
    inheritedStyles: '',
    isChecked: false,
    imageUrl: '',
    labelOnly: false,
    disabled: false,
    readOnly: false,
    dataSlnmId: 'checkbox',
    onFocus: () => {},
    onBlur: () => {},
    isCustom: false,
    checkedClass: '',
    uncheckedClass: '',
    inputAriaLabel: '',
  };

  state = {
    isFocused: false,
  };

  getClasses = () =>
    ` checkbox-tick ${
      this.props.isChecked ? 'checkbox-checked' : ' checkbox-unchecked'
    }`;

  // Refernce to actual checkbox
  inputRef = null;

  createLabelField = () => {
    const { label, hideLabel } = this.props;
    if (typeof label === 'string') {
      return hideLabel ? (
        <span
          className={`label-field${hideLabel ? ' is-hidden' : ''}`}
          aria-hidden={!!this.props.inputAriaLabel}
        >
          {label}
        </span>
      ) : (
        <span className="label-field" aria-hidden={!!this.props.inputAriaLabel}>
          {label}
        </span>
      );
    } else if (typeof label === 'function') {
      const Label = label;
      return <Label />;
    }
    return null;
  };

  render() {
    const {
      className,
      id,
      label,
      hideLabel,
      onChecked,
      inheritedStyles,
      isChecked,
      imageUrl,
      onFocus,
      onBlur,
      labelOnly,
      disabled,
      readOnly,
      isCustom,
      checkedClass,
      uncheckedClass,
      dataSlnmId,
      inputAriaLabel,
      ...others
    } = this.props;
    const isFocusVisible = this.inputRef
      ? this.inputRef.classList.contains('focus-visible')
      : false;

    const { isFocused } = this.state;

    return (
      <div className={className}>
        <input
          id={id}
          type="checkbox"
          checked={!!isChecked}
          onChange={onChecked}
          ref={(element) => {
          this.inputRef = element;
        }}
          disabled={disabled}
          onFocus={event =>
          this.setState({ isFocused: true }, () => {
            if (onFocus) onFocus(event);
          })
        }
          onBlur={event =>
          this.setState({ isFocused: false }, () => {
            if (onBlur) onBlur(event);
          })
        }
          readOnly={readOnly}
          aria-label={inputAriaLabel}
        />
        <label
          htmlFor={id}
          className={`${isChecked ? ' is-checked' : ''}${
          isFocused && isFocusVisible ? ' is-focused' : ''
        }`}
          {...others}
        >

          {isCustom ? <span className={isChecked ? checkedClass : uncheckedClass} /> : null}
          {!isCustom && !labelOnly ? (
            <span
              className={`checkbox${!imageUrl ? this.getClasses() : ''}`}
              data-slnm-id={dataSlnmId}
              aria-hidden={!!inputAriaLabel}
            />
        ) : null}
          {this.createLabelField()}
        </label>
      </div>
    );
  }
}

export default styled(CheckBox)`${styles}`;
export { CheckBox as CheckBoxVanilla };
