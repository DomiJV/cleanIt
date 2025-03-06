import React, {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {PlusCircle, Trash2} from 'lucide-react';
import {ItemType, OrderItem} from '@/types/orderItem';
import {orderService} from '@/services/orderService';
import {CleaningOrderRequest} from '@/types/order';
import {OrderItemTypeCombo} from "@/components/features/orderItems/OrderItemTypeCombo.tsx";

const OrderForm: React.FC = () => {
    const [items, setItems] = useState<OrderItem[]>([{
        material: '',
        type: ItemType.PANTS,
        price: 0
    }]);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleMaterialChange = (index: number, value: string) => {
        const updatedItems = [...items];
        updatedItems[index].material = value;
        setItems(updatedItems);
    };

    const handleTypeChange = (index: number, value: string) => {
        const updatedItems = [...items];
        updatedItems[index].type = value as ItemType;
        setItems(updatedItems);
        console.log(updatedItems)
    };

    const addItem = () => {
        setItems([...items, {
            material: '',
            type: ItemType.PANTS,
            price: 0
        }]);
    };

    const removeItem = (index: number) => {
        if (items.length > 1) {
            const updatedItems = [...items];
            updatedItems.splice(index, 1);
            setItems(updatedItems);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (items.find(item => !item.material.trim())) {
            setError('Material is missing');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            const orderData: CleaningOrderRequest = {
                items
            };
            await orderService.createOrder(orderData);
            setSuccess(true);
            setItems([{
                material: '',
                type: ItemType.PANTS,
                price: 0
            }]);
        } catch (err) {
            setError('Failed to create order');
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>New Cleaning Order</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <Label>Items</Label>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={addItem}
                            >
                                <PlusCircle className="h-4 w-4 mr-2"/> Add Item
                            </Button>
                        </div>

                        <div className="space-y-3">
                            {items.map((item, index) => (
                                <div key={index} className="flex gap-2">
                                    <Input
                                        value={item.material}
                                        onChange={(e) => handleMaterialChange(index, e.target.value)}
                                        placeholder="Material"
                                    />
                                    <OrderItemTypeCombo onValueChange={e => handleTypeChange(index, e)}/>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="icon"
                                        onClick={() => removeItem(index)}
                                        disabled={items.length == 1}
                                    >
                                        <Trash2 className="h-4 w-4"/>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {error && (
                        <Alert variant="destructive">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    {success && (
                        <Alert>
                            <AlertDescription>Order created successfully!</AlertDescription>
                        </Alert>
                    )}

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Creating Order...' : 'Submit Order'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default OrderForm;