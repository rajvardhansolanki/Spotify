import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import About from "../pages/About/About";
import Contactus from "../pages/Contactus/Contactus";
import Home from "../pages/Home";
import PlayList from "../pages/Playlist/PlayList";
import Setting from "../pages/Setting/Setting";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.HOME_PAGE} />} />
      <Route path={ROUTES.HOME_PAGE} element={<Home />} />
      <Route path={ROUTES.ABOUT_PAGE} element={<About />} />
      <Route path={ROUTES.CONTACT_PAGE} element={<Contactus />} />
      <Route path={ROUTES.PLAYLIST_PAGE} element={<PlayList />} />
      <Route path={ROUTES.SETTING_PAGE} element={<Setting />} />
    </Routes>
  );
};

export default AppRoutes;
