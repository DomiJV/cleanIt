import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {ItemType} from "@/types/orderItem.ts";
import {FC} from "react";

interface OrderItemTypeComboProps {
    onValueChange?: (value: string) => void;
    defaultValue?: ItemType;
}

export const OrderItemTypeCombo: FC<OrderItemTypeComboProps> = ({
                                                                    onValueChange, defaultValue = ItemType.PANTS
                                                                }) => {
    return (
        <Select
            defaultValue={defaultValue}
            onValueChange={onValueChange}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value={ItemType.PANTS}>Pants</SelectItem>
                <SelectItem value={ItemType.SHIRT}>Shirt</SelectItem>
                <SelectItem value={ItemType.OTHERS}>Others</SelectItem>
            </SelectContent>
        </Select>
    )
}