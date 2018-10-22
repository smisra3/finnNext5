// @flow
import React from 'react';
import { Map } from 'immutable';
import ListCard from '../ListCard';

type Props = {
  className?: string | void,
  directAccount: Map,
  directAccountList: Map,
};

const LeftNavigation = (props: Props) => (
  <div className={`col-xs-3 ${props.className ? props.className : ''}`} >
    <ListCard heading title="Fidelity Personal Investing accounts" displayAmount={props.directAccount.totalInvestmentPlusCash} />
    {props.directAccountList.map(account => (
      <ListCard
        title={`Investment Accounts-${account.accountDesignation}`}
        displayAmount={account.totalInvestmentPlusCash}
      />
      ))}
  </div>
);

LeftNavigation.defaultProps = {
  className: '',
};

export default LeftNavigation;
