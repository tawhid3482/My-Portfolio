
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
          <Banner></Banner>
          <About></About>
          <Projects></Projects>
          <Contact></Contact>
          <Blogs></Blogs>
        </div>
    );
};

export default Home;