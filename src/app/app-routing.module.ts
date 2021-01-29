import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'payment',
    component: CreditCardComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
