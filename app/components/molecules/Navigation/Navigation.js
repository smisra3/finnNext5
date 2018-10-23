import React from "react";
import { PureComponent } from "react";

import Link from "next/link";
import Image from "../../atoms/Image";
import Anchor from "../../atoms/Anchor";
import { specialcharacter } from "../../../locales/en-US";

import styled from "styled-components";
import styles from "./Navigation.style";
import "../../../styles/index";

class Navigation extends PureComponent<Props> {
  render() {
    const { className, NavigationText, brandLogoImage } = this.props;
    const openNav = () => {
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      document.body.style.overflow = "hidden";
      document.getElementById("main-header").style.backgroundColor = "rgba(0, 0, 0, 0.08))";

      // adding the click to body 
      // document.addEventListener("click", closeNav);
      // sidenav styling
      let elem = document.getElementById("sidenav-menu");
      elem.style.width = "80%";
      elem.classList.add("sidenav");
    };
    const closeNav = () => {
      console.log('close');
      document.body.style.backgroundColor = "rgba(255,255,255, 0.9)";
      document.body.style.overflow = "scroll";
      document.getElementById("main-header").style.cssText = null;
      document.removeEventListener("click", closeNav);
      let elem = document.getElementById("sidenav-menu");
      elem.style.cssText = null;
      elem.classList.remove("sidenav");
    };

    return (
      <nav className={`${className}`}>
        {/* humburder menu button */}
        {NavigationText && <button type="button" className="btn-hamburger" onClick={openNav} /> }

        {/* sideBar menu container */}
        <div className={`row navigation-links collapse`} id="sidenav-menu">
          <div className="slide-header between-lg">
            {brandLogoImage && <Image {...brandLogoImage} /> }
            <button href="javascript:void(0)" className="closebtn" onClick={closeNav} />
          </div>
          {/* navigation links used for both desktop amd mobile */}
          <ul className="row">
            {NavigationText && NavigationText.map(item => (
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
        {/* end sideBar menu container */}
      </nav>
    );
  }
}

export default styled(Navigation)`
  ${styles};
`;
export { Navigation as NavigationVanilla };
