export interface InvoiceFiltersProps {
    filters: {
      invoiceNumber: string;
      invoiceStatus: string;
      paymentStatus: string;
    };
    onChange: (filters: InvoiceFiltersProps["filters"]) => void;
    onSearch: () => void;
    onReset: () => void;
}