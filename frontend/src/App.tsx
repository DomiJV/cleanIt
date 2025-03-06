import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Orders from "@/pages/Orders";
import OrderDetails from "@/pages/OrderDetails.tsx";
import OrderNew from "@/pages/OrderNew.tsx";
import {CustomerProvider} from "@/contexts/CustomerContext.tsx";


function App() {
    return (
        <CustomerProvider>
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/orders" element={<Orders/>}/>
                        <Route path="/orders/:id" element={<OrderDetails/>}/>
                        <Route path="/orders/new" element={<OrderNew/>}/>
                    </Routes>
                </MainLayout>
            </Router>
        </CustomerProvider>
    );
}

export default App;