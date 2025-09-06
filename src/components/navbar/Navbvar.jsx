import { toggleTheme } from "../../features/theme/themeSlice";

const Navbvar = ({
  setIsOpen,
  logo,
  backgroundColor,
  fontColor,
  dispatch,
  darkMode,
}) => {
  return (
    <div>
      <header
        className="flex w-full items-center justify-between px-4 sm:px-6 h-16 shadow-md flex-shrink-0 transition-colors duration-500 ease-in-out"
        style={{ backgroundColor, color: fontColor }}
      >
        <div className="flex items-center gap-2">
          {/* Hamburger icon for mobile */}
          <button
            className="cursor-pointer sm:hidden p-1 rounded-md hover:bg-gray-200 bg-white sm:bg-blue-500 transition-colors duration-300"
            onClick={() => setIsOpen(true)}
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <span className="font-bold text-xl">
            <img className="w-24" src={logo} alt="brand-logo" />
          </span>
        </div>

        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-2 rounded-md bg-gray-200 text-gray-800 cursor-pointer transition-colors duration-500 ease-in-out"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </header>
    </div>
  );
}

export default Navbvar;
