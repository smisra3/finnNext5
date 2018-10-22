import { createSelector } from 'reselect';
import get from 'lodash/get';
import { LABELS_STATE_KEY } from '../../../global/constants';
import { ACCOUNT_SUMMARY_STATE_KEY, ACCOUNT_SUMMARY_LABEL_STATE_KEY } from '../../templates/AccountSummary/AccountSummary.constants';

export const accountSummarySelector = state => state[ACCOUNT_SUMMARY_STATE_KEY];
export const labelsSelector = state => get(state, ['global', LABELS_STATE_KEY]);

export const accountSummaryLabelsSelector =
  createSelector(labelsSelector, labels => labels[ACCOUNT_SUMMARY_LABEL_STATE_KEY]);

export const sortOrderSelector =
  createSelector(accountSummarySelector, accountSummaryPage => accountSummaryPage.sortOrder);

export const directAccountSelector =
  createSelector(
    accountSummarySelector,
    accountSummaryData => accountSummaryData.directAccountGroup,
  );

export const makeDirectAccountSelector = () => directAccountSelector;
export const makeAccountSummaryLabelsSelector = () => accountSummaryLabelsSelector;

export const makeIsFetchingSelector = () =>
  createSelector(accountSummarySelector, accountSummary => accountSummary.isFetching);

export const makeSortOrderSelector = () => sortOrderSelector;

export const makeDirectAccountListSelector = () =>
  createSelector(
    directAccountSelector,
    directAccount => directAccount.accountProductGroup.GIA.accountList,
  );
export const makeDirectAccountHoldingsSelector = () =>
  createSelector(
    directAccountSelector,
    sortOrderSelector,
    (directAccount, sortOrder) => {
      const accountList = directAccount.accountProductGroup.ISA.accountList[0].holdings;
      if (sortOrder) {
        return accountList.sort((account1, account2) =>
          account1.additionalDetails.assetName > account2.additionalDetails.assetName);
      }
      return accountList.sort((account1, account2) =>
        account1.additionalDetails.assetName < account2.additionalDetails.assetName);
    },
  );

export const makeCashDetailsSelector = () =>
  createSelector(accountSummarySelector, accountSummaryData => accountSummaryData.cashDetails);
export const makeSummaryDetailsSelector = () =>
  createSelector(
    accountSummarySelector,
    accountSummaryData => ({
      totalAccount: accountSummaryData.totalAccount,
    }),
  );
