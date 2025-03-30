import { FaChevronLeft } from "react-icons/fa";
import { InvoiceHeaderProps } from "./props/InvoiceHeaderProps";


export default function InvoiceHeader({ invoiceNumber, onBack }: InvoiceHeaderProps) {
  return (
    <div className="text-center md:text-left flex items-center gap-16">
      <button
        onClick={onBack}
        className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer flex items-center gap-2"
      >
        <FaChevronLeft className="w-4 h-4" />
        Volver a lista
      </button>

      <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
        Factura #{invoiceNumber}
      </h2>
    </div>
  );
}
