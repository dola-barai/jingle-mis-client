import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";
import './Main.css';


const Main = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    return (
        <div>
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