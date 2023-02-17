export const getIsFetchingCurrentUser = state => state.auth.isRefreshing;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user;
export const getUserEmail = state => state.auth.user.email;
export const getIsLoading = state => state.auth.isLoading;
export const getIsModalLogoutOpen = state => state.auth.isModalLogoutOpen;
// export const getToken = state => state.auth.token;
