import { createBrowserRouter, RouterProvider} from "react-router-dom"
import HomPage, {loader as productLoader} from "./pages/home/HomPage"
import AboutUs from "./pages/aboutus/AboutUs";
import ContactUs from "./pages/contacus/ContactUs";
import Login from "./pages/login/Login";
import Shop, {loader as shopLoader}  from "./features/shop/Shop"
import Cart from "./features/cart/Cart"
import Favourites from "./features/favourites/Favourites";
import Error from "./ui/Error";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AccountSeting from "./pages/login/AccountSeting"

const router = createBrowserRouter([
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
    element: <Login />,
    errorElement: <Error />,
    path: "/login",
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
]);

function App() {
 

  return (
    
      <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App
