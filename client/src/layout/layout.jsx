import { Outlet } from "react-router-dom";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import NewsTicker from "../components/home/NewsTicker";
import Navbar from "../components/home/Navber";


const Layout = () => {
  return (
    <div>
      <Header />
      <NewsTicker />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;