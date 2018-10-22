// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  loggedIn,
  loggedOut,
} from './Header.mock';

// Import Vanilla Component to display markup and props
import { HeaderVanilla } from '../Header/Header';
// Import Styled Component to showcase variations
import Header from '../Header';

storiesOf('Organisms', module).addWithChapters('Header', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <HeaderVanilla {...loggedOut} className={`hide-default-sample ${loggedOut.className}`} />,
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
          title: 'Antonymous User',
          sectionFn: () => <Header {...loggedOut} />,
        },
        {
          title: 'Known User',
          sectionFn: () => <Header {...loggedIn} />,
        },
      ],
    },
  ],
});
