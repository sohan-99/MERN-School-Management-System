import { Outlet } from "react-router-dom";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import NewsTicker from "../components/home/NewsTicker";


const Layout = () => {
  return (
    <div>
      <Header />
      <NewsTicker />
      
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;