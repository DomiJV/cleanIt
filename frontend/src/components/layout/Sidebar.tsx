import React from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <aside className="bg-gray-100 w-64 h-full shadow-md">
            <nav className="p-4">
                <ul className="space-y-2">
                    <li>
                        <NavLink
                            to="/"
                            end
                            className={({isActive}) =>
                                isActive ? 'active block p-2 rounded bg-blue-100 text-blue-600' : 'block p-2 rounded hover:bg-gray-200'
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="orders"
                            end
                            className={({isActive}) =>
                                isActive ? 'active block p-2 rounded bg-blue-100 text-blue-600' : 'block p-2 rounded hover:bg-gray-200'
                            }
                        >
                            Orders
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="orders/new"
                            className={({isActive}) =>
                                isActive ? 'active block p-2 rounded bg-blue-100 text-blue-600' : 'block p-2 rounded hover:bg-gray-200'
                            }
                        >
                            New Order
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;