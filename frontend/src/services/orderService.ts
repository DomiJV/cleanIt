import axios from 'axios';
import {CleaningOrder, CleaningOrderRequest} from '../types/order';


const getApiBaseUrl = () => {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:8080/api';
    }
    return `${window.location.protocol}//${window.location.host}/api`;
};

const API_BASE = getApiBaseUrl();
const API_URL = `${API_BASE}/orders`;

export const orderService = {
    getOrderById: async (id: number): Promise<CleaningOrder> => {
        const response = await axios.get<CleaningOrder>(`${API_URL}/${id}`);
        return response.data;
    },

    getCustomerOrders: async (search: string): Promise<CleaningOrder[]> => {
        const params = search ? {searchId: search} : undefined;
        const response = await axios.get<CleaningOrder[]>(API_URL, {params});
        return response.data;
    },

    createOrder: async (orderData: CleaningOrderRequest): Promise<CleaningOrder> => {
        const response = await axios.post<CleaningOrder>(API_URL, orderData);
        return response.data;
    }
};