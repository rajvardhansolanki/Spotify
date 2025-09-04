import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useTheme } from "../../context/ThemeContext";

const Layout = ({ children }) => {
    const { isDark, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const activeLinkClass = isDark
        ? "bg-blue-700 text-white"
        : "bg-blue-500 text-white";

    const inactiveLinkClass = isDark
        ? "text-gray-300 hover:bg-gray-700"
        : "text-gray-700 hover:bg-gray-200";

    return (
        <div className="w-full h-screen flex flex-col">
            {/* Navbar */}
            <header className="flex w-full items-center justify-between px-4 sm:px-6 h-16 bg-white dark:bg-gray-900 shadow-md flex-shrink-0">
                <div className="flex items-center gap-2">
                    {/* Hamburger icon only on small screens */}
                    <button
                        className="sm:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={() => setIsOpen(true)}
                    >
                        *
                    </button>
                    <span className="font-bold text-xl text-gray-900 dark:text-gray-100">
                        MyApp
                    </span>
                </div>

                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                    {isDark ? "🌙" : "☀️"}
                </button>
            </header>

            {/* Sidebar + Main */}
            <div className="flex flex-1 overflow-hidden">
                {/* Desktop Sidebar */}
                <aside className="hidden sm:flex w-64 bg-white dark:bg-gray-900 shadow-lg p-4 flex-shrink-0 flex-col">
                    <nav className="flex flex-col gap-4">
                        {[
                            { path: ROUTES.HOME_PAGE, label: "Home" },
                            { path: ROUTES.ABOUT_PAGE, label: "About" },
                            { path: ROUTES.CONTACT_PAGE, label: "Contact" },
                        ].map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `p-2 rounded-md transition-colors duration-200 ${isActive ? activeLinkClass : inactiveLinkClass
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                </aside>

                {/* Mobile Drawer */}
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex">
                        <div
                            className="fixed inset-0 bg-black/50"
                            onClick={() => setIsOpen(false)}
                        ></div>
                        <aside className="relative w-64 bg-white dark:bg-gray-900 shadow-lg p-4 flex-shrink-0 flex flex-col animate-slide-in">
                            <button
                                className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                &
                            </button>
                            <nav className="flex flex-col gap-4 mt-8">
                                {[
                                    { path: ROUTES.HOME_PAGE, label: "Home" },
                                    { path: ROUTES.ABOUT_PAGE, label: "About" },
                                    { path: ROUTES.CONTACT_PAGE, label: "Contact" },
                                ].map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `p-2 rounded-md transition-colors duration-200 ${isActive ? activeLinkClass : inactiveLinkClass
                                            }`
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                            </nav>
                        </aside>
                    </div>
                )}

                {/* Main Content */}
                <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 overflow-auto">
                    {children}
                </main>
            </div>

            {/* Tailwind animation */}
            <style>
                {`
          @keyframes slide-in {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
          }
          .animate-slide-in {
            animation: slide-in 0.3s ease-out forwards;
          }
        `}
            </style>
        </div>
    );
};

export default Layout;
