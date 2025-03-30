import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import {
  createCreditNote,
  getCreditNotesByInvoice,
  getInvoiceByNumber,
} from "../api/InvoiceApi";
import AddCreditNoteModal from "../components/credit-note/AddCreditNoteModal";
import { toast } from "react-toastify";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import InvoiceHeaderSection from "../components/invoice/InvoiceHeader";
import InvoiceCustomerInfo from "../components/invoice/InvoiceCustomerInfo";
import InvoiceDataInfo from "../components/invoice/InvoiceDataInfo";
import InvoiceRemainingBalance from "../components/invoice/InvoiceRemainingBalance";
import InvoiceProductList from "../components/invoice/InvoiceProductList";
import InvoiceCreditNote from "../components/invoice/InvoiceCreditNote";
import { Invoice } from "../models/Invoice";
import { CreditNote } from "../models/CreditNote";

export default function InvoiceDetailPage() {
  const { invoiceNumber } = useParams<{ invoiceNumber: string }>();
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [notes, setNotes] = useState<CreditNote[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (invoiceNumber) {
          const invoiceData = await getInvoiceByNumber(Number(invoiceNumber));
          const creditNotes = await getCreditNotesByInvoice(
            Number(invoiceNumber)
          );
          setInvoice(invoiceData);
          setNotes(creditNotes);
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response?.data?.detail) {
          toast.error(error.response.data.detail);
        } else {
          toast.error("Error inesperado al agregar la nota de crédito");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [invoiceNumber]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddCreditNote = async (amount: number) => {
    try {
      if (!invoice) return;

      await createCreditNote(invoice.invoiceNumber, amount);

      const updatedInvoice = await getInvoiceByNumber(invoice.invoiceNumber);
      const updatedNotes = await getCreditNotesByInvoice(invoice.invoiceNumber);

      setInvoice(updatedInvoice);
      setNotes(updatedNotes);
      setModalOpen(false);

      toast.success("Nota de crédito agregada exitosamente");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.data?.detail) {
        toast.error(error.response.data.detail);
      } else {
        toast.error("Error inesperado al agregar la nota de crédito");
      }
    }
  };

  if (loading)
    return (
          <Loading loadingMessage="Cargando datos de la factura..." />
    );
  if (!invoice)
    return <p className="p-6 text-red-600">Factura no encontrada.</p>;
  const totalNotas = notes.reduce((acc, n) => acc + n.creditNoteAmount, 0);
  const saldoRestante = invoice.totalAmount - totalNotas;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-6 max-w-6xl mx-auto space-y-10">
        <InvoiceHeaderSection
          invoiceNumber={invoice.invoiceNumber}
          onBack={() => navigate("/")}
        />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl">
          <InvoiceCustomerInfo customer={invoice.customer} />

          <InvoiceDataInfo invoice={invoice} />
        </section>
        
        <InvoiceRemainingBalance remaining={saldoRestante} />

        <InvoiceProductList products={invoice.products} />


        <InvoiceCreditNote onAdd={() => setModalOpen(true)} notes={notes} />

        <AddCreditNoteModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddCreditNote}
          saldoDisponible={saldoRestante}
        />
      </main>
    </div>
  );
}
