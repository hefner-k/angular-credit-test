import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { creditCardReducer } from './credit-card/credit-card.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CreditCardEffects } from './credit-card/credit-card.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NumberDirective } from './numbers-only.directive';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [AppComponent, CreditCardComponent, HomeComponent, NumberDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ CreditCard: creditCardReducer }),
    EffectsModule.forRoot([CreditCardEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
