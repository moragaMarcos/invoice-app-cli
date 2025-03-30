import { FaBroom, FaSearch } from "react-icons/fa";
import { InvoiceFiltersProps } from "./props/InvoiceFiltersProps";

export default function InvoiceFilters({
  filters,
  onChange,
  onSearch,
  onReset,
}: InvoiceFiltersProps) {
  return (
    <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <div>
          <label
            htmlFor="filterById"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Número de Factura
          </label>
          <input
            id="filterById"
            type="number"
            placeholder="Ej: 1"
            value={filters.invoiceNumber}
            onChange={(e) =>
              onChange({ ...filters, invoiceNumber: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="filterByInvoiceState"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Estado de Factura
          </label>
          <select
            id="filterByInvoiceState"
            value={filters.invoiceStatus}
            onChange={(e) =>
              onChange({ ...filters, invoiceStatus: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos</option>
            <option value="Issued">Issued</option>
            <option value="Partial">Partial</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="filterByPaymentState"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Estado de Pago
          </label>
          <select
            id="filterByPaymentState"
            value={filters.paymentStatus}
            onChange={(e) =>
              onChange({ ...filters, paymentStatus: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos</option>
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
            <option value="Overdue">Overdue</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <button
          onClick={onSearch}
          className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <FaSearch className="w-4 h-4" />
          Buscar
        </button>
        <button
          onClick={onReset}
          className="bg-gray-200 cursor-pointer hover:bg-gray-300 text-gray-800 px-6 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <FaBroom className="w-4 h-4" />
          Limpiar Filtros
        </button>
      </div>
    </div>
  );
}
