import { fidelity, footerNav } from "../../../locales/en-US";

const brandLogoImage = {
  className: "",
  src: "http://127.0.0.1:3002/static/images/Finnair.png",
  srcset:
    "http://127.0.0.1:3002/static/images/Finnair.png, http://127.0.0.1:3002/static/images/Finnair-2x.png 2x",
  alt: fidelity
};

const AntonymousHeaderInfo = [
  {
    id: "aboutUsText",
    value: footerNav.aboutUsText
  },
  {
    id: "privacy",
    value: footerNav.privacy
  },
  {
    id: "cookie",
    value: footerNav.cookie
  }
];

export { brandLogoImage, AntonymousHeaderInfo };
