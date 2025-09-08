import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/Logos/brand-logo.png";
import { ROUTES } from "../../constants/routes";
import RenderContent from "../../pages/Main/RenderContent";
import Navbvar from "../navbar/Navbvar";
import Player from "../player/Player";
import Sidebar from "../sideBar/Sidebar";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { backgroundColor, fontColor } = useSelector(
    (state) => state.theme.colors
  );
  const darkMode = useSelector((state) => state.theme.darkMode);

  const activeLinkClass = "bg-green-900 text-white";
  const inactiveLinkClass =
    "text-gray-400 hover:bg-green-900 hover:text-white";

  const links = [
    { path: ROUTES.HOME_PAGE, label: "Home" },
    { path: ROUTES.ABOUT_PAGE, label: "Library" },
    { path: ROUTES.CONTACT_PAGE, label: "Favorite" },
    { path: ROUTES.PLAYLIST_PAGE, label: "Playlists" },
    { path: ROUTES.SETTING_PAGE, label: "Settings" },
  ];

  return (
    <div
      className="w-full h-screen flex flex-col overflow-hidden transition-colors duration-500 ease-in-out"
    >
      {/* Navbar */}
      <div className="w-full" style={{ height: "4rem" }}>
        <Navbvar
          setIsOpen={setIsOpen}
          logo={Logo}
          backgroundColor={backgroundColor}
          color={fontColor}
          dispatch={dispatch}
          darkMode={darkMode}
        />
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 w-full h-full overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          backgroundColor={backgroundColor}
          color={fontColor}
          links={links}
          inactiveLinkClass={inactiveLinkClass}
          activeLinkClass={activeLinkClass}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        {/* Main Content */}
        <div className="flex-1 relative overflow-hidden">
          <RenderContent>{children}</RenderContent>
        </div>
      </div>

      {/* Player (Fixed at bottom, no scroll issue) */}
      <div
        className="w-full h-20 flex items-center border-t border-green-900"
        style={{ backgroundColor }}
      >
        <Player />
      </div>
    </div>
  );
};

export default Layout;
