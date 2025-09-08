import { toggleTheme } from "../../features/theme/themeSlice.js";

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

          <span className="font-bold text-xl">
            <img className="w-24" src={logo} alt="brand-logo" />
          </span>
        </div>

        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-2 rounded-md bg-gray-200 text-gray-800 cursor-pointer transition-colors duration-500 ease-in-out"
        >
          {darkMode ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 stroke-black">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 stroke-black">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          }
        </button>
      </header>
    </div>
  );
}

export default Navbvar;
