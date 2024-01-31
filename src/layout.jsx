import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
