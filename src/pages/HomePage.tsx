import { useEffect, useState } from "react";
import InvoiceTable from "../components/invoice/InvoiceTable";
import InvoiceFilters from "../components/invoice/InvoiceFilters";
import Header from "../components/Header";
import { getAllInvoices, searchInvoices } from "../api/InvoiceApi";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import { Invoice } from "../models/Invoice";

export default function HomePage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    invoiceNumber: "",
    invoiceStatus: "",
    paymentStatus: "",
  });

  const fetchAll = async () => {
    try {
      const data = await getAllInvoices();
      setInvoices(data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.detail) {
        toast.error(error.response.data.detail);
      } else {
        toast.error("Error inesperado al agregar la nota de crédito.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      const invoiceNum = Number(filters.invoiceNumber);

      const result = await searchInvoices({
        invoiceStatus: filters.invoiceStatus,
        paymentStatus: filters.paymentStatus,
      });

      const filtered = filters.invoiceNumber
        ? result.filter(
            (inv) =>
              inv.invoiceNumber.toString() === filters.invoiceNumber.trim()
          )
        : result;
        
      if (filters.invoiceNumber && (isNaN(invoiceNum) || invoiceNum < 1)) {
        toast.warning("El número de factura debe ser mayor a 0");
        return;
      }

      setInvoices(filtered);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.detail) {
        toast.error(error.response.data.detail);
      } else {
        toast.error("Error inesperado al buscar las facturas.");
      }
    }
  };

  const handleReset = () => {
    setFilters({ invoiceNumber: "", invoiceStatus: "", paymentStatus: "" });
    fetchAll();
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Facturas Registradas</h2>

        <InvoiceFilters
          filters={filters}
          onChange={setFilters}
          onSearch={handleSearch}
          onReset={handleReset}
        />
        {loading ? (
          <Loading loadingMessage="Cargando facturas..." />
        ) : (
          <InvoiceTable invoices={invoices} />
        )}
      </main>
    </div>
  );
}
