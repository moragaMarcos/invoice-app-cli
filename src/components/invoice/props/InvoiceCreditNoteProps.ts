import { CreditNote } from "../../../models/CreditNote";

export interface InvoiceCreditNoteProps {
    onAdd: () => void;
    notes: CreditNote[];
}
  