
import StoreLayout from "../layout/StoreLayout";
import HomPage, { loader as productLoader } from "../pages/home/HomPage";
import AboutUs from "../pages/aboutus/AboutUs"
import ContactUs from "../pages/contacus/ContactUs"
import Cart from "../features/cart/Cart";
import Favourites from "../features/favourites/Favourites";
import CreateOrder from "../features/order/CreateOrder"
import Order from "../features/order/Order"
import AccountSeting from "../pages/login/AccountSeting"
import Login from "../pages/login/Login"
import AuthLayout from "../layout/AuthLayout";
import Error from "../ui/Error";
import { createBrowserRouter } from "react-router-dom";
import Shop, { loader as shopLoader } from "../features/shop/Shop";
import ProductDetails, {
  productDetailsLoader,
} from "../features/shop/ProductDetails";
import NotFound from "../ui/NotFound";

const router = createBrowserRouter([
  {
    element: <StoreLayout />,
    children: [
      {
        path: "/",
        element: <HomPage />,
        errorElement: <Error />,
        loader: productLoader,
      },
      {
        element: <Shop />,
        path: "/shop",
        errorElement: <Error />,
        loader: shopLoader,
      },
      {
        element: <ProductDetails />,
        path: "/product/:id",
        errorElement: <Error />,
        loader: productDetailsLoader,
      },
      {
        element: <AboutUs />,
        errorElement: <Error />,
        path: "/aboutus",
      },
      {
        element: <ContactUs />,
        errorElement: <Error />,
        path: "/contactus",
      },
      {
        element: <Cart />,
        errorElement: <Error />,
        path: "/cart",
      },
      {
        element: <Favourites />,
        errorElement: <Error />,
        path: "/favourites",
      },
      {
        element: <CreateOrder />,
        errorElement: <Error />,
        path: "/order/new",
      },
      {
        element: <Order />,
        errorElement: <Error />,
        path: "/order/:id",
      },
      {
        element: <AccountSeting />,
        errorElement: <Error />,
        path: "/account",
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        element: <Login />,
        errorElement: <Error />,
        path: "/login",
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
