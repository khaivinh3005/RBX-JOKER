/* eslint-disable prettier/prettier */
import { useRoutes } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import CasePage from "./pages/CasePage";
import LoginLayout from "./pages/Login";

const useRouteElement = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <ProductList />,
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
