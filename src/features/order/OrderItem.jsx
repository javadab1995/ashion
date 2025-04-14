
import { formatCurrency } from "../../utils/helpers"


function OrderItem({ item }) {
    
    const {title, price, quantity, totalPrice } = item
    return (
      <main className="divide-y-2">
        <div className="bg-lime-700 text-lime-50 p-3 flex flex-wrap  justify-between ">
          <h2 className="space-x-4">
            {title} <span className="ml-2">* {quantity}</span> <span>{formatCurrency(price)}</span>
          </h2>

          <span>{formatCurrency(totalPrice)}</span>
            </div>
            
           
      </main>
    );
}

export default OrderItem
