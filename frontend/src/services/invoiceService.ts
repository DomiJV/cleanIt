import axios from 'axios';
import {Invoice} from "@/types/invoices.ts";

const getApiBaseUrl = () => {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:8080/api';
    }
    return `${window.location.protocol}//${window.location.host}/api`;
};

const API_BASE = getApiBaseUrl();
const API_URL = `${API_BASE}/invoices`;

export const invoiceService = {
    getInvoiceById: async (id: number): Promise<Invoice> => {
        const response = await axios.get<Invoice>(`${API_URL}/${id}`);
        return response.data;
    },
};