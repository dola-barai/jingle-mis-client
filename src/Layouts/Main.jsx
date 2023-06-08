import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import PopularClasses from "../components/Home/Home/PopularClasses";
import PopularInstructors from "../components/Home/Home/PopularInstructors";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Footer></Footer>
        </div>
    );
};

export default Main;