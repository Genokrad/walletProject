export const selectTransactions = state => state.transactionsController.items;
export const selectOneTransaction = state =>
  state.transactionsController.oneTransaction;
export const didUpdate = state => state.transactionsController.didUpdate;

export const selectIsLoading = state => state.transactionsController.isLoading;
export const selectError = state => state.transactionsController.error;
export const selectIsModalAddTransactionOpen = state =>
  state.transactionsController.isModalAddTransactionOpen;
