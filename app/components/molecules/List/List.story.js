// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  unorderedList,
  orderedList,
} from './List.mock';

// Import Vanilla Component to display markup and props
import { ListVanilla } from './List';
// Import Styled Component to showcase variations
import List from './index';

storiesOf('Molecules', module).addWithChapters('List', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <ListVanilla {...unorderedList} className={`hide-default-sample ${primaryButton.className}`} />,
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
      title: 'List Variations',
      sections: [
        {
          title: 'Unordered List',
          sectionFn: () => <List {...unorderedList} />,
        },
        {
          title: 'Ordered List',
          sectionFn: () => <List {...orderedList} />,
        },
      ],
    },
  ],
});
