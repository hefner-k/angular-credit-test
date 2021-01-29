import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PostCreditCardLoad } from './credit-card.actions';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent implements OnInit {
  paymentForm: FormGroup = new FormGroup({
    cardNumber: new FormControl(null, [Validators.required]),
    cardHolderName: new FormControl(null, [Validators.required]),
    expDate: new FormControl(null, [Validators.required]),
    cvvNumber: new FormControl(null, [Validators.maxLength(3),Validators.minLength(3)]),
    amount: new FormControl(0, [Validators.required, Validators.min(0)]),
  });
  get today() {
    const today = new Date();
    let dd = today.getDate().toString();
    let mm = (today.getMonth() + 1).toString();
    const yyyy = today.getFullYear();
    if (Number(dd) < 10) {
      dd = '0' + dd;
    }
    if (Number(mm) < 10) {
      mm = '0' + mm;
    }

    return yyyy + '-' + mm + '-' + dd;
  }
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  submitPayment() {
    if (this.paymentForm.valid) {
      this.store.dispatch(PostCreditCardLoad(this.paymentForm.value));
      this.router.navigate(['/']);
    }
  }

  hasError(f: FormGroupDirective, fieldName: string) {
    return (
      (f.submitted && this.paymentForm.get(fieldName)?.invalid) ||
      (this.paymentForm.get(fieldName)?.invalid &&
        (this.paymentForm.get(fieldName)?.dirty ||
          this.paymentForm.get(fieldName)?.touched))
    );
  }
}
