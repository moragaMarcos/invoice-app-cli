import { FaFileInvoiceDollar, FaPlus } from "react-icons/fa";
import CreditNoteTable from "../credit-note/CreditNoteTable";
import { InvoiceCreditNoteProps } from "./props/InvoiceCreditNoteProps";

export default function InvoiceCreditNote({ onAdd, notes }: InvoiceCreditNoteProps) {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-3">
        <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FaFileInvoiceDollar className="text-indigo-600 w-6 h-6" />
          Notas de Crédito
        </h3>
        <button
          onClick={onAdd}
          className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-5 py-2.5 flex items-center gap-5 rounded-lg"
        >
          <FaPlus />
          Agregar Nota de Crédito
        </button>
      </div>
      <CreditNoteTable notes={notes} />
    </section>
  );
}
