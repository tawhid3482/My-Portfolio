import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* <Banner></Banner> */}
        </div>
    );
};

export default MainLayout;