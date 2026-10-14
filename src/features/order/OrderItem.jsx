import { formatCurrency } from "../../utils/helpers";
import { Package } from "lucide-react";

function OrderItem({ item }) {
  const { title, price, quantity, totalPrice } = item;

  const itemTotal = totalPrice ?? Number(price) * Number(quantity);

  return (
    <div className="flex items-center justify-between gap-4 border-b border-border py-4 last:border-b-0">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-bg text-primary">
          <Package size={20} />
        </div>

        <div className="min-w-0">
          <h3 className="truncate font-medium text-text-h">{title}</h3>

          <p className="mt-1 text-sm text-text-muted">
            {formatCurrency(price)} تومان
            <span className="mx-2">×</span>
            {quantity} عدد
          </p>
        </div>
      </div>

      <span className="shrink-0 font-semibold text-text-h">
        {formatCurrency(itemTotal)} تومان
      </span>
    </div>
  );
}

export default OrderItem;
