
import { Outlet } from 'react-router-dom';
import Navbar from './../Componants/Navbar/Navbar';
import Footer from './../Componants/Footer/Footer';

const Main = () => {
    return (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
    );
};

export default Main;