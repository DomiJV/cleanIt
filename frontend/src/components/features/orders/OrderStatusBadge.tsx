import React from "react";
import {OrderStatus} from "@/types/order.ts";
import {Badge} from "@/components/ui/badge.tsx";

const OrderStatusBadge: React.FC<{ status: OrderStatus }> = ({status}) => {
    const getVariant = () => {
        switch (status) {
            case OrderStatus.NEW:
                return 'bg-blue-100 text-blue-800';
            case OrderStatus.IN_PROGRESS:
                return 'bg-yellow-100 text-yellow-800';
            case OrderStatus.COMPLETED:
                return 'bg-green-100 text-green-800';
            case OrderStatus.CANCELED:
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <Badge className={getVariant()}>
            {status}
        </Badge>
    );
};

export default OrderStatusBadge;