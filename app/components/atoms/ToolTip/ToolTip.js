/**
 *
 * ToolTip
 *
 */
// @flow
import { Component } from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import styles from './ToolTip.style';
import { MOBILE, KEY_ENTER, KEY_SPACE } from '../../../constants';
import { labelCloseToolTip } from '../../../locales/en-US';

type Props = {
  children: Node,
  className: string,
  label: string,
  container: string,
  styleOverride: ?Object,
  onClick?: () => void,
  deviceType?: string,
  isCheckoutPage: boolean,
  isShoppingBag: boolean,
  isLargeToolTip?: boolean,
  defaultMobileToolTip: boolean,
  excludeContainer: boolean,
};

type State = {
  isVisible: boolean,
  style: Object,
};

class ToolTip extends Component<Props, State> {
  static defaultProps = {
    isLargeToolTip: false,
    onClick: () => {},
    deviceType: '',
  };

  state = {
    isVisible: false,
    style: {
      width: this.props.deviceType === MOBILE ? 'calc(100vw - 30px)' : '13em',
      left: '-100%',
    },
  };

  componentDidMount() {
    this.setLabelPosition(
      this.props.container,
      this.props.styleOverride,
      this.props.excludeContainer,
    );
  }

  componentWillReceiveProps(nextProps: Props) {
    const {
      deviceType,
      isCheckoutPage,
      isShoppingBag,
      defaultMobileToolTip,
      excludeContainer,
    } = this.props;
    const isMobile = deviceType === MOBILE;
    const leftPosition = `-${this.elementRef.offsetLeft - 15}px`;
    if (defaultMobileToolTip && isMobile) {
      const defaultMobileStyle = {
        width: 'calc(100vw - 30px)',
        left: leftPosition,
      };
      this.setLabelPosition(nextProps.container, defaultMobileStyle, excludeContainer);
    }
    if (
      this.props.styleOverride &&
      nextProps.styleOverride.width !== this.props.styleOverride.width &&
      deviceType === MOBILE &&
      (isCheckoutPage || isShoppingBag)
    ) {
      const styleOverride = {
        width: nextProps.styleOverride.width,
        left: `-${this.elementRef.offsetLeft - 15}px`,
      };
      this.setLabelPosition(nextProps.container, styleOverride, excludeContainer);
    }
  }

  setLabelPosition(container, styleOverride, excludeContainer) {
    const style = {};
    const { deviceType } = this.props;
    const isMobile = deviceType === MOBILE;
    let substractOffset = 30;

    if (isMobile && excludeContainer) {
      substractOffset = 0;
    }

    if (container && this.elementRef) {
      const containerElement = document.querySelector(`[data-tool-tip="${container}"]`);
      let toolTipWidth;
      if (!styleOverride && containerElement) {
        toolTipWidth = isMobile
          ? containerElement.offsetWidth - substractOffset
          : containerElement.offsetWidth;
      }
      if (containerElement && this.elementRef) {
        style.width = styleOverride ? `${styleOverride.width}` : `${toolTipWidth}px`;
        style.left = styleOverride
          ? `${styleOverride.left}`
          : `${containerElement.offsetLeft - this.elementRef.offsetLeft}px `;
      }
      this.setState({ style });
    }
  }

  elementRef = null;

  handleMouseEnter(e: SyntheticEvent<>, deviceType: string) {
    if (deviceType !== MOBILE) {
      this.setState({
        isVisible: true,
      });
    }
  }

  handleMouseLeave() {
    this.setState({
      isVisible: false,
    });
  }

  handleKeyPress(event: SyntheticEvent<>) {
    if (event.which === KEY_SPACE || event.which === KEY_ENTER) {
      this.setState({
        isVisible: !this.state.isVisible,
      });
    }
  }

  showVisibility = () => {
    this.setState({
      isVisible: true,
    });
  };

  hideVisibility = (e) => {
    const tooltipLinkExist = this.elementRef.getElementsByClassName('tooltip-link').length;
    if (!tooltipLinkExist || e.target.className.indexOf('tooltip-link') !== -1) {
      this.setState({
        isVisible: false,
      });
    }
  };

  handleClick() {
    this.setState(
      {
        isVisible: !this.state.isVisible,
      },
      () => {
        if (this.props.deviceType === MOBILE) {
          const defaultMobileStyle = {
            width: 'calc(100vw - 30px)',
            left: `-${this.elementRef.offsetLeft}px`,
          };
          this.setLabelPosition(
            this.props.container,
            defaultMobileStyle,
            this.props.excludeContainer,
          );
        }
      },
    );
    if (this.props.onClick) {
      this.props.onClick(this.state.isVisible);
    }
  }

  render() {
    const isVisible = this.state.isVisible ? ' is-tooltip-visible' : ' is-tooltip-hidden';
    const className = `${this.props.className} tooltip-parent ${isVisible}`;
    const { deviceType, isLargeToolTip } = this.props;
    return (
      <button
        className={className}
        onFocus={deviceType !== MOBILE ? () => this.showVisibility() : null}
        onBlur={deviceType !== MOBILE ? e => this.hideVisibility(e) : null}
        onKeyPress={e => this.handleKeyPress(e)}
        onMouseEnter={e => this.handleMouseEnter(e, deviceType)}
        onMouseLeave={() => this.handleMouseLeave()}
        ref={(element) => {
          this.elementRef = element;
        }}
        onClick={() => {
          this.handleClick();
        }}
      >
        <span
          role="presentation"
          data-slnm-id="toolTipCTA"
          className="tooltip-icon"
          onClick={() => {
            this.handleClick();
          }}
        >
          {this.props.children}
        </span>
        <span className="tooltip-label" data-slnm-id="toolTipBubble" style={this.state.style}>
          {isLargeToolTip ? (
            <span className="tooltip-label-child large-tooltip  tooltip-link">
              <i className="icon close" role="button" aria-label={labelCloseToolTip} />
              {this.props.label}
            </span>
          ) : (
            <span className="tooltip-label-child">{this.props.label}</span>
          )}
        </span>
      </button>
    );
  }
}
export default styled(ToolTip)`${styles}`;

export { ToolTip };
