import { createAction,props } from '@ngrx/store';
import { CreditCard } from '../models/credit-card.model';

export const PostCreditCardLoad = createAction('[Credit Card Component] Post credit card load',props<CreditCard>());
export const PostCreditCardSuccess = createAction('[Credit Card Component] Post credit card success',props<CreditCard>());
export const PostCreditCardFailure = createAction('[Credit Card Component] Post credit card fail',props<String>());
