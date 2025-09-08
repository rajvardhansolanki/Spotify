import { NavLink } from "react-router-dom";

const Sidebar = ({
  backgroundColor,
  fontColor,
  links,
  inactiveLinkClass,
  activeLinkClass,
  isOpen,
  setIsOpen,
  children,
}) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className="hidden sm:flex flex-shrink-0 w-64 h-full md:overflow-y-scroll bg-red-900 shadow-lg p-4 flex-col transition-colors duration-500 ease-in-out"
        style={{ backgroundColor, color: fontColor }}
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

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          ></div>

          <aside
            className="relative w-64 shadow-lg p-4 flex-shrink-0 flex flex-col animate-slide-in transition-colors duration-500 ease-in-out"
            style={{ backgroundColor, color: fontColor }}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-200 bg-white sm:bg-blue-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-6 h-6"
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

export default Sidebar;
