import Banner from "../Components/Banner/Banner";
import Navber from "../Components/Navber/Navber";

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navber></Navber>
            <Banner></Banner>
        </div>
    );
};

export default MainLayout;