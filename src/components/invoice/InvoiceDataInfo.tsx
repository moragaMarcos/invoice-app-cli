import { HiOutlineDocumentText } from "react-icons/hi";
import { formatCLP } from "../../utils/formatCLP";
import { InvoiceDataInfoProps } from "./props/InvoiceDataInfoProps";


export default function InvoiceDataInfo({ invoice }: InvoiceDataInfoProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-700 border-b pb-2 flex items-center gap-2">
        <HiOutlineDocumentText className="text-blue-600 w-5 h-5" />
        Factura
      </h3>
      <div className="text-sm text-gray-800 space-y-1.5">
        <p>
          Fecha de Emisión:
          <span className="ml-1">
            {new Date(invoice.invoiceDate).toLocaleDateString()}
          </span>
        </p>
        <p>
          Fecha de Vencimiento:
          <span className="ml-1">
            {new Date(invoice.paymentDueDate).toLocaleDateString()}
          </span>
        </p>
        <p>
          Días hasta vencimiento:
          <span className="ml-1">{invoice.daysToDue}</span>
        </p>
        <p>
          Total:
          <span className="text-green-600 font-semibold ml-1">
            {formatCLP(invoice.totalAmount)}
          </span>
        </p>
        <p>
          Estado Factura:
          <span className="font-semibold ml-1">{invoice.invoiceStatus}</span>
        </p>
        <p>
          Estado de Pago:
          <span className="font-semibold ml-1">{invoice.paymentStatus}</span>
        </p>

        {invoice.payment.paymentMethod && invoice.payment.paymentDate && (
          <>
            <p>
              Método de Pago:
              <span className="font-semibold ml-1">
                {invoice.payment.paymentMethod}
              </span>
            </p>
            <p>
              Fecha de Pago:
              <span className="font-semibold ml-1">
                {new Date(invoice.payment.paymentDate).toLocaleDateString()}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
