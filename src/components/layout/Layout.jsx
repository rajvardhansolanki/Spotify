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
    <div className="w-full h-screen flex flex-col transition-colors duration-500 ease-in-out">
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
      <div className="w-full" style={{ height: `calc(100vh - 4rem` }}>
        <div className="flex w-full h-full" >
          <Sidebar
            backgroundColor={backgroundColor}
            color={fontColor}
            links={links}
            inactiveLinkClass={inactiveLinkClass}
            activeLinkClass={activeLinkClass}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <div className="w-full relative">
            <RenderContent>{children}</RenderContent>
            <div className="w-full h-20 flex items-center absolute border-l border-green-900 bottom-0" style={{ backgroundColor: backgroundColor }}>
              <Player />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
