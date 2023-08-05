import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";
import './Main.css';
import Marquee from "react-fast-marquee";

const Main = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    return (
        <div>
            <Marquee className="text-white py-5 text-xl bg-orange-900">
            Start Your Musical Journey Today with 35% Off Instrument Lessons    |     Unlock Your Musical Potential with 20% Off Instrument Classes!
            </Marquee>
            <div className={`theme-container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
                <div className="text-center z-10">

                    <Navbar toggleTheme={toggleTheme}
                        isDarkTheme={isDarkTheme}
                    ></Navbar>

                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>

        </div>
    );
};

export default Main;