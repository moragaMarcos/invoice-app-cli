import { CreditNote } from "../models/CreditNote";
import { Invoice } from "../models/Invoice";
import api from "./axios";

export const getAllInvoices = async (): Promise<Invoice[]> => {
  const response = await api.get<Invoice[]>("/invoice");
  return response.data;
};

export const getInvoiceByNumber = async (
  invoiceNumber: number
): Promise<Invoice> => {
  const response = await api.get<Invoice>(`/invoice/${invoiceNumber}`);
  return response.data;
};

export const getCreditNotesByInvoice = async (
  invoiceNumber: number
): Promise<CreditNote[]> => {
  const response = await api.get<CreditNote[]>(
    `/invoice/${invoiceNumber}/credit-notes`
  );
  return response.data;
};

export const searchInvoices = async (params: {
  invoiceNumber?: string;
  invoiceStatus?: string;
  paymentStatus?: string;
}): Promise<Invoice[]> => {
  const response = await api.get<Invoice[]>("/invoice/search", {
    params,
  });
  return response.data;
};

export const createCreditNote = async (
  invoiceNumber: number,
  amount: number
): Promise<CreditNote> => {
  const response = await api.post<CreditNote>(
    `/invoice/${invoiceNumber}/credit-note`,
    { creditNoteAmount: amount }
  );
  return response.data;
};
