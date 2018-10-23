// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  textInput,
  textInputWithCTA,
  textInputWithError,
} from './Input.mock';

// Import Vanilla Component to display markup and props
import { InputVanilla } from './Input';
// Import Styled Component to showcase variations
import Input from './index';

const wrapperStyle = {
  width: '400px',
};

storiesOf('Atoms', module).addWithChapters('Inputs', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <InputVanilla {...textInput} className={`hide-default-sample ${textInput.className}`} />,
          options: {
            showSource: true,
            allowSourceToggling: true,
            showPropTables: true,
            allowPropTablesToggling: true,
          },
        },
      ],
    },
    {
      title: 'Input Variations',
      sections: [
        {
          title: 'Default Text Box',
          sectionFn: () => <Input {...textInput} />,
        },
        {
          title: 'Text Box with CTA',
          sectionFn: () => <Input {...textInputWithCTA} />,
        },
        {
          title: 'Text Box With Inline Error',
          sectionFn: () => <Input {...textInputWithError} />,
        },
        {
          title: 'Text Box inside a wrapper of fixed width',
          sectionFn: () => (<div style={wrapperStyle}><Input {...textInputWithError} /></div>),
        },
      ],
    },
  ],
});
