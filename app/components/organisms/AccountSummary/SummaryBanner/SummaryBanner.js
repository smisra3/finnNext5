// @flow
import React from 'react';
import styled from 'styled-components';
import styles from './SummaryBanner.style';
import Anchor from '../../../atoms/Anchor';
import Button from '../../../atoms/Button';
import MiniInfoDisplay from '../MiniInfoDisplay';

type Props = {
  cashDetails: Object,
  className: string,
};

const SummaryBanner = (props: Props) => (
  <div className={props.className}>
    <div className="investmentDetails">
      <MiniInfoDisplay
        className="investmentTotalCost"
        title="Investment + Total Cost"
        displayAmount="12345"
        CTA={(<Anchor >Account Holding Report</Anchor>)}
      />
      <MiniInfoDisplay
        className="totalReturn"
        title="Total Return"
        displayAmount="0"
      />
      <MiniInfoDisplay
        className="totalReturn"
        title="Annualised return (incl historic investment and cash)"
      />
    </div>
    <div className="totalCashDetails">
      <MiniInfoDisplay
        className="totalCash"
        title="Total Cash"
        displayAmount={props.cashDetails.totalCash}
        CTA={(<Button secondary>Add Cash</Button>)}
      />
      <MiniInfoDisplay
        className="investableCash"
        title="Cash available to invest"
        displayAmount={props.cashDetails.cashToInvest}
        CTA={(<Button secondary>Invest Now</Button>)}
      />
    </div>
    <div className="otherDetails" />
  </div>
);

export default styled(SummaryBanner)`${styles}`;
