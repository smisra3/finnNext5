import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Video from './index';

storiesOf('Video', module)
  .add('', () => (<Video>Hello Video</Video>));
