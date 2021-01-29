import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { selectCreditCardData } from '../credit-card/credit-card.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardValue$ = this.store.pipe(select(selectCreditCardData));

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
  }



}
