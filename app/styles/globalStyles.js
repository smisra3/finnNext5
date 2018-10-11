import Theme from "./theme";

export default `
* {
  box-sizing: border-box;
}

.Overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0b0b0b;
}

body {
  font-family: ${Theme.fontFamilyDefault};
  font-size: ${Theme.fontSizeDefault};
  font-weight: ${Theme.fontNormal};
  letter-spacing: ${Theme.letterSpacing}
  padding-top: ${Theme.minHeightHeaderMobile};
  @media (max-width: 767px){
    &.modal-open {
      position:fixed;
    }
    padding-top: ${Theme.minHeightHeaderDesktop};
  }
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}


body.drawer-open {
  overflow-y: hidden;
}

input[type=text]::-ms-clear {
  display: none;
}

.select-box {
  .checkmark {
    &::before {
      content: '';
    }
  }
}

.right {
  float: right;
}

.center-align{
  text-align: center;
}

.margin-0 {
  margin:0;
}

.select-box{
  position:relative;
  width:100%;
}

.select-box .arrow-down4{
  position:absolute;
  right: 8px;
  top: 14px;
}

select{
  -webkit-appearance: none;
  -moz-appearance: radio-container;
  appearance: none;
  background: transparent;
  padding: 12px;
  padding-right: 40px;
  border-radius: 0;
  border: 1px solid;
  width:100%;
}

button,
input,
optgroup,
select,
textarea {
  border-radius: 0;
  font-family: ${Theme.fontFamilyPrimary};
  letter-spacing: inherit;
  -webkit-appearance: none;
}

.is-hidden {
  display: none !important;
}

.is-visible {
  display: block;
}

.visually-hidden {
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
}

.success-tick::after {
  border: solid ${Theme.backgroundColorSuccess};
  border-width: 0 2px 2px 0;
}

.white-shadow-box{
  box-shadow: ${Theme.containerShadowPrimary} 2px 4px 6px 4px;
  background-color: ${props => props.theme.backgroundColorPrimary};
  will-change: opacity;
}

/* overriding the grid padding and margin values defined in flexboxgrid.css to 1rem = 20px instead of 16px */

.row.full {
    margin-left: -1.25rem;
    margin-right: -1.25rem;
}

.content-width {
  max-width: ${Theme.maxWidthPageContent};
  margin-left: auto;
  margin-right: auto;
}

.row {
    margin-right: -0.625rem;
    margin-left: -0.625rem;

}

.col {
    margin-right: -0.625rem;
    margin-left: -0.625rem;
}

.col-xs,
.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-offset-0,
.col-xs-offset-1,
.col-xs-offset-2,
.col-xs-offset-3,
.col-xs-offset-4,
.col-xs-offset-5,
.col-xs-offset-6,
.col-xs-offset-7,
.col-xs-offset-8,
.col-xs-offset-9,
.col-xs-offset-10,
.col-xs-offset-11,
.col-xs-offset-12 {
  padding-right: 0.625rem;
  padding-left: 0.625rem;
}

@media only screen and (min-width: 768px) {
  .container {
      width: 784px;
  }

  .col-sm,
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm-offset-0,
  .col-sm-offset-1,
  .col-sm-offset-2,
  .col-sm-offset-3,
  .col-sm-offset-4,
  .col-sm-offset-5,
  .col-sm-offset-6,
  .col-sm-offset-7,
  .col-sm-offset-8,
  .col-sm-offset-9,
  .col-sm-offset-10,
  .col-sm-offset-11,
  .col-sm-offset-12 {
      padding-right: 0.625rem;
      padding-left: 0.625rem;
  }
}

.nullify-gutters {
  margin: 0;
  padding: 0;
}

.pac-container {
  z-index: ${Theme.zIndex.zPlacesAutocomplete};
  top: 100% !important;
  left: 0 !important;
}

.sr-only {
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px);
  top: auto;
  width: auto;
  height: 20px;
  overflow: hidden;
  &.no-focusable{
    width:1px;
    visibility:hidden;
    &:focus{
      outline:none;
      border:none;
    }
  }
}

.icon-atf-tooltip {
  border: 0;
  padding: 0;
  background: none;
  cursor: pointer;
}

.icon-atf-tooltip::before {
  font-size: 16px;
}

.tooltip-parent {
  background-color: transparent;
}

.main-layout{
  &:focus{
    outline:none;
  }
  &.focus-visible {
    outline: 1px dashed ${Theme.textColorSecondary};
  }
}
`;
