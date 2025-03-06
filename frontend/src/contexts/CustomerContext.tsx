import React, {createContext, useContext, useEffect, useState} from 'react';
import {Customer} from "@/types/customer.ts";
import {customerService} from "@/services/customerService.ts";


const CustomerContext = createContext<Customer | null>(null);

export const CustomerProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user, setUser] = useState<Customer | null>(null);

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const customer = await customerService.getCustomerById(1);
                setUser(customer);
            } catch {
                console.error("Error fetching customer");
            }
        }
        fetchCustomer();
    }, []);
    return (
        <CustomerContext.Provider value={user}>
            {children}
        </CustomerContext.Provider>
    );
};

export const useCustomer = () => {
    return useContext(CustomerContext);
};