import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import ToolTip from './index';

storiesOf('ToolTip', module)
  .add('', () => (<ToolTip>Hello ToolTip</ToolTip>));
