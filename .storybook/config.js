ßimport React from 'react';
import { configure, setAddon, addDecorator } from "@storybook/react";
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';
import { ThemeProvider } from 'styled-components';
import Theme from './../app/styles/theme';
import '../app/static/styles/vendor/flexboxgrid.css';
import '../app/static/styles/vendor/slick.css';

setDefaults({
  sectionOptions: {
    showSource: false,
    allowSourceToggling: false,
    showPropTables: false,
    allowPropTablesToggling: false,
  }
});

addDecorator(story => {
  return <ThemeProvider theme={Theme}>{story()}</ThemeProvider>
});

setAddon(chaptersAddon);

const req = require.context("../app", true, /story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
