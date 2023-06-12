import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";
import './Main.css';
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Main = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    return (
        <div>
            <div className={`theme-container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
                <div className="text-center z-10">
                {
                    isDarkTheme ? <button onClick={toggleTheme}><FaToggleOff className="h-6 w-6"></FaToggleOff></button> :
                    <button onClick={toggleTheme}><FaToggleOn className="h-6 w-6"></FaToggleOn></button>
                }
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>

        </div>
    );
};

export default Main;