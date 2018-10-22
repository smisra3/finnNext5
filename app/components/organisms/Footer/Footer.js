// @flow
import React from "react";

import styled from "styled-components";
import { brandLogoImage, AntonymousHeaderInfo } from "./footer.static.data";

import styles from "./Footer.style";
import Anchor from "../../atoms/Anchor";
import Image from "../../atoms/Image";
console.log(AntonymousHeaderInfo);

const Footer = ({ className }: Props): Node => (
        <footer className={`row center-xs middle-xs ${className}`}>
            <Image {...brandLogoImage} />
            <ul>
            {AntonymousHeaderInfo.map(item => (
              <li key={item.id} className={item.id} keys={item.id}>
                {item.value}
              </li>
            ))}
            </ul>   
        </footer>
);

export default styled(Footer)`
  ${styles};
`;

export { Footer };
