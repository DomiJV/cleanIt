import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card.tsx';
import {CleaningOrder} from '@/types/order';
import {orderService} from '@/services/orderService';
import OrderStatusBadge from "@/components/features/orders/OrderStatusBadge.tsx";
import {Input} from "@/components/ui/input.tsx";

const OrderList: React.FC = () => {
    const [orders, setOrders] = useState<CleaningOrder[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState<string>("");

    let timeoutId: NodeJS.Timeout | null = null

    const searchHandler = (search: string) => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            setSearch(search)
        }, 1000)
    }

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await orderService.getCustomerOrders(search);
                setOrders(data);
            } catch (err) {
                setError('Failed to load orders');
                console.error(err);
            } finally {
                //  await new Promise(r => setTimeout(r, 2000)); // FOR DEMONSTRATION PURPOSES
                //  setError('Failed to load orders');// FOR DEMONSTRATION PURPOSES
                setLoading(false);
            }
        };

        fetchOrders();
    }, [search]);

    if (loading) {
        return (
            <h1>Loading...</h1>
        );
    }

    if (error) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Orders</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-red-500">{error}</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className={"flex justify-between flex-row"}>
                    Orders
                    <Input className="w-25" type="text" placeholder="Search ID" onChange={(e) => searchHandler(e.target.value)}></Input>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {orders.length === 0 ? (
                    <p className="text-center text-gray-500 my-8">No orders found</p>
                ) : (
                    <div className="divide-y">
                        {orders.map((order) => (
                            <div key={order.id} className="py-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-medium">
                                            Order Nr {order.id}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {order.creationDate && new Date(order.creationDate).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        {order.status && <OrderStatusBadge status={order.status}/>}
                                        <Link
                                            to={`/orders/${order.id}`}
                                            className="text-blue-600 hover:underline text-sm"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">
                                        {order.items.length} items
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default OrderList;