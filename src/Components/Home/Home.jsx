
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import HomeProject from "../HomeProject/HomeProject";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
          <Banner></Banner>
          <About></About>
          <HomeProject></HomeProject>
          <Contact></Contact>
          <Blogs></Blogs>
        </div>
    );
};

export default Home;