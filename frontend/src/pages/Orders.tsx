import React from 'react';
import OrderList from '../components/features/orders/OrderList';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

const Orders: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Orders</h1>
                <Button asChild>
                    <Link to="/orders/new">
                        <PlusCircle className="h-4 w-4 mr-2" /> New Order
                    </Link>
                </Button>
            </div>

            <OrderList />
        </div>
    );
};

export default Orders;