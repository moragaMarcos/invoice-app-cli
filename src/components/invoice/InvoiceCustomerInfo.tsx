import { FaUser } from "react-icons/fa";
import { InvoiceCustomerInfoProps } from "./props/InvoiceCustomerInfoProps";

export default function InvoiceCustomerInfo({ customer }: InvoiceCustomerInfoProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-700 border-b pb-2 flex items-center gap-2">
        <FaUser className="text-gray-600 w-4 h-4" />
        Cliente
      </h3>
      <div className="text-sm text-gray-800 space-y-1.5">
        <p>
          Nombre:
          <span className="ml-1">{customer.name}</span>
        </p>
        <p>
          Email:
          <span className="ml-1">{customer.email}</span>
        </p>
      </div>
    </div>
  );
}
