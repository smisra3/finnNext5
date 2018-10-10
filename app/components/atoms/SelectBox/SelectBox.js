// @flow
import { PureComponent } from 'react';
import type { Map } from 'immutable';
import type { Node } from 'react';
import styled from 'styled-components';
import styles from './SelectBox.style';
import {
  MOBILE,
  KEY_UP_CODE,
  KEY_DOWN_CODE,
  KEY_ENTER,
  KEY_ESCAPE,
  KEY_SPACE,
  KEY_TAB,
} from '../../../constants';
import { defaultSelectBoxLabel } from '../../../locales/en-US';

type Props = {
  className: string,
  onSelect?: (value: string) => void,
  onBlur?: (value: string) => void,
  selected?: string,
  options: Map,
  selectLabel?: string,
  isClearLabel?: boolean,
  alwaysRefresh?: boolean,
  deviceType: string,
  dataSlnmId: string,
  isInvalid: boolean,
  showLabel?: boolean,
  labelContent?: string,
  isError?: boolean,
  errorMessage?: string,
  valid?: boolean,
  id: string,
  labelledById: string,
  question: string,
  isSelected: boolean,
  dropDownOpen: boolean,
  disabled?: boolean,
  isCheckout: boolean,
  inheritedStyles?: string,
  dynamicPlaceholderLabel?: boolean,
  placeholder?: string,
  configLabel?: string,
  onChange?: (value: string) => void,
  alternateSelectedLabel?: boolean,
  customViewOnly?: boolean,
  stopBlur?: boolean,
};

type State = {
  value?: string,
  selectLabel: string,
  isSelected: boolean,
  dropDownOpen: boolean,
  isValid: boolean,
};
class SelectBox extends PureComponent<Props, State> {
  static defaultProps = {
    className: '',
    onSelect: () => {},
    selectLabel: defaultSelectBoxLabel,
    isClearLabel: false,
    showLabel: false,
    alwaysRefresh: false,
    labelContent: '',
    isError: false,
    errorMessage: '',
    valid: false,
    disabled: false,
    isValid: false,
    dynamicPlaceholderLabel: false,
    placeholder: '',
    configLabel: null,
    onBlur: () => {},
    selected: '',
    inheritedStyles: '',
    onChange: () => {},
    alternateSelectedLabel: false,
    customViewOnly: false,
    stopBlur: false,
  };

  state = {
    value: '',
    selectLabel: this.props.selectLabel,
    dropDownOpen: false,
    isSelected: false,
    focusedIndex: 0,
  };

  componentWillMount() {
    const selectValue = this.props.selected;
    if (selectValue) {
      const selectOption = this.filterArray(selectValue);
      if (selectOption) {
        this.setState({
          selectLabel:
            this.props.isClearLabel || this.props.alternateSelectedLabel
              ? selectOption.selectedLabel
              : selectOption.label,
          isSelected: true,
          value: this.props.selected,
        });
      }
    } else if (this.props.selectLabel) {
      this.setState({
        selectLabel: this.props.selectLabel,
      });
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.question !== this.props.question) {
      this.setState({
        value: '',
        selectLabel: this.props.selectLabel,
        dropDownOpen: this.props.dropDownOpen,
        isSelected: this.props.isSelected,
      });
    }
    if (nextProps.selected !== this.props.selected || this.props.alwaysRefresh) {
      const selectOption = this.filterArray(nextProps.selected);
      if (selectOption) {
        const selectedValue =
          this.props.isClearLabel || this.props.alternateSelectedLabel
            ? selectOption.selectedLabel
            : selectOption[this.props.configLabel || 'label'];
        this.setState({
          selectLabel: selectedValue,
          isSelected: !!nextProps.selected,
          value: selectOption.value,
          isValid: nextProps.valid,
        });
        this.addDynamicClass(selectedValue);
      } else {
        this.setState({
          value: '',
          selectLabel: nextProps.selectLabel,
          isSelected: false,
        });
        this.addDynamicClass(nextProps.selected);
      }
    }
  }

  onChange = (event: SyntheticEvent<>) => {
    const { value } = event.target;
    this.props.onSelect(value);
    const { options } = this.props;
    const selectedOption = options[this.getFilterValuePosition(value)];
    this.setState({
      value,
      selectLabel: selectedOption.selectedLabel || selectedOption.label,
      isSelected: !!value,
      isValid: true,
    });

    return { value };
  };

  onBlur = (event: SyntheticEvent<>) => {
    const { stopBlur } = this.props;
    if (!stopBlur) {
      const target = event.relatedTarget === null ? document.activeElement : event.relatedTarget;
      if (!event.currentTarget.contains(target)) {
        this.toggleDropDownState(false);
      }

      if (this.props.onBlur) {
        this.props.onBlur(this.state.value);
      }
    }
  };

  getIconClassName = () => {
    let className = '';
    if (this.state.isSelected && this.props.isClearLabel) {
      className = 'close';
    } else {
      className = this.state.dropDownOpen ? 'arrow-up4' : 'arrow-down4';
    }
    return className;
  };

  getClassNameLi = (currentValue: number | string) => {
    let className = ' ';
    if (this.state.value === currentValue) {
      className += 'selected';
    }
    return className;
  };
  setFocusOnElem = (element) => {
    if (element) {
      element.focus();
    }
  };
  setSelectValue = (selectOption: Object) => {
    this.setState({
      value: selectOption.value,
      selectLabel:
        this.props.isClearLabel || this.props.alternateSelectedLabel
          ? selectOption.selectedLabel
          : selectOption.label,
      isSelected: true,
    });
    this.props.onSelect(selectOption.value);
    this.toggleDropDownState(false);
  };

  getFilterValuePosition = (filterValue: string | number) => {
    const { options } = this.props;
    const valueArray = options.map(option => option.value);
    return valueArray.indexOf(filterValue);
  };

  filterArray = (filterValue: string | number) => {
    const { options } = this.props;
    return options.filter(option => this.isFilterValueMatch(option, filterValue))[0];
  };

  isFilterValueMatch = (option: Object, filterValue: string | number) =>
    option.value === filterValue;

  toggleDropDownState = (newState: boolean) => {
    this.setState({ dropDownOpen: newState });
    const index = this.state.value !== '' ? this.getFilterValuePosition(this.state.value) : 0;
    if (newState) {
      this.updatefocusedIndexState(index);
      this.childFocus();
    }
  };

  updatefocusedIndexState = (index: number) => {
    const { options } = this.props;
    const startIndex = 0;
    if (index >= startIndex && index < options.length) {
      this.setState({
        focusedIndex: index,
      });
    }
  };

  resetSelect = () => {
    this.setState({
      value: '',
      selectLabel: this.props.selectLabel,
      isSelected: false,
      dropDownOpen: false,
    });
    this.props.onSelect('');
    this.updatefocusedIndexState(0);
  };

  enterKeyPressHandler = (event: SyntheticEvent<>) => {
    event.preventDefault();
    if (this.state.isSelected && this.props.isClearLabel) {
      this.resetSelect();
    } else if (!this.state.dropDownOpen) {
      this.toggleDropDownState(true);
    } else {
      this.setSelectValue(this.props.options[this.state.focusedIndex]);
      this.setFocusOnElem(this.selectElement);
    }
  };
  childFocus = () => {
    const obj = this;
    setTimeout(() => {
      if (typeof obj.dropDown !== 'undefined' && obj.dropDown !== null) {
        const { options } = this.props;
        const index = options[0].value !== '' ? obj.state.focusedIndex : obj.state.focusedIndex - 1;
        obj.setFocusOnElem(obj.dropDown.childNodes[index]);
      }
    }, 10);
  };

  displayDynamicLabel = (event: SyntheticEvent<>) => {
    const selValue = event.target.getAttribute('data-value');
    const selectOption = this.filterArray(selValue);
    this.addDynamicClass(selectOption.value);
  };

  displayDynamicLabelForNative = (event: SyntheticEvent<>) => {
    this.addDynamicClass(event.target.value);
  };

  addDynamicClass = (value) => {
    const { dynamicPlaceholderLabel, className } = this.props;

    // eslint-disabled next-line
    const element = document.querySelector(`.${className.replace(/\s/gi, '.')}`);
    if (element) {
      if (value && dynamicPlaceholderLabel) {
        element.classList.add('visible-dynamic-label');
      } else {
        element.classList.remove('visible-dynamic-label');
      }
    }
  };

  arrowUpDown = (event: SyntheticEvent<>, isUpKey: boolean) => {
    const correctionIndex = isUpKey ? -1 : 1;
    event.preventDefault();
    if (this.props.isClearLabel && this.props.selected) {
      if (!isUpKey) {
        this.resetSelect();
      }
    } else if (!this.state.dropDownOpen) {
      this.toggleDropDownState(true);
    } else {
      this.updatefocusedIndexState(this.state.focusedIndex + correctionIndex);
      this.childFocus();
    }
  };
  tabbingHandler = (e) => {
    const { dropDownOpen, focusedIndex } = this.state;
    if (dropDownOpen && !e.nativeEvent.shiftKey) {
      // For Tab
      this.updatefocusedIndexState(this.state.focusedIndex + 1);
      this.childFocus();
    } else if (
      // For Shift + Tab
      dropDownOpen &&
      e.nativeEvent.shiftKey &&
      focusedIndex !== 0
    ) {
      this.updatefocusedIndexState(this.state.focusedIndex - 1);
      this.childFocus();
    }
  };

  keyDown(event: SyntheticEvent<>) {
    switch (event.which) {
      case KEY_ESCAPE:
        // ESCAPE keyPress Handling
        this.toggleDropDownState(false);
        break;
      case KEY_ENTER:
      case KEY_SPACE:
        // Enter keyPress Handling
        this.enterKeyPressHandler(event);
        break;
      case KEY_UP_CODE:
        // arrow up keyPress Handling
        this.arrowUpDown(event, true);
        break;
      case KEY_TAB:
        // Tab keyPress Handling
        this.tabbingHandler(event);
        break;
      case KEY_DOWN_CODE:
        // arrow down keyPress Handling
        this.arrowUpDown(event, false);
        break;
      default:
    }
  }

  labelClick() {
    if (this.state.isSelected && this.props.isClearLabel) {
      this.resetSelect();
    } else {
      this.toggleDropDownState(!this.state.dropDownOpen);
    }
  }

  dropDownClick(event: SyntheticEvent<>) {
    const selValue = event.target.getAttribute('data-value');
    const selectOption = this.filterArray(selValue);
    this.setSelectValue(selectOption);
  }

  render(): Node {
    const {
      id,
      inheritedStyles,
      options,
      className,
      deviceType,
      dataSlnmId,
      showLabel,
      labelContent,
      isError,
      valid,
      errorMessage,
      isInvalid,
      disabled,
      labelledById,
      isCheckout,
      dynamicPlaceholderLabel,
      placeholder,
      onBlur,
      onChange,
      customViewOnly,
      ...other
    } = this.props;
    const iconClass = this.getIconClassName();
    return deviceType === MOBILE && !customViewOnly ? (
      <div
        className={`form-group select-box custom-select-box ${className} ${
          disabled ? 'disabled' : ''
        } ${isInvalid ? ' has-error' : ''}`}
        {...other}
      >
        <label htmlFor={id} className={this.state.isValid && 'valid-icon checkmark'}>
          {dynamicPlaceholderLabel && placeholder ? (
            <span className="dynamic-placeholder" aria-hidden="true">
              {placeholder}
            </span>
          ) : (
            showLabel &&
            this.state.value && <span className="label select-label">{labelContent}</span>
          )}
          <select
            disabled={disabled}
            value={this.state.value}
            onChange={(event) => {
              if (onChange) onChange(event);
              this.onChange(event);
              this.displayDynamicLabelForNative(event);
            }}
            onBlur={event => this.onBlur(event)}
            data-error={isError}
            tabIndex="-1"
            aria-hidden="true"
            data-slnm-id={`${dataSlnmId}NativeSelectBox`}
            className={`form-control select-element ${
              this.state.isSelected && this.props.isClearLabel ? 'active' : ''
            }`}
          >
            {options && options.length && options.map(option => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <span
          className={`custom-selected ${this.state.isSelected ? 'selected' : ''}`}
          tabIndex="0"
          role="menu"
          onClick={() => this.labelClick()}
          onKeyDown={event => this.keyDown(event)}
          aria-controls={this.state.dropDownOpen ? 'dropdown' : null}
          aria-expanded={this.state.dropDownOpen}
          data-error={isError}
        >
          {this.state.selectLabel}
          <i className={`icon-arrow ${iconClass}`} role="menuitem" />
        </span>
        {isError && errorMessage ? <p className="error">{errorMessage}</p> : null}
      </div>
    ) : (
      <div
        className={`form-group custom-select-box right ${disabled ? 'disabled' : ''} ${className}${
          isInvalid ? ' has-error' : ''
        }`}
        onBlur={event => this.onBlur(event)}
      >
        <label htmlFor={id}>
          {dynamicPlaceholderLabel && placeholder ? (
            <span className="dynamic-placeholder" aria-hidden="true">
              {placeholder}
            </span>
          ) : (
            <span className={`${!showLabel ? 'is-hidden' : 'label'}`}>{labelContent}</span>
          )}
          <select
            data-slnm-id={`${dataSlnmId}NativeSelectBox`}
            defaultValue={this.state.value}
            className="select-element"
            tabIndex="-1"
            data-error={isError}
          >
            {options && options.length && options.map(option => (
              <option data-selected={option.selectedLabel} value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <span
          data-slnm-id={`${dataSlnmId}SelectBoxLabel`}
          className={`custom-selected ${this.state.isSelected ? 'selected' : ''}`}
          tabIndex="0"
          onClick={() => this.labelClick()}
          onKeyDown={event => this.keyDown(event)}
          role="menu"
          id={labelledById}
          aria-expanded={this.state.dropDownOpen}
          aria-controls={this.state.dropDownOpen ? 'dd-optns-3' : null}
          aria-owns={this.state.dropDownOpen ? 'dd-optns-3' : null}
          data-aria-activedescendant="dd-opt-3-0"
          aria-activedescendant={this.state.dropDownOpen ? 'dd-opt-3-0' : null}
          data-error={isError}
          aria-label={this.state.selectLabel}
          ref={(el) => {
            this.selectElement = el;
          }}
        >
          {this.state.selectLabel}
          {valid ? <span className="valid-icon checkmark" aria-hidden="true" /> : ''}
          <i
            className={
              deviceType !== MOBILE && isCheckout
                ? 'icons state-drop-down '
                : `icon-arrow ${iconClass}`
            }
            role="menuitem"
          />
        </span>
        {this.state.dropDownOpen && (
          <ul
            className="drop-down"
            id="dd-optns-3"
            aria-labelledby={labelledById}
            role="presentation"
            tabIndex="-1"
            ref={(el) => {
              this.dropDown = el;
            }}
            aria-hidden={!this.state.dropDownOpen}
          >
            {options && options.length && options.map((option, index) =>
                option.value !== '' && (
                  <li
                    data-slnm-id={`${dataSlnmId}SelectBoxOption-${index}`}
                    id={`dd-opt-3-${index}`}
                    onClick={(event) => {
                      this.dropDownClick(event);
                      this.displayDynamicLabel(event);
                    }}
                    onKeyDown={(event) => {
                      this.keyDown(event);
                      this.displayDynamicLabel(event);
                    }}
                    tabIndex="0"
                    role="option"
                    key={option.value}
                    data-value={option.value}
                    data-selected={option.selectedLabel}
                    className={this.getClassNameLi(option.value)}
                    aria-selected={this.state.value === option.value}
                    aria-label={option.label}
                  >
                    {option.label}
                  </li>
                ))}
          </ul>
        )}
        {isError && errorMessage ? <p className="error">{errorMessage}</p> : null}
      </div>
    );
  }
}

export default styled(SelectBox)`${styles}`;
export { SelectBox as SelectBoxVanilla };
