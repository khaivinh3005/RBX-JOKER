/* eslint-disable prettier/prettier */
import { useRoutes } from "react-router-dom";
import ProductList from "./pages/HomePage/HomePage";
import CasePage from "./pages/CasePage";
import LoginLayout from "./pages/Login";
import HomePage from "./pages/HomePage/HomePage";

const useRouteElement = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/casepage",
      element: <CasePage />,
    },
    {
      path: "/login",
      element: (
        <LoginLayout>
          <CasePage />
        </LoginLayout>
      ),
    },
  ]);

  return element;
};

export default useRouteElement;
