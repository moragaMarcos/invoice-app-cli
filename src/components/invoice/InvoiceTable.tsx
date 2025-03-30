import { useNavigate } from "react-router-dom";
import { formatCLP } from "../../utils/formatCLP";
import { useEffect, useState } from "react";
import { InvoiceTableProps } from "./props/InvoiceTableProps";

export default function InvoiceTable({ invoices }: InvoiceTableProps) {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 876);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 876);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="space-y-4">
        {invoices.map((inv) => (
          <div
            key={inv.invoiceNumber}
            className="bg-white rounded-2xl shadow-md p-4 space-y-2"
          >
            <div className="text-sm font-semibold text-gray-700">
              <span className="text-gray-500"># Factura:</span> {inv.invoiceNumber}
            </div>
            <div className="text-sm text-gray-700">
              <span className="text-gray-500">Cliente:</span> {inv.customer.name}
            </div>
            <div className="text-sm text-gray-700">
              <span className="text-gray-500">Estado Factura:</span>{" "}
              <span
                className={`inline-block px-2 py-1 rounded-full text-white text-xs font-medium ${
                  inv.invoiceStatus === 'Issued'
                    ? 'bg-green-500'
                    : inv.invoiceStatus === 'Partial'
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
              >
                {inv.invoiceStatus}
              </span>
            </div>
            <div className="text-sm text-gray-700">
              <span className="text-gray-500">Estado Pago:</span>{" "}
              <span
                className={`inline-block px-2 py-1 rounded-full text-white text-xs font-medium ${
                  inv.paymentStatus === 'Paid'
                    ? 'bg-green-600'
                    : inv.paymentStatus === 'Overdue'
                    ? 'bg-red-600'
                    : 'bg-yellow-500'
                }`}
              >
                {inv.paymentStatus}
              </span>
            </div>
            <div className="text-sm font-medium text-gray-900">
              <span className="text-gray-500">Total:</span> {formatCLP(inv.totalAmount)}
            </div>
            <button
              onClick={() => navigate(`/invoice/${inv.invoiceNumber}`)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg w-full"
            >
              Ver Detalle
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-blue-600 text-white uppercase text-xs tracking-wide">
          <tr>
            <th className="px-6 py-3 whitespace-nowrap"># Factura</th>
            <th className="px-6 py-3 whitespace-nowrap">Cliente</th>
            <th className="px-6 py-3 whitespace-nowrap">Estado Factura</th>
            <th className="px-6 py-3 whitespace-nowrap">Estado Pago</th>
            <th className="px-6 py-3 whitespace-nowrap">Total</th>
            <th className="px-6 py-3 text-center whitespace-nowrap">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {invoices.map((inv) => (
            <tr key={inv.invoiceNumber} className="hover:bg-gray-50 border-b transition-all">
              <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                {inv.invoiceNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{inv.customer.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-white text-xs font-medium ${
                    inv.invoiceStatus === 'Issued'
                      ? 'bg-green-500'
                      : inv.invoiceStatus === 'Partial'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                >
                  {inv.invoiceStatus}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-white text-xs font-medium ${
                    inv.paymentStatus === 'Paid'
                      ? 'bg-green-600'
                      : inv.paymentStatus === 'Overdue'
                      ? 'bg-red-600'
                      : 'bg-yellow-500'
                  }`}
                >
                  {inv.paymentStatus}
                </span>
              </td>
              <td className="px-6 py-4 text-gray-900 font-medium whitespace-nowrap">
                {formatCLP(inv.totalAmount)}
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap">
                <button
                  onClick={() => navigate(`/invoice/${inv.invoiceNumber}`)}
                  className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg"
                >
                  Ver Detalle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
