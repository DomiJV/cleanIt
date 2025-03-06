export enum InvoiceStatus {
    OPEN = 'OPEN',
    PAID = 'PAID',
    PARTIALLY_PAID = 'PARTIALLY_PAID',
}

export interface Invoice {
    id?: number;
    creationDate?: string;
    paidDate?: string;
    amount?: string;
    status?: InvoiceStatus;
}