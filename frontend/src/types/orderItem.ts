export enum ItemType {
    PANTS = 'PANTS',
    SHIRT = 'SHIRT',
    OTHERS = 'OTHERS'
}

export interface OrderItem {
    id?: number;
    material: string;
    type: ItemType;
    price: number;
}