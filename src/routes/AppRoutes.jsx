import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import Home from "../pages/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={ROUTES.HOME_PAGE} />} />
            <Route path={ROUTES.HOME_PAGE} element={<Home />} />
        </Routes>
    );
};

export default AppRoutes;
