import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/Logos/brand-logo.png";
import { ROUTES } from "../../constants/routes";
import Navbvar from "../navbar/Navbvar";
import Sidebar from "../Sidebar/Sidebar";

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
      <Navbvar setIsOpen={setIsOpen} logo={Logo} backgroundColor={backgroundColor} color={fontColor} dispatch={dispatch} darkMode={darkMode} />
      <div className="flex flex-1 overflow-hidden border-t border-white">
        <Sidebar backgroundColor={backgroundColor} color={fontColor} links={links} inactiveLinkClass={inactiveLinkClass} activeLinkClass={activeLinkClass} isOpen={isOpen} setIsOpen={setIsOpen} children={children} />
      </div>
    </div>
  );
};

export default Layout;
