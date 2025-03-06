import React from "react";
import OrderForm from "@/components/features/orders/OrderForm.tsx";


const OrderNew: React.FC = () => {

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Create new order</h1>
            </div>
            <div>
                <OrderForm/>
            </div>
        </div>
    )
}

export default OrderNew;