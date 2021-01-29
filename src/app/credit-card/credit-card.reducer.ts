import { Action, createReducer, on } from '@ngrx/store';
import { CreditCardState } from '../models/credit-card.model';
import {
  PostCreditCardLoad,
  PostCreditCardSuccess,
  PostCreditCardFailure,
} from './credit-card.actions';

export const initialState: CreditCardState = {
  loading: false,
};

export const creditCardReducer = createReducer(
  initialState,
  on(PostCreditCardLoad, (state) => {
    return { ...state, error: null, loading: true };
  }),
  on(PostCreditCardSuccess, (state, creditCard) => ({
    ...state,
    loading: false,
    data: creditCard,
  })),
  on(PostCreditCardFailure, (state, error) => ({
    ...state,
    loading: false,
    error: error,
  }))
);

