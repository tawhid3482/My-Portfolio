import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
            {/* <Banner></Banner> */}
        </div>
    );
};

export default MainLayout;