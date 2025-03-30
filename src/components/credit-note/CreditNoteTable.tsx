import { formatCLP } from "../../utils/formatCLP";
import { useEffect, useState } from "react";
import { CreditNoteTableProps } from "./props/CreditNoteTableProps";


export default function CreditNoteTable({ notes }: CreditNoteTableProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 876);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 876);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (notes.length === 0)
    return <p className="text-gray-500">No hay notas de crédito asociadas.</p>;

  if (isMobile) {
    return (
      <div className="space-y-4">
        {notes.map((note) => (
          <div
            key={note.creditNoteNumber}
            className="bg-white rounded-2xl shadow-md p-4 space-y-2"
          >
            <div className="text-sm font-semibold text-gray-700">
              <span className="text-gray-500"># Nota:</span> {note.creditNoteNumber}
            </div>
            <div className="text-sm text-gray-700">
              <span className="text-gray-500">Monto:</span>{" "}
              {formatCLP(note.creditNoteAmount)}
            </div>
            <div className="text-sm text-gray-700">
              <span className="text-gray-500">Fecha:</span>{" "}
              {new Date(note.creditNoteDate).toLocaleString("es-CL", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-gray-200 uppercase text-xs tracking-wide text-gray-700">
          <tr>
            <th className="px-6 py-3 whitespace-nowrap"># Nota</th>
            <th className="px-6 py-3 whitespace-nowrap">Monto</th>
            <th className="px-6 py-3 whitespace-nowrap">Fecha</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {notes.map((note) => (
            <tr
              key={note.creditNoteNumber}
              className="hover:bg-gray-50 border-b transition-all"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {note.creditNoteNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formatCLP(note.creditNoteAmount)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(note.creditNoteDate).toLocaleString("es-CL", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
