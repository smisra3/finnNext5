// @flow
import React, { PureComponent } from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import styles from './RadioBox.style';

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
};

type State = {
  checked: boolean,
  isFocused: boolean,
};

class RadioBox extends PureComponent<Props, State> {
  static defaultProps = {
    label: null,
    inheritedStyles: '',
    isChecked: false,
    imageUrl: '',
    labelOnly: false,
    disabled: false,
    hideLabel: false,
    onFocus: () => {},
    onBlur: () => {},
  };

  state = {
    checked: false,
    isFocused: false,
  };

  componentWillMount() {
    const { isChecked } = this.props;
    this.setState({
      checked: isChecked,
    });
  }

  componentWillReceiveProps = (nextProps: Props) => {
    this.setState({ checked: nextProps.isChecked });
  };

  getClasses = () => ` radio-tick ${this.state.checked ? 'radio-checked' : ' radio-unchecked'}`;

  // Refernce to actual checkbox
  inputRef = null;

  toggleState = () => {
    const { onChecked } = this.props;
    this.setState(
      prevState => ({ checked: !prevState.checked }),
      () => {
        if (typeof onChecked === 'function') onChecked(this.state.checked);
      },
    );
  };

  createLabelField = () => {
    const { label, hideLabel } = this.props;
    if (typeof label === 'string') {
      return hideLabel ? (
        <span className={`label-field${hideLabel ? ' is-hidden' : ''}`}>{label}</span>
      ) : (
        <span className="label-field">{label}</span>
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
      isChecked,
      imageUrl,
      onFocus,
      onBlur,
      labelOnly,
      disabled,
      ...others
    } = this.props;

    const isFocusVisible = this.inputRef
      ? this.inputRef.classList.contains('focus-visible')
      : false;

    const { checked, isFocused } = this.state;

    return (
      <label
        htmlFor={id}
        className={`${className}${checked ? ' is-checked' : ''}${
          isFocused && isFocusVisible ? ' is-focused' : ''
        }`}
        {...others}
      >
        <input
          id={id}
          type="radio"
          checked={!!isChecked}
          onChange={this.toggleState}
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
        />
        {!labelOnly ? <span className={`radio${!imageUrl ? this.getClasses() : ''}`} /> : null}
        {this.createLabelField()}
      </label>
    );
  }
}

export default styled(RadioBox)`${styles}`;
export { RadioBox };
