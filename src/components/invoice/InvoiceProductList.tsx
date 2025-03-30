import { formatCLP } from "../../utils/formatCLP";
import { InvoiceProductListProps } from "./props/InvoiceProductListProps";

export default function InvoiceProductList({ products }: InvoiceProductListProps) {
  return (
    <section>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        Detalle de factura
      </h3>
      <div className="flex flex-wrap p-4 gap-4 overflow-x-auto pb-2">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex shadow flex-col bg-white rounded-xl p-4 border border-gray-100"
          >
            <h4 className="text-md font-semibold text-gray-800 mb-2">
              {product.name}
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <span className="font-medium text-gray-500 mr-1">Cantidad:</span>
                {product.quantity}
              </li>
              <li>
                <span className="font-medium text-gray-500 mr-1">
                  Precio Unitario:
                </span>
                {formatCLP(product.unitPrice)}
              </li>
              <li>
                <span className="font-medium text-gray-500 mr-1">Subtotal:</span>
                <span className="text-green-600 font-semibold">
                  {formatCLP(product.subTotal)}
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
