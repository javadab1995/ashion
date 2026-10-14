import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import MobileHeader from "../ui/MobileHeder";
import Footer from "../ui/Footer";


function StoreLayout() {
  return (
    <>
      <Header />
      <MobileHeader />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default StoreLayout;
