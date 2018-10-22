import { navigationLabels, fidelity } from "../../../locales/en-US";

const NavigationText = [
  {
    id: "seasonsText",
    value: navigationLabels.seasonsText
  },
  {
    id: "destinationText",
    value: navigationLabels.destinationText
  },
  {
    id: "themeText",
    value: navigationLabels.themeText
  },
  {
    id: "travelStorieText",
    value: navigationLabels.travelStorieText
  },
  {
    id: "experiencesText",
    value: navigationLabels.experiencesText
  }
];


const brandLogoImage = {
  className: "",
  src: "http://127.0.0.1:3002/static/images/Finnair.png",
  srcset:
    "http://127.0.0.1:3002/static/images/Finnair.png, http://127.0.0.1:3002/static/images/Finnair-2x.png 2x",
  alt: fidelity
};

export { NavigationText, brandLogoImage };
