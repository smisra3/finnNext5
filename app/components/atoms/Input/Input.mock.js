import { action } from '@storybook/addon-actions';
import defaultAnchor from '../Anchor/Anchor.mock';
import Anchor from '../Anchor/index';

const textInput = {
  className: 'example',
  labelContent: 'User Name',
  type: 'text',
  required: true,
  isError: false,
  onChange: action('changed'),
};

const checkboxInput = {
  className: 'example',
  labelContent: 'User Name',
  type: 'checkbox',
  required: true,
  isError: false,
  onChange: action('changed'),
  value: '',
};

const textInputWithCTA = {
  className: 'example',
  labelContent: 'Username',
  type: 'text',
  required: true,
  isError: false,
  onChange: action('changed'),
  labelAddOnComponent: (<Anchor {...defaultAnchor} >Forgot your username</Anchor>),
};


const textInputWithError = {
  className: 'example',
  labelContent: 'User Name',
  type: 'text',
  required: true,
  isError: true,
  errorMessage: 'Please enter your username or CRN',
  onChange: action('changed'),
};

export {
  textInput,
  textInputWithError,
  textInputWithCTA,
  checkboxInput,
};
