import { action } from '@storybook/addon-actions';

const primaryButton = {
  primary: true,
  className: 'example',
  onClick: action('clicked'),
  ariaLabel: 'Submit form',
};

const primaryButtonDisabled = {
  primary: true,
  className: 'example',
  onClick: action('clicked'),
  disabled: true,
};

const secondaryButton = {
  secondary: true,
  className: 'example',
  onClick: action('clicked'),
  ariaLabel: 'Cancel form submit',
};

const secondaryButtonDisabled = {
  secondary: true,
  className: 'example',
  onClick: action('clicked'),
  disabled: true,
};

export {
  primaryButton,
  primaryButtonDisabled,
  secondaryButton,
  secondaryButtonDisabled,
};
