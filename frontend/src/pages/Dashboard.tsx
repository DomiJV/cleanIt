import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>

            <div className="grid grid-cols-3 gap-6">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">New Orders</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">7</p>
                        <p className="text-sm text-gray-500 mt-1">Waiting to be processed</p>
                        <Button asChild className="w-full mt-4">
                            <Link to="/orders">View Orders</Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Button asChild className="w-full">
                            <Link to="/orders/new">New Cleaning Order</Link>
                        </Button>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
};

export default Dashboard;