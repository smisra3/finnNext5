// @flow
import type { Node } from 'react';
import styled from 'styled-components';
import styles from './MiniInfoDisplay.style';
import ToolTip from '../../../atoms/ToolTip';

type Props = {
  title: string,
  displayAmount: string,
  className: string,
  CTA: Node,
  tooltip: string
}

const MiniInfoDisplay = ({
  title, displayAmount, CTA, tooltip, className,
}: Props) => (
  <div className={className}>
    <div className="title">{title}</div>
    {tooltip && <ToolTip>{tooltip}</ToolTip>}
    <div className="displayAmount">{displayAmount}</div>
    {CTA ? (<div className="cta">{CTA}</div>) : null}
  </div>
);

export default styled(MiniInfoDisplay)`${styles}`;
export { MiniInfoDisplay as MiniInfoDisplayVanilla };
