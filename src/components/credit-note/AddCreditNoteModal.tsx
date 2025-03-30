import { useState } from "react";
import { formatCLP } from "../../utils/formatCLP";
import { CreditNoteModalProps } from "./props/CreditNoteModalProps";

export default function AddCreditNoteModal({
  isOpen,
  onClose,
  onSubmit,
  saldoDisponible,
}: CreditNoteModalProps) {
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = () => {
    if (amount > 0) {
      onSubmit(amount);
      setAmount(0);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-sm">
        <h2 className="text-lg font-semibold mb-4 ">Agregar Nota de Crédito</h2>

        <label
          htmlFor="amount"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Monto
          <p className="text-sm text-gray-600 mb-2">
            Saldo disponible:
            <span className="font-semibold text-green-700 ml-1">
              {formatCLP(saldoDisponible)}
            </span>
          </p>
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border w-full px-3 py-2 rounded mb-4"
          placeholder="Ingrese monto"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
