import { Route, Routes } from 'react-router-dom';
import { routes } from './router'; 

const renderRoutes = (routes) => {
    return routes.map((route, index) => {
        if (route.children) {
            return (
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                >
                    {renderRoutes(route.children)}
                </Route>
            );
        } else {
            return (
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                />
            );
        }
    });
};

export const AppRouter = () => {
    return (
        <Routes>
            {renderRoutes(routes)}
        </Routes>
    );
}
