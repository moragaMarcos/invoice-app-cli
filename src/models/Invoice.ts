import { Customer } from "./Customer";
import { CreditNote } from "./CreditNote";
import { InvoiceStatus } from "../enum/InvoiceStatus";
import { PaymentStatus } from "../enum/PaymentStatus";

export interface Invoice {
  invoiceNumber: number;
  invoiceDate: string;
  totalAmount: number;
  daysToDue: number;
  paymentDueDate: string;
  invoiceStatus: InvoiceStatus
  paymentStatus: PaymentStatus
  customer: Customer;
  invoiceCreditNote: CreditNote[];
  payment: Payment;
  products: Products[];
}

interface Payment{
    paymentMethod: string,
    paymentDate: string
}
interface Products{
    name: string,
    quantity: number,
    unitPrice: number,
    subTotal: number
}
