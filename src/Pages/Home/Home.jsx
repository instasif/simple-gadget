import About from "./About";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Products from "./Products";

const Home = () => {
    return (
        <div>
            <Carousel />
            <About />
            <Products />
            <Contact />
        </div>
    );
};

export default Home;