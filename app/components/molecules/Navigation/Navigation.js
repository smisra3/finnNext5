import React from "react";
import { PureComponent } from "react";

import Link from "next/link";
import Image from "../../atoms/Image";
import Anchor from "../../atoms/Anchor";
import { LOGIN } from "../../../routes";
import { NavigationText, brandLogoImage } from "./navigation.static.data";
import { specialcharacter } from "../../../locales/en-US";

import styled from "styled-components";
import styles from "./Navigation.style";

class Navigation extends PureComponent<Props> {
  render() {
    const { className } = this.props;
    const openNav = () => {
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      document.addEventListener("click", closeNav);
      let elem = document.getElementById("mySidenav");
      elem.style.width = "80%";
      elem.classList.add("sidenav");
    };
    const closeNav = () => {
      document.body.style.backgroundColor = "rgba(255,255,255, 0.9)";
      document.removeEventListener("click", closeNav);
      let elem = document.getElementById("mySidenav");
      elem.style.cssText = null;
      elem.classList.remove("sidenav");
    };
    return (
      <div className={`col-xs-2 col-md-8 first-xs ${className}`}>
        <button type="button" className="btn-hamburger" onClick={openNav} />

        <div className={`row navigation-links collapse`} id="mySidenav">
          <div className="slide-header between-lg">
            <Image {...brandLogoImage} />
            <button href="javascript:void(0)" className="closebtn" onClick={closeNav} />
          </div>
          <ul className="row">
            {NavigationText.map(item => (
              <Anchor
              to="#content-wrapper"
              >
                <li key={item.id} className={item.id} keys={item.id}>
                  {item.value}
                  <span />
                  {/* <span>{specialcharacter.forwardslash}</span> */}
                </li>
              </Anchor>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default styled(Navigation)`
  ${styles};
`;
export { Navigation as NavigationVanilla };
