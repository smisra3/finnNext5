// @flow
import { connect } from 'react-redux';
import changeSortingOrderAction from './AccountSummary.actions';
import AccountSummaryComponent from './AccountSummary';
import {
  makeDirectAccountSelector,
  makeDirectAccountListSelector,
  makeDirectAccountHoldingsSelector,
  makeCashDetailsSelector,
  makeSummaryDetailsSelector,
  makeAccountSummaryLabelsSelector,
  makeIsFetchingSelector,
  makeSortOrderSelector,
} from './AccountSummary.selectors';

/* istanbul ignore next */

const makeMapStateToProps = () => state => ({
  directAccount: makeDirectAccountSelector()(state),
  directAccountList: makeDirectAccountListSelector()(state),
  directAccountHoldings: makeDirectAccountHoldingsSelector()(state),
  cashDetails: makeCashDetailsSelector()(state),
  summaryDetails: makeSummaryDetailsSelector()(state),
  labels: makeAccountSummaryLabelsSelector()(state),
  isFetching: makeIsFetchingSelector()(state),
  sortOrder: makeSortOrderSelector()(state),
});

const mapDispatchToProps = dispatch => ({
  changeSortingOrder: () => dispatch(changeSortingOrderAction()),
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps,
)(AccountSummaryComponent);
