import React, {useEffect, useState} from "react";
import {CleaningOrder, OrderStatus} from "@/types/order.ts";
import {orderService} from "@/services/orderService.ts";
import {useParams} from "react-router-dom";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import OrderStatusBadge from "@/components/features/orders/OrderStatusBadge.tsx";
import OrderItemTable from "@/components/features/orderItems/OrderItemTable.tsx";
import {orderItemColumns} from "@/components/features/orderItems/OrderItemColumn.tsx"
import InvoiceStatusBadge from "@/components/features/invoices/InvoiceStatusBadge.tsx";

const OrderDetails: React.FC = () => {
    const [order, setOrder] = useState<CleaningOrder | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(true);
    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        const fetchOrder = async () => {
            if (!id) return;

            try {
                const data = await orderService.getOrderById(parseInt(id));
                setOrder(data);
            } catch (err) {
                setError('Failed to load orders');
                console.error(err);
            } finally {
                //  await new Promise(r => setTimeout(r, 2000)); // FOR DEMONSTRATION PURPOSES
                //  setError('Failed to load orders');// FOR DEMONSTRATION PURPOSES
                setLoading(false);
            }
        }
        fetchOrder();
    }, []);


    if (loading || !order) {
        return (
            <h1>Loading...</h1>
        );
    }

    if (error) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Order</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-red-500">{error}</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Order Nr. {order.id}</h1>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Order Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Order Date</p>
                                <p>{order.creationDate && new Date(order.creationDate).toLocaleDateString()}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-sm text-gray-500">Status</p>
                                <OrderStatusBadge status={order?.status ?? OrderStatus.ERROR}/>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {order.invoices.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>Invoices</CardTitle>
                    </CardHeader>
                    <CardContent> {
                        order.invoices.map(invoice => (
                            <div key={invoice.id}
                                 className="flex items-center justify-between p-3 mb-2 border rounded-md">
                                <div className="space-y-1">
                                    <div className="">
                                        Invoice nr. {invoice.id}
                                    </div>
                                    <div className="text-sm">
                                        Created: {invoice.creationDate && new Date(invoice.creationDate).toLocaleDateString()}
                                    </div>
                                    {invoice.paidDate && (
                                        <div className="text-sm">
                                            Paid: {new Date(invoice.paidDate).toLocaleDateString()}
                                        </div>
                                    )}
                                    <div className=" ">
                                        Amount: CHF {invoice.amount}
                                    </div>
                                </div>
                                <div>
                                    {invoice.status && <InvoiceStatusBadge status={invoice.status}/>}
                                </div>
                            </div>
                        ))
                    }
                    </CardContent>
                </Card>)
            }

            <Card>
                <CardHeader>
                    <CardTitle>Items</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <OrderItemTable columns={orderItemColumns} data={order.items}/>
                </CardContent>
            </Card>
        </div>
    )
};

export default OrderDetails;