export interface CreditCard {
  cardNumber: string;
  cardHolderName: string;
  expDate: Date;
  cvvNumber?: string;
  amount: number;
}

export interface CreditCardState {
  data?: CreditCard;
  loading: boolean;
  error?: unknown;
}
