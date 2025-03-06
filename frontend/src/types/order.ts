import {OrderItem} from './orderItem.ts';
import {Invoice} from "@/types/invoices.ts";

export enum OrderStatus {
    NEW = 'NEW',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
    CANCELED = 'CANCELED',
    ERROR = 'ERROR',
}

export interface CleaningOrder {
    id?: number;
    creationDate?: string;
    items: OrderItem[];
    status?: OrderStatus;
    invoices: Invoice[];
}

export interface CleaningOrderRequest {
    items: OrderItem[];
}