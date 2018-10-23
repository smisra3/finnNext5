import { fidelity, footerNav } from '../../../locales/en-US';

const brandLogoImage = {
  className: '',
  src: 'https://travelnowhere.citybreakweb.com/themes/custom/citybreakweb/cb_travelnowhere/styles/images/logo.svg',
  srcset:
    'https://travelnowhere.citybreakweb.com/themes/custom/citybreakweb/cb_travelnowhere/styles/images/logo.svg, https://travelnowhere.citybreakweb.com/themes/custom/citybreakweb/cb_travelnowhere/styles/images/logo.svg 2x',
  alt: fidelity,
};

const AntonymousHeaderInfo = [
  {
    id: 'aboutUsText',
    value: footerNav.aboutUsText,
  },
  {
    id: 'privacy',
    value: footerNav.privacy,
  },
  {
    id: 'cookie',
    value: footerNav.cookie,
  },
];

export { brandLogoImage, AntonymousHeaderInfo };
