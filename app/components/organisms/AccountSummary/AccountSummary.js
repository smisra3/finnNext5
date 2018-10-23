// @flow
import React from 'react';
import styled from 'styled-components';
import styles from './AccountSummary.style';
import Button from '../../atoms/Button';
import Anchor from '../../atoms/Anchor';
import LeftNavigation from './LeftNavigation';
import SummaryBanner from './SummaryBanner';
import InvestmentContract from './InvestmentContract';
import labelsUtil from '../../../utils/labelsUtil';

type Props = {
  directAccount: Object,
  directAccountList: Object,
  directAccountHoldings: Object,
  cashDetails: Object,
  changeSortingOrder: Function,
  summaryDetails: Object,
  labels: Object,
  className: string,
  isFetching: boolean,
  sortOrder: boolean,

}

const contractHeader = (props: Props) => {
  const { changeSortingOrder, labels, sortOrder } = props;
  return (
    <header className="row contractHeader">
      <Button
        className="col-xs-4 heading"
        onClick={changeSortingOrder}
        sortOrder={sortOrder}
      >
        {labelsUtil.getLabel(labels, 'name')}
      </Button>
      <div className="col-xs-2">{labelsUtil.getLabel(labels, 'price')}</div>
      <div className="col-xs-2">{labelsUtil.getLabel(labels, 'qty')}</div>
      <div className="col-xs-2 value">{labelsUtil.getLabel(labels, 'value')}</div>
    </header>
  );
};


const AccountSummaryComponent = (props: Props) => {
  if (props.isFetching || typeof props.isFetching === 'undefined') {
    return null;
  }
  return (
    <React.Fragment>
      <LeftNavigation
        directAccount={props.directAccount}
        directAccountList={props.directAccountList}
      />
      <div className={`${props.className} mainSection col-xs-9`}>
        <div className="accountSummaryHeader">
          <h2>All Account ({props.summaryDetails.totalAccount})</h2>
          <Anchor>Show your Customer Reference Number</Anchor>
        </div>
        <SummaryBanner cashDetails={props.cashDetails} />
        {contractHeader(props)}
        {props.directAccountHoldings.map(contract => (
          <InvestmentContract
            name={contract.additionalDetails.assetName}
            price={contract.latestUnitPrice}
            qty={contract.totalUnits}
            value={contract.totalValuation}
            cta={contract.cta || 'Deal'}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default styled(AccountSummaryComponent)`
  ${styles}
`;
