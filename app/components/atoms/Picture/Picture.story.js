import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Picture from './index';

storiesOf('Picture', module)
  .add('', () => (<Picture>Hello Picture</Picture>));
