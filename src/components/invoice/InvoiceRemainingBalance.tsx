import { formatCLP } from "../../utils/formatCLP";
import { RemainingBalanceProps } from "./props/RemainingBalanceProps";

export default function InvoiceRemainingBalance({ remaining }: RemainingBalanceProps) {
  return (
    <section className="bg-blue-50 border border-blue-200 p-4 rounded-xl mt-6">
      <p className="text-base text-blue-800 font-medium">
        Saldo Restante:
        <span className="text-2xl font-bold text-blue-900 ml-1">
          {formatCLP(remaining)}
        </span>
      </p>
    </section>
  );
}
