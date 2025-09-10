import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/Logos/brand-logo.png";
import { ROUTES } from "../../constants/routes.js";
import RenderContent from "../../pages/Main/RenderContent.jsx";
import Navbvar from "../navbar/Navbvar.jsx";
import Player from "../player/Player.jsx";
import Sidebar from "../sideBar/Sidebar.jsx";

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

  // Fixed heights
  const NAVBAR_HEIGHT = "4rem"; // 64px
  const PLAYER_HEIGHT = "5rem"; // 80px
  const SIDEBAR_WIDTH = "16rem"; // 256px (Tailwind w-64)


  return (
    <div
      className="w-full h-full flex flex-col overflow-hidden transition-colors duration-800 ease-in-out"
      style={{ backgroundColor }}
    >
      {/* Navbar */}
      <div className="w-full" style={{ height: NAVBAR_HEIGHT }}>
        <Navbvar
          setIsOpen={setIsOpen}
          logo={Logo}
          backgroundColor={backgroundColor}
          color={fontColor}
          dispatch={dispatch}
          darkMode={darkMode}
        />
      </div>

      {/* Middle section (Sidebar + Content) */}
      <div
        className="flex w-full overflow-hidden"
        style={{ height: `calc(100vh - ${NAVBAR_HEIGHT} - ${PLAYER_HEIGHT})` }}
      >
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

        {/* Content (only scrollable part) */}
        <div className="flex-1" style={{
          width: `calc(100% - ${SIDEBAR_WIDTH})`,
        }}>
          <RenderContent>{children}</RenderContent>
        </div>
      </div>

      {/* Player */}
      <div
        className="w-full flex items-center border-t border-green-900 absolute bottom-0 transition-colors duration-800 ease-in-out"
        style={{ height: PLAYER_HEIGHT, backgroundColor }}
      >
        <Player />
      </div>
    </div>
  );
};

export default Layout;
