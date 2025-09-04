import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 z-40 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:block`}
            >
                <h2 className="text-xl font-bold mb-6">MyApp</h2>
                <nav className="flex flex-col gap-4">
                    <NavLink
                        to={ROUTES.HOME_PAGE}
                        className={({ isActive }) =>
                            `p-2 rounded-md ${isActive
                                ? "bg-blue-500 text-white"
                                : "text-gray-700 hover:bg-gray-200"
                            }`
                        }
                        onClick={() => setIsOpen(false)} // close on mobile after navigation
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={ROUTES.ABOUT_PAGE}
                        className={({ isActive }) =>
                            `p-2 rounded-md ${isActive
                                ? "bg-blue-500 text-white"
                                : "text-gray-700 hover:bg-gray-200"
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to={ROUTES.CONTACT_PAGE}
                        className={({ isActive }) =>
                            `p-2 rounded-md ${isActive
                                ? "bg-blue-500 text-white"
                                : "text-gray-700 hover:bg-gray-200"
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </NavLink>
                </nav>
            </aside>

            {/* Overlay (for mobile) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="flex items-center justify-between bg-white shadow-md p-4 md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none"
                    >
                        {/* Simple Hamburger Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <h1 className="text-lg font-bold">MyApp</h1>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
