import { action } from '@storybook/addon-actions';

const defaultCheckbox = {
  isChecked: true,
  className: 'example',
  onClick: action('clicked'),
  label: 'I agree with the Terms and conditions?',
};

const defaultCheckboxUnchecked = {
  isChecked: false,
  className: 'example',
  onClick: action('clicked'),
  label: 'I agree with the Terms and conditions?',
};

export { defaultCheckbox, defaultCheckboxUnchecked };
