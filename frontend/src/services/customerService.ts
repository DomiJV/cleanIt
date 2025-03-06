import axios from 'axios';
import {Customer} from '../types/customer';


const getApiBaseUrl = () => {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:8080/api';
    }
    return `${window.location.protocol}//${window.location.host}/api`;
};

const API_BASE = getApiBaseUrl();
const API_URL = `${API_BASE}/customers`;

export const customerService = {
    getCustomerById: async (id: number): Promise<Customer> => {
        const response = await axios.get<Customer>(`${API_URL}/${id}`);
        return response.data;
    },
};