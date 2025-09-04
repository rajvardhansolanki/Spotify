import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useTheme } from "../../context/ThemeContext";
import Logo from "../../assets/Logos/brand-logo.png";

const Layout = ({ children }) => {
    const { isDark, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const activeLinkClass = "bg-green-900 text-white";
    const inactiveLinkClass = "text-gray-400 hover:bg-green-900 hover:text-white";

    const links = [
        { path: ROUTES.HOME_PAGE, label: "Home" },
        { path: ROUTES.ABOUT_PAGE, label: "About" },
        { path: ROUTES.CONTACT_PAGE, label: "Contact" },
    ];

    return (
        <div className="w-full h-screen flex flex-col">
            {/* Navbar */}
            <header
                className={`border-b-2 border-green-900 flex w-full items-center justify-between px-4 sm:px-6 h-16 ${isDark ? "bg-slate-900" : "bg-black"
                    } shadow-md flex-shrink-0`}
            >
                <div className="flex items-center gap-2">
                    {/* Hamburger icon for mobile */}
                    <button
                        className="sm:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={() => setIsOpen(true)}
                    >
                        <svg
                            className="w-6 h-6 stroke-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Logo */}
                    <span className="font-bold text-xl">
                        <img className="w-24" src={Logo} alt="brand-logo" />
                    </span>
                </div>

                {/* Dark Mode Toggle */}
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
                <aside
                    className={`hidden sm:flex w-64 ${isDark ? "bg-slate-900" : "bg-black"
                        } shadow-lg p-4 flex-shrink-0 flex flex-col`}
                >
                    <nav className="flex flex-col gap-4">
                        {links.map((link) => (
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

                        <aside className={`relative w-64  ${isDark ? "bg-slate-900" : "bg-black"} shadow-lg p-4 flex-shrink-0 flex flex-col animate-slide-in`}>
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                <svg
                                    className="w-6 h-6 stroke-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            <nav className="flex flex-col gap-4 mt-14">
                                {links.map((link) => (
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
                <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-0 rounded-none sm:p-2 overflow-auto">
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
        </div >
    );
};

export default Layout;
