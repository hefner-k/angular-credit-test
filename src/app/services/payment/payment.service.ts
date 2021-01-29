import { Injectable } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card.model';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  postCard(cardData: CreditCard & { type?: String }) {
    cardData = { ...cardData };
    delete cardData.type;
    return this.http
      .post<CreditCard>(environment.baseUrl + 'payment', cardData)
      .pipe(
        tap(() => {
          this.toastr.success('Data successfully submitted');
        })
      );
  }
}
