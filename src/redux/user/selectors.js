import { createSelector } from 'reselect';

export const selectEmail = state => state.user.email;

export const selectConfirmedEmail = state => state.user.confirmedEmail;

export const selectIsUserAuth = state => state.user.token;
