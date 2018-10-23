// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultCheckbox, defaultCheckboxUnchecked } from './Checkbox.mock';

// Import Vanilla Component to display markup and props
import CheckBox from './CheckBox';
// Import Styled Component to showcase variations
import CheckboxVanilla from './index';

storiesOf('Atoms', module).addWithChapters('Checkbox', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <CheckboxVanilla className="hide-default-sample">Submit</CheckboxVanilla>,
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
      title: 'Primary Button Variations',
      sections: [
        {
          title: 'Default',
          sectionFn: () => <CheckBox {...defaultCheckbox}>Submit</CheckBox>,
        },
        {
          title: 'Unchecked',
          sectionFn: () => <CheckBox {...defaultCheckboxUnchecked}>Submit</CheckBox>,
        },
      ],
    },
  ],
});
