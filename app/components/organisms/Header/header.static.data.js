import { fidelity, PersonalInvestingContactNo, PersonalInvesting, navigationLabels } from '../../../locales/en-US';

const brandLogoImage = {
  className: '',
  src: 'https://travelnowhere.citybreakweb.com/themes/custom/citybreakweb/cb_travelnowhere/styles/images/logo.svg',
  srcset:
    'https://travelnowhere.citybreakweb.com/themes/custom/citybreakweb/cb_travelnowhere/styles/images/logo.svg, https://travelnowhere.citybreakweb.com/themes/custom/citybreakweb/cb_travelnowhere/styles/images/logo.svg 2x',
  alt: fidelity,
};

const AntonymousHeaderInfo = [
  {
    id: 'contact-no',
    value: PersonalInvestingContactNo,
  },
  {
    id: 'personal-investing',
    value: PersonalInvesting,
  },
];

const css = [];
css.push(
  'http://127.0.0.1:3002/static/styles/vendor/normalize.css',
  'http://127.0.0.1:3002/static/styles/font-awesome.min.css',
  'http://127.0.0.1:3002/static/styles/icons/icomoon.css',
  'http://127.0.0.1:3002/static/styles/vendor/flexboxgrid.css',
  'http://127.0.0.1:3002/static/styles/main.css',
);

const cartLogoImage = {
  className: "",
  src: "http://127.0.0.1:3002/static/images/Cart.svg",
  srcset:
    "http://127.0.0.1:3002/static/images/Cart.svg, http://127.0.0.1:3002/static/images/Cart.svg 2x",
  alt: fidelity
};

const NavigationText = [
  {
    id: 'seasonsText',
    value: navigationLabels.seasonsText,
  },
  {
    id: 'destinationText',
    value: navigationLabels.destinationText,
  },
  {
    id: 'themeText',
    value: navigationLabels.themeText,
  },
  {
    id: 'travelStorieText',
    value: navigationLabels.travelStorieText,
  },
  {
    id: 'experiencesText',
    value: navigationLabels.experiencesText,
  },
];

export { brandLogoImage, cartLogoImage, AntonymousHeaderInfo, css, NavigationText };
