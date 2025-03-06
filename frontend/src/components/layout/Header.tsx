import React from 'react';
import {Link} from 'react-router-dom';
import {useCustomer} from "@/contexts/CustomerContext.tsx";

const Header: React.FC = () => {
    const customer = useCustomer();
    return (
        <header className="bg-blue-600 text-white">
            <div className="container mx-auto py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Clean It! AG</Link>
                <span className="text-sm">Welcome, {customer?.firstName} {customer?.lastName}</span>
            </div>
        </header>
    );
};

export default Header;