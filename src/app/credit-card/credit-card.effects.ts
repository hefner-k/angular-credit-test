import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { PaymentService } from './../services/payment/payment.service';
import {
  PostCreditCardLoad,
  PostCreditCardSuccess,
  PostCreditCardFailure,
} from './credit-card.actions';

@Injectable()
export class CreditCardEffects {
  postCreditCard = createEffect(() =>
    this.actions$.pipe(
      ofType(PostCreditCardLoad),
      switchMap((action) =>
        this.paymentService.postCard(action).pipe(
          map((cardData) => PostCreditCardSuccess(cardData)),
          catchError((error) => of(PostCreditCardFailure(error.status)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private paymentService: PaymentService
  ) {}
}
