import React from "react";
import {Badge} from "@/components/ui/badge.tsx";
import {InvoiceStatus} from "@/types/invoices.ts";

const InvoiceStatusBadge: React.FC<{ status: InvoiceStatus }> = ({status}) => {
    const getVariant = () => {
        switch (status) {
            case InvoiceStatus.OPEN:
                return 'bg-blue-100 text-blue-800';
            case InvoiceStatus.PARTIALLY_PAID:
                return 'bg-yellow-100 text-yellow-800';
            case InvoiceStatus.PAID:
                return 'bg-green-100 text-green-800';
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

export default InvoiceStatusBadge;