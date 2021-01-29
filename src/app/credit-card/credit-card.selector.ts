import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreditCardState } from '../models/credit-card.model';

export const selectCreditCardState = (state: AppState) => {return state.CreditCard};

export const selectCreditCardData = createSelector(
  selectCreditCardState,
  (state: CreditCardState) => {
    return state.data;
  }
);
