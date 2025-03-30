export interface CreditNoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (amount: number) => void;
    saldoDisponible: number;
}